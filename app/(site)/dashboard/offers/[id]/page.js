"use client";

import React, { useEffect, useState } from "react";
import PageSubheader from "@/components/PageSubheader";
import Article from "@/components/Article";
import OffersForm from "@/app/(site)/dashboard/offers/components/OffersForm";
import { useParams } from "next/navigation";
import CustomDrawer from "@/components/CustomDrawer";
import ArticleForm from "@/components/article/ArticleForm";
import ArticleLIst from "@/components/article/ArticleLIst";

const _articleList = [
    {
        id: 1,
        name: "Single window",
        type_id: 1,
        amount: 1,
        width: 2000,
        height: 2000,
        color_id: 1,
        opening: "right",
        substock: 0,
        blinds_id: 0,
        extras_id: 0,
        price: 200
    },
    {
        id: 2,
        name: "Doors",
        type_id: 1,
        amount: 1,
        width: 1000,
        height: 2000,
        color_id: 1,
        opening: "right",
        substock: 0,
        blinds_id: 0,
        extras_id: 0,
        price: 700
    },
    {
        id: 3,
        name: "Double window",
        type_id: 1,
        amount: 1,
        width: 4000,
        height: 2000,
        color_id: 1,
        opening: "right",
        substock: 1,
        blinds_id: 0,
        extras_id: 0,
        price: 600
    }
]

const EditOffer = () => {
    const params = useParams();
    const _offersList = [
        {
            id: "1",
            customerName: "Jayvion Simon",
            date: "03.05.2023",
            address: "some address, 13",
            status: "paid",
            email:"test@gmail.com",
            phone: "095666777",
            price: 2000,
        },
        {
            id: "2",
            customerName: "Lucian Obrien",
            date: "03.05.2023",
            address: "some address, 13",
            status: "un paid",
            email:"test@gmail.com",
            phone: "095666777",
            price: 2000,
        },
        {
            id: "3",
            customerName: "Deja Brady",
            date: "03.05.2023",
            address: "some address, 13",
            status: "un paid",
            email:"test@gmail.com",
            phone: "095666777",
            price: 2000,
        },
        {
            id: "4",
            customerName: "Harrison Stein",
            date: "03.05.2023",
            address: "some address, 13",
            status: "paid",
            email:"test@gmail.com",
            phone: "095666777",
            price: 2000,
        },
        {
            id: "5",
            customerName: "Harrison Ford",
            date: "03.05.2023",
            address: "some address, 13",
            status: "paid",
            email:"test@gmail.com",
            phone: "095666777",
            price: 2000,
        },
    ];

    const filteredOffer = _offersList.find(offer => {return offer.id === params.id})

  return (
    <section className="max-h-[calc(100vh - 50px)]">
      <PageSubheader title={"Edit offer"} />

      <OffersForm isEdit={true} offer={filteredOffer} />

      <div className="mt-[20px] py-[10px] mx-[-15px] px-[15px] overflow-y-auto">
          <ArticleLIst articleList={_articleList} />
      </div>
    </section>
  );
};

export default EditOffer;
