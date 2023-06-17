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

export default function ArticleForm({ isEdit = false, article }) {
  const colors = useGetColors();
  const panels = useGetPanels();
  const extrasTypes = useGetExtrasType();
  const blindsTypes = useGetBlindsType();
  const types = useGetArticleType();

  const [isLoading, setIsLoading] = useState(false);
  const [haveBlinds, setHaveBlinds] = useState(false);
  const [haveExtras, setHaveExtras] = useState(false);

  const ArticleSchema = Yup.object().shape({
    type: Yup.number().required("Required"),
    panel: Yup.number().required("Required"),
    color: Yup.number().required("Required"),
    width: Yup.number().required("Required"),
    height: Yup.number().required("Required"),
    blindsType: Yup.number().required("Required"),
    blindsWidth: Yup.number().required("Required"),
    blindsHeight: Yup.number().required("Required"),
    extrasType: Yup.number().required("Required"),
    extrasWidth: Yup.number().required("Required"),
    extrasHeight: Yup.number().required("Required"),
    price: Yup.number().required("Required"),
  });

  const defaultValues = useMemo(
    () => ({
      type: article?.type || "",
      panel: article?.panel || "",
      color: article?.color || "",
      opening: article?.opening || "",
      substock: article?.substock || "",
      width: article?.width || "",
      height: article?.height || "",
      blindsType: article?.blindsType || "",
      blindsWidth: article?.blindsWidth || "",
      blindsHeight: article?.blindsHeight || "",
      extrasType: article?.extrasType || "",
      extrasWidth: article?.extrasWidth || "",
      extrasHeight: article?.extrasHeight || "",
      price: article?.price || "",
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
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, article]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      axios
        .post("/api/article", data)
        .then((callback) => {
          if (callback?.status === 200) {
            toast.success(!isEdit ? "Article Created" : "Article updated");
          }
        })
        .catch((error) => toast.error(error.response.data))
        .finally(() => setIsLoading(false));
      reset();
      console.log("DATA", data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
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
              disabled={isLoading}
              name={"type"}
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
              disabled={isLoading}
              placeholder={"Select panel..."}
              name={"panel"}
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
              disabled={isLoading}
              name={"color"}
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
              disabled={isLoading}
              errors={errors}
              required
              register={register}
              id="width"
              label="Width"
              type="number"
            />
            <Input
              disabled={isLoading}
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
                defaultValue={"no"}
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
                  disabled={isLoading}
                  name={"blindsType"}
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
                  disabled={isLoading}
                  errors={errors}
                  required
                  register={register}
                  id="blindsWidth"
                  label="Width"
                  type="number"
                />
                <Input
                  disabled={isLoading}
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
                defaultValue={"no"}
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
                  disabled={isLoading}
                  name={"extrasType"}
                  errors={errors}
                  register={register}
                >
                  {extrasTypes.data.map((option, index) => (
                    <option key={index} value={option.name}>
                      {option.name}
                    </option>
                  ))}
                </Select>
                <Input
                  disabled={isLoading}
                  errors={errors}
                  required
                  register={register}
                  id="extrasWidth"
                  label="Width"
                  type="number"
                />
                <Input
                  disabled={isLoading}
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
              disabled={isLoading}
              errors={errors}
              required
              register={register}
              id="price"
              label="Price"
              type="number"
            />
            <div className="flex flex-col justify-end pt-2 sm:p-0">
              <Button disabled={isLoading} fullWidth type="submit">
                {!isEdit ? "Create Article" : "Update Article"}
              </Button>
            </div>
          </div>
        </div>
      </FormProvider>
    </>
  );
}
