"use client";

import Button from "@/components/Button";
import Input from "@/components/Input";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const OffersForm = () => {
  const session = useSession();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      address: "",
      email: "",
      phone: "",
      article: "",
    },
  });

  const onSubmit = (data) => {
    setIsLoading(true);
    console.log(data);
  };

  return (
    <div className="card">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-[20px] md:gap-5 md:p-[30px]">
          <Input
            disabled={isLoading}
            errors={errors}
            required
            register={register}
            id="name"
            label="Customer Name"
          />
          <Input
            disabled={isLoading}
            errors={errors}
            required
            register={register}
            id="addres"
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
          <Input
            disabled={isLoading}
            errors={errors}
            required
            register={register}
            id="article"
            label="Article"
            type="number"
          />
          <div className="flex flex-col justify-end pt-2 sm:p-0">
            <Button disabled={isLoading} fullWidth type="submit">
              Custom article
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OffersForm;
