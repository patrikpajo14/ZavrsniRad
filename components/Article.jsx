import Image from "next/image";
import React from "react";
import Button from "./Button";

const Article = () => {
  return (
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
          <p>artcile: single window</p>
          <p>amount: 1</p>
          <p>dimensions: 100x200</p>
          <p>opening: right</p>
        </div>
        <div className="w-[100%] flex flex-wrap gap-y-1 gap-x-3 md:gap-3 lg:w-auto lg:flex-col text-sm md:text-[16px]">
          <p>color: white</p>
          <p>mosquito nets: yes</p>
          <p>sub stock: no</p>
          <p>blinds: yes</p>
        </div>
        <div className="w-[100%] sm:w-[30%] lg:w-auto text-sm md:text-[16px]">
          <p>price: 200€</p>
        </div>
        <div className="flex gap-3 justify-between  sm:justify-end lg:justify-center w-[100%] sm:w-[50%] lg:w-auto lg:flex-col text-sm md:text-[16px]">
          <Button>Delete</Button>
          <Button secondary={true}>Edit button</Button>
        </div>
      </div>
    </div>
  );
};

export default Article;
