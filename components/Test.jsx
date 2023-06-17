"use client";
import { useGetArticleType } from "@/app/actions/GetArticleTypes";
import { useGetBlindsType } from "@/app/actions/GetBlindsType";
import { useGetColors } from "@/app/actions/GetColors";
import { useGetExtrasType } from "@/app/actions/GetExtrasType";
import { useGetPanels } from "@/app/actions/GetPanels";
import React from "react";

const Test = () => {
  const colors = useGetColors();
  const panels = useGetPanels();
  const extras = useGetExtrasType();
  const blinds = useGetBlindsType();
  const type = useGetArticleType();

  return <div>Test</div>;
};

export default Test;
