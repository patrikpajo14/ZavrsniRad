"use client";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button";
import Input from "@/components/forms/Input";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "@/components/forms/Select";
import FormProvider from "@/components/forms/FormProvider";
import { toast } from "react-hot-toast";
import { useGetArticles } from "@/app/actions/GetArticles";
import ArticleLIst from "@/components/article/ArticleLIst";
import Article from "@/components/article/Article";
import axios from "axios";

const OffersForm = ({ isEdit = false, offer }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedArticles, setSelectedArticles] = useState([]);

  const articles = useGetArticles();

  const OffersSchema = Yup.object().shape({
    customerName: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    city: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
  });

  const defaultValues = useMemo(
    () => ({
      customerName: offer?.customerName || "",
      address: offer?.address || "",
      address: offer?.city || "",
      email: offer?.email || "",
      phone: offer?.phone || "",
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [offer]
  );

  const methods = useForm({
    resolver: yupResolver(OffersSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (isEdit && offer) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, offer]);

  const handleOnSelect = (event) => {
    let tmpArticle = articles?.data?.find((article) => {
      return article?.id === event.target.value;
    });

    const newState = selectedArticles?.map((article) => {
      if (article?.id === tmpArticle?.id) {
        tmpArticle = null;
        return { ...article, amount: article.amount + 1 };
      }

      return article;
    });

    if (tmpArticle !== null) {
      setSelectedArticles([...newState, tmpArticle]);
    } else {
      setSelectedArticles([...newState]);
    }
  };

  const handleDeleteArticle = (id) => {
    const deleteRow = selectedArticles.filter((row) => row.id !== id);
    setSelectedArticles(deleteRow);
  };

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      const body = {
        data: data,
        articles: selectedArticles,
      };
      const place = {
        name: data.city,
      };
      setSelectedArticles([]);

      if (isEdit && offer) {
        /*         axios
          .put(`/api/article/${article.id}`, data)
          .then((callback) => {
            if (callback?.status === 200) {
              toast.success("Offer is updated successfuly");
            }
          })
          .catch((error) => toast.error(error.response.data))
          .finally(() => setLoading(false)); */
      }
      if (!isEdit) {
        axios
          .post("/api/offer", body)
          .then((callback) => {
            if (callback?.status === 200) {
              toast.success("Offer is created successfuly");
            }
          })
          .catch((error) => toast.error(error.response.data))
          .finally(() => setIsLoading(false));
      }
      reset();
      console.log("DATA", body);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <>
      <div className="card">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-[20px] md:gap-5 md:p-[30px]">
            <Input
              disabled={isLoading}
              errors={errors}
              required
              register={register}
              id="customerName"
              label="Customer Name"
            />
            <Input
              disabled={isLoading}
              errors={errors}
              required
              register={register}
              id="address"
              label="Address"
              type="text"
            />
            <Input
              disabled={isLoading}
              errors={errors}
              required
              register={register}
              id="city"
              label="City"
              type="text"
              sx="capitalize"
            />
            <Input
              disabled={isLoading}
              errors={errors}
              required
              register={register}
              id="email"
              label="Email"
              type="email"
            />
            <Input
              disabled={isLoading}
              errors={errors}
              required
              register={register}
              id="phone"
              label="Phone"
              type="number"
            />
            <Select
              label={"Article"}
              placeholder={"Select article..."}
              disabled={isLoading}
              name={"article"}
              errors={errors}
              register={register}
              onChange={handleOnSelect}
              reset={true}
            >
              {articles.data?.map((option, index) => (
                <option key={index} value={option.id}>
                  {option.name} :{option.width}x{option.height}
                  {`+ ${option.blindsWidth > 0 ? "Blinds" : ""}`}
                </option>
              ))}
            </Select>

            <div className="flex flex-col justify-end pt-2 sm:p-0">
              <Button secondary disabled={isLoading} fullWidth>
                Custom article
              </Button>
            </div>

            <div className="flex flex-col justify-end pt-2 sm:p-0">
              <Button disabled={isLoading} fullWidth type="submit">
                Create offer
              </Button>
            </div>
          </div>
        </FormProvider>
      </div>
      <div className="mt-7">
        {selectedArticles?.map((article) => (
          <Article
            key={article.id}
            article={article}
            offerItem={true}
            onDelete={() => {
              handleDeleteArticle(article.id);
            }}
          />
        ))}
      </div>
    </>
  );
};

export default OffersForm;
