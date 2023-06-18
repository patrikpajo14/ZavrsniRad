"use client";

import Image from "next/image";
import React, { useState } from "react";
import Button from "./Button";
import ConfirmDialog from "@/components/ConfirmDialog";
import { useGetColors } from "@/app/actions/GetColors";
import { useGetPanels } from "@/app/actions/GetPanels";
import { useGetExtrasType } from "@/app/actions/GetExtrasType";
import { useGetBlindsType } from "@/app/actions/GetBlindsType";

const Article = ({
  openDrawer,
  article,
  readOnly,
  setEdit,
  onSelect,
  onDelete,
}) => {
  const [openConfirm, setOpenConfirm] = useState(false);

  const colors = useGetColors();
  const panels = useGetPanels();
  const extrasTypes = useGetExtrasType();
  const blindsTypes = useGetBlindsType();

  const articleColor = colors.data?.find((color) => {
    return color.id === article.colorId;
  });
  const articlePanel = panels.data?.find((panels) => {
    return panels.id === article.panelId;
  });
  const articleExtras = extrasTypes.data?.find((extras) => {
    return extras.id === article.extrasId;
  });
  const articleBlinds = blindsTypes.data?.find((blinds) => {
    return blinds.id === article.blindsId;
  });

  const handleEdit = () => {
    openDrawer();
    onSelect(article);
    setEdit(true);
  };

  const handleDelete = () => {
    setOpenConfirm(false);
    onDelete();
  };

  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };

  return (
    <>
      <div className="flex flex-col w-[100%] shadow-main rounded-[10px] mb-[15px] md:flex-row">
        <div className="w-[100%] md:w-[175px] border-b-gray-200 md:border-r-gray-200 border-b-[1px] md:border-b-[0] md:border-r-[1px] p-[15px] md:p-[20px]">
          <Image
            src={"/assets/images/window.png"}
            width="75"
            height="117"
            alt="img"
            className="m-auto"
          />
        </div>
        <div className="p-[15px] md:p-[20px] flex-1 flex gap-3 justify-between flex-wrap lg:flex-nowrap">
          <div className="w-[100%] flex flex-wrap gap-y-1 gap-x-3 md:gap-3 lg:w-auto lg:flex-col text-sm md:text-[16px]">
            <p>artcile: {article?.name}</p>
            <p>amount: {article?.amount}</p>
            <p>dimensions: {`${article?.width}x${article?.height}`}</p>
            <p>opening: {article?.opening}</p>
          </div>
          <div className="w-[100%] flex flex-wrap gap-y-1 gap-x-3 md:gap-3 lg:w-auto lg:flex-col text-sm md:text-[16px]">
            <p>panel: {articlePanel?.name}</p>
            <p>color: {articleColor?.name}</p>
            <p>sub stock: {article?.substock}</p>
          </div>
          <div className="w-[100%] md:w-[30%] flex flex-wrap gap-y-1 gap-x-3 md:gap-3 lg:w-auto lg:flex-col text-sm md:text-[16px]">
            <p>
              mosquito nets: {articleExtras?.name}{" "}
              {article?.extrasWidth
                ? `${article?.extrasWidth}x${article?.extrasHeight}`
                : ""}
            </p>
            <p>
              blinds: {articleBlinds?.name}{" "}
              {article?.blindsWidth
                ? `${article?.blindsWidth}x${article?.blindsHeight}`
                : ""}
            </p>
            <p>
              price: {article?.price} <span className="text-xs">EUR</span>
            </p>
          </div>
          <div className="flex gap-3 justify-between  sm:justify-end lg:justify-center w-[100%] md:w-[50%] lg:w-auto sm:flex-col text-sm md:text-[16px]">
            {!readOnly && (
              <>
                <Button
                  onClick={() => {
                    setOpenConfirm(true);
                  }}
                >
                  Delete
                </Button>
                <Button secondary={true} onClick={handleEdit}>
                  Edit button
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
      <ConfirmDialog
        open={openConfirm}
        onClose={handleCloseConfirm}
        title="Izbriši"
        content="Jeste li sigurni da želite obrisati?"
        action={
          <Button variant="contained" color="error" onClick={handleDelete}>
            Izbriši
          </Button>
        }
      />
    </>
  );
};

export default Article;
