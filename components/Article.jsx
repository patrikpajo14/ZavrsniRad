"use client"

import Image from "next/image";
import React, {useState} from "react";
import Button from "./Button";
import ConfirmDialog from "@/components/ConfirmDialog";

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

const Article = ({openDrawer, article, readOnly, setEdit, onSelect, onDelete}) => {
  const [openConfirm, setOpenConfirm] = useState(false);

  const articleColor = _colors.find(color => {return color.id === article.color_id})
  const articleType = _type.find(type => {return type.id === article.type_id})
  const articleExtras = _extras.find(extras => {return extras.id === article.extras_id})
  const articleBlinds = _blinds.find(blinds => {return blinds.id === article.blinds_id})

  const handleEdit =()=>{
    openDrawer();
    onSelect(article);
    setEdit(true)
  }

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
              <p>artcile: {article.name}</p>
              <p>amount: {article.amount}</p>
              <p>dimensions: {`${article.width}x${article.height}`}</p>
              <p>opening: {article.opening}</p>
            </div>
            <div className="w-[100%] flex flex-wrap gap-y-1 gap-x-3 md:gap-3 lg:w-auto lg:flex-col text-sm md:text-[16px]">
              <p>color: {articleColor.name}</p>
              <p>mosquito nets: {articleExtras.type}</p>
              <p>sub stock: {article.substock===1 ? "yes" : "no"}</p>
              <p>blinds: {articleBlinds.type}</p>
            </div>
            <div className="w-[100%] sm:w-[30%] lg:w-auto text-sm md:text-[16px]">
              <p>price: {article.price} <span className="text-xs">EUR</span></p>
            </div>
            <div className="flex gap-3 justify-between  sm:justify-end lg:justify-center w-[100%] sm:w-[50%] lg:w-auto lg:flex-col text-sm md:text-[16px]">
              {!readOnly &&(
                <>
                  <Button onClick={()=>{setOpenConfirm(true)}}>Delete</Button>
                  <Button secondary={true} onClick={handleEdit}>Edit button</Button>
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
              <Button variant="contained" color="error" onClick={onDelete}>
                Izbriši
              </Button>
            }
        />
      </>
  );
};

export default Article;
