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
import RadioGroup from "@/components/forms/RadioGroup";
import { useGetColors } from "@/app/actions/GetColors";
import { useGetPanels } from "@/app/actions/GetPanels";
import { useGetExtrasType } from "@/app/actions/GetExtrasType";
import { useGetBlindsType } from "@/app/actions/GetBlindsType";
import { useGetArticleType } from "@/app/actions/GetArticleTypes";
import axios from "axios";
import { useGetArticles } from "@/app/actions/GetArticles";

export default function ArticleForm({ isEdit = false, article }) {
  const colors = useGetColors();
  const panels = useGetPanels();
  const extrasTypes = useGetExtrasType();
  const blindsTypes = useGetBlindsType();
  const types = useGetArticleType();

  const articleExtras = extrasTypes?.data?.find((extras) => {
    return extras?.id === article?.extrasId;
  });
  const articleBlinds = blindsTypes?.data?.find((blinds) => {
    return blinds?.id === article?.blindsId;
  });

  const { refetch, isLoading } = useGetArticles();

  const [loading, setLoading] = useState(false);
  const [haveBlinds, setHaveBlinds] = useState(false);
  const [haveExtras, setHaveExtras] = useState(false);

  const ArticleSchema = Yup.object().shape({
    typeId: Yup.string().required("Required"),
    panelId: Yup.string().required("Required"),
    colorId: Yup.string().required("Required"),
    width: Yup.number().required("Required"),
    height: Yup.number().required("Required"),
    blindsTypeId: Yup.string().required("Required"),
    blindsWidth: Yup.number().required("Required"),
    blindsHeight: Yup.number().required("Required"),
    extrasTypeId: Yup.string().required("Required"),
    extrasWidth: Yup.number().required("Required"),
    extrasHeight: Yup.number().required("Required"),
    price: Yup.number().required("Required"),
    amount: Yup.number().required("Required"),
  });

  const defaultValues = useMemo(
    () => ({
      typeId: article?.typeId || "",
      panelId: article?.panelId || "",
      colorId: article?.colorId || "",
      opening: article?.opening || "",
      substock: article?.substock || "",
      width: article?.width || 0,
      amount: article?.amount || 1,
      height: article?.height || 0,
      blindsTypeId: article?.blindsId || "",
      blindsWidth: article?.blindsWidth || 0,
      blindsHeight: article?.blindsHeight || 0,
      extrasTypeId: article?.extrasId || "",
      extrasWidth: article?.extrasWidth || 0,
      extrasHeight: article?.extrasHeight || 0,
      price: article?.price || 0,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [article]
  );

  const methods = useForm({
    resolver: yupResolver(ArticleSchema),
    defaultValues,
  });

  const {
    reset,
    handleSubmit,
    register,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (isEdit && article) {
      reset(defaultValues);
      articleBlinds?.id === "648ec585f8b656a025269d84"
        ? setHaveBlinds(false)
        : setHaveBlinds(true);

      articleExtras?.id === "648ec57ff8b656a025269d82"
        ? setHaveExtras(false)
        : setHaveExtras(true);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, article]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (isEdit && article) {
        axios
          .put(`/api/article/${article.id}`, data)
          .then((callback) => {
            if (callback?.status === 200) {
              toast.success("Article updated");
            }
          })
          .catch((error) => toast.error(error.response.data))
          .finally(() => setLoading(false));
      }
      if (!isEdit) {
        axios
          .post("/api/article", data)
          .then((callback) => {
            if (callback?.status === 200) {
              toast.success("Article Created");
            }
          })
          .catch((error) => toast.error(error.response.data))
          .finally(() => setLoading(false));
      }
      reset();
      refetch();
      console.log("DATA", data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-7">
          <h2 className="text-xl font-bold mb-4">Type of Article</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-5">
            <Select
              label={"Type"}
              placeholder={"Select type..."}
              disabled={loading}
              name={"typeId"}
              errors={errors}
              register={register}
            >
              {types.data?.map((option, index) => (
                <option key={index} value={option.id}>
                  {option.name}
                </option>
              ))}
            </Select>
            <Select
              label={"Type of panel"}
              disabled={loading}
              placeholder={"Select panel..."}
              name={"panelId"}
              errors={errors}
              register={register}
            >
              {panels.data?.map((option, index) => (
                <option key={index} value={option.id}>
                  {option.name}
                </option>
              ))}
            </Select>

            <div className="flex items-center gap-2 justify-between">
              <RadioGroup
                title={"Opening"}
                defaultValue={"left"}
                register={register}
                inputs={[
                  { id: "left", name: "opening", value: "left" },
                  { id: "right", name: "opening", value: "right" },
                ]}
              />
              <RadioGroup
                title={"Sub Stock"}
                defaultValue={"no"}
                register={register}
                inputs={[
                  { id: "substockYes", name: "substock", value: "yes" },
                  { id: "substockNo", name: "substock", value: "no" },
                ]}
              />
            </div>
            <Select
              label={"Color"}
              placeholder={"Select color..."}
              disabled={loading}
              name={"colorId"}
              errors={errors}
              register={register}
            >
              {colors.data?.map((option, index) => (
                <option key={index} value={option.id}>
                  {option.name}
                </option>
              ))}
            </Select>
          </div>
        </div>
        <div className="mb-7">
          <h2 className="text-xl font-bold mb-4">Dimensions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-5">
            <Input
              disabled={loading}
              errors={errors}
              required
              register={register}
              id="width"
              label="Width"
              type="number"
            />
            <Input
              disabled={loading}
              errors={errors}
              required
              register={register}
              id="height"
              label="Height"
              type="number"
            />
          </div>
        </div>
        <div className="mb-7">
          <h2 className="text-xl font-bold mb-4">Blinds</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-5">
            <div className="flex items-center gap-2 justify-between">
              <RadioGroup
                title={"Do you want blinds?"}
                handleOnChange={() => {
                  setHaveBlinds(!haveBlinds);
                }}
                defaultValue={haveBlinds ? "yes" : "no"}
                register={register}
                inputs={[
                  { id: "blindsYes", name: "blinds", value: "yes" },
                  { id: "blindsNo", name: "blinds", value: "no" },
                ]}
              />
            </div>
            {haveBlinds && (
              <>
                <Select
                  label={"Type"}
                  placeholder={"Select type..."}
                  disabled={loading}
                  name={"blindsTypeId"}
                  errors={errors}
                  register={register}
                >
                  {blindsTypes.data.map((option, index) => (
                    <option key={index} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </Select>
                <Input
                  disabled={loading}
                  errors={errors}
                  required
                  register={register}
                  id="blindsWidth"
                  label="Width"
                  type="number"
                />
                <Input
                  disabled={loading}
                  errors={errors}
                  required
                  register={register}
                  id="blindsHeight"
                  label="Height"
                  type="number"
                />
              </>
            )}
          </div>
        </div>
        <div className="mb-7">
          <h2 className="text-xl font-bold mb-4">Mosquito nets</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-5">
            <div className="flex items-center gap-2 justify-between">
              <RadioGroup
                title={"Do you want extra nets?"}
                handleOnChange={() => {
                  setHaveExtras(!haveExtras);
                }}
                defaultValue={haveExtras ? "yes" : "no"}
                register={register}
                inputs={[
                  { id: "extrasYes", name: "extras", value: "yes" },
                  { id: "extrasNo", name: "extras", value: "no" },
                ]}
              />
            </div>
            {haveExtras && (
              <>
                <Select
                  label={"Type"}
                  placeholder={"Select type..."}
                  disabled={loading}
                  name={"extrasTypeId"}
                  errors={errors}
                  register={register}
                >
                  {extrasTypes.data.map((option, index) => (
                    <option key={index} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </Select>
                <Input
                  disabled={loading}
                  errors={errors}
                  required
                  register={register}
                  id="extrasWidth"
                  label="Width"
                  type="number"
                />
                <Input
                  disabled={loading}
                  errors={errors}
                  required
                  register={register}
                  id="extrasHeight"
                  label="Height"
                  type="number"
                />
              </>
            )}
          </div>
        </div>
        <div className="mb-7">
          <h2 className="text-xl font-bold mb-4">Price</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-5">
            <Input
              disabled={loading}
              errors={errors}
              required
              register={register}
              id="price"
              label="Price"
              type="number"
            />
            <Input
              disabled={loading}
              errors={errors}
              required
              register={register}
              id="amount"
              label="Amount"
              type="number"
            />
          </div>
          <div className="pt-6">
            <Button disabled={loading} fullWidth type="submit">
              {!isEdit ? "Create Article" : "Update Article"}
            </Button>
          </div>
        </div>
      </FormProvider>
    </>
  );
}
