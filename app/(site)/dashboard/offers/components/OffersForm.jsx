"use client";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "@/components/Button";
import Input from "@/components/forms/Input";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Select from "@/components/forms/Select";
import FormProvider from "@/components/forms/FormProvider";
import { toast } from "react-hot-toast";

const article_list = ["single window", "single doors", "double doors"];

const OffersForm = ({ isEdit = false, offer }) => {
  const [isLoading, setIsLoading] = useState(false);

  const OffersSchema = Yup.object().shape({
    customerName: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
  });

  const defaultValues = useMemo(
    () => ({
      customerName: offer?.customerName || "",
      address: offer?.address || "",
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

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      toast.success(!isEdit ? "Create success" : "Update success");
      console.log("DATA", data);
    } catch (error) {
      console.error(error);
    }
    setIsLoading(false);
  };

  return (
    <div className="card">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-[20px] md:gap-5 md:p-[30px]">
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
            placeholder={"Select your article"}
            disabled={isLoading}
            name={"article"}
            options={article_list}
          />

          <div className="flex flex-col justify-end pt-2 sm:p-0">
            <Button disabled={isLoading} fullWidth type="submit">
              Custom article
            </Button>
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default OffersForm;
