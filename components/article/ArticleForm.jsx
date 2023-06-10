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
import RadioGroup from "@/components/forms/RadioGroup";

const _type = [
    {
        id: 1,
        name: "Doors",
    },
    {
        id: 2,
        name: "Windows",
    },
]

const _panels= [
    {
        id: 1,
        name: "Wise",
    },
    {
        id: 2,
        name: "Salamander",
    },
    {
        id: 3,
        name: "Deco",
    },
]

const _colors = [
    {
        id: 1,
        name: "white",
    },
    {
        id: 2,
        name: "antracit",
    },
    {
        id: 3,
        name: "wood",
    },
]

const _extras = [
    {
        id: 0,
        type: "none",
        width: 0,
        height: 0
    }
]

const _blinds = [
    {
        id: 0,
        type: "none",
        width: 0,
        height: 0
    }
]

const article_list = ["single window", "single doors", "double doors"];

const ArticleForm = ({ isEdit = false, article }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [haveBlinds, setHaveBlinds] = useState(false);
    const [haveExtras, setHaveExtras] = useState(false);

    const ArticleSchema = Yup.object().shape({
        type: Yup.string().required("Required"),
        panel: Yup.string().required("Required"),
        color: Yup.string().required("Required"),
        opening: Yup.string().required("Required"),
        substock: Yup.string().required("Required"),
        width: Yup.string().required("Required"),
        height: Yup.string().required("Required"),
        blindsType: Yup.string().required("Required"),
        blindsWidth: Yup.string().required("Required"),
        blindsHeight: Yup.string().required("Required"),
        extrasType: Yup.string().required("Required"),
        extrasWidth: Yup.string().required("Required"),
        extrasHeight: Yup.string().required("Required"),
        price: Yup.string().required("Required"),
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
        try {
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 500));
            reset();
            toast.success(!isEdit ? "Article Created" : "Article updated");
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
                            options={_type}
                        >
                            {_type.map((option, index) => (
                                <option key={index} value={option.name}>
                                    {option.name}
                                </option>
                            ))}
                        </Select>
                        <Select
                            label={"Type of panel"}
                            disabled={isLoading}
                            placeholder={"Select panel..."}
                            name={"panel"}
                            options={_panels}
                        >
                            {_panels.map((option, index) => (
                                <option key={index} value={option.name}>
                                    {option.name}
                                </option>
                            ))}
                        </Select>

                        <div className="flex items-center gap-2 justify-between">
                            <RadioGroup title={"Opening"} defaultValue={"left"} inputs={[
                                {id:"left", name:"opening", value:"left"},
                                {id:"right", name:"opening", value:"right"},
                            ]} />
                            <RadioGroup title={"Sub Stock"} defaultValue={"no"} inputs={[
                                {id:"substockYes", name:"substock", value:"yes"},
                                {id:"substockNo", name:"substock", value:"no"},
                            ]} />
                        </div>
                        <Select
                            label={"Color"}
                            placeholder={"Select color..."}
                            disabled={isLoading}
                            name={"color"}
                            options={_colors}
                        >
                            {_colors.map((option, index) => (
                                <option key={index} value={option.name}>
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
                        />
                        <Input
                            disabled={isLoading}
                            errors={errors}
                            required
                            register={register}
                            id="height"
                            label="Height"
                            type="text"
                        />
                    </div>
                </div>
                <div className="mb-7">
                    <h2 className="text-xl font-bold mb-4">Blinds</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-5">
                        <div className="flex items-center gap-2 justify-between">
                            <RadioGroup title={"Do you want blinds?"} handleOnChange={()=>{setHaveBlinds(!haveBlinds)}} defaultValue={"no"} inputs={[
                                {id:"blindsYes", name:"blinds", value:"yes"},
                                {id:"blindsNo", name:"blinds", value:"no"},
                            ]} />
                        </div>
                        {haveBlinds &&(
                            <>
                                <Select
                                    label={"Type"}
                                    placeholder={"Select type..."}
                                    disabled={isLoading}
                                    name={"blindsType"}
                                >
                                    {_blinds.map((option, index) => (
                                        <option key={index} value={option.type}>
                                            {option.type}
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
                                />
                                <Input
                                    disabled={isLoading}
                                    errors={errors}
                                    required
                                    register={register}
                                    id="blindsHeight"
                                    label="Height"
                                    type="text"
                                />
                            </>
                        )}
                    </div>
                </div>
                <div className="mb-7">
                    <h2 className="text-xl font-bold mb-4">Mosquito nets</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-5">
                        <div className="flex items-center gap-2 justify-between">
                            <RadioGroup title={"Do you want extra nets?"} handleOnChange={()=>{setHaveExtras(!haveExtras)}} defaultValue={"no"} inputs={[
                                {id:"extrasYes", name:"extras", value:"yes"},
                                {id:"extrasNo", name:"extras", value:"no"},
                            ]} />
                        </div>
                        {haveExtras &&(
                            <>
                                <Select
                                    label={"Type"}
                                    placeholder={"Select type..."}
                                    disabled={isLoading}
                                    name={"extrasType"}
                                >
                                    {_extras.map((option, index) => (
                                        <option key={index} value={option.type}>
                                            {option.type}
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
                                />
                                <Input
                                    disabled={isLoading}
                                    errors={errors}
                                    required
                                    register={register}
                                    id="extrasHeight"
                                    label="Height"
                                    type="text"
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
                        />
                        <div className="flex flex-col justify-end pt-2 sm:p-0">
                            <Button disabled={isLoading} fullWidth type="submit">
                                Add item
                            </Button>
                        </div>
                    </div>
                </div>
            </FormProvider>
        </>
    );
};

export default ArticleForm;
