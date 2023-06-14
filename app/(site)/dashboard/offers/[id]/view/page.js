'use client'

import React from 'react';
import {useParams} from "next/navigation";
import PageSubheader from "@/components/PageSubheader";
import OffersForm from "@/app/(site)/dashboard/offers/components/OffersForm";
import ArticleLIst from "@/components/article/ArticleLIst";
import Link from "next/link";
import Button from "@/components/Button";

const OfferView = () => {
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
            articles: [
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
            ]
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
            articles: [
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
            ]
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
            articles: [
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
            articles: [
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
            ]
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
            articles: [
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
        },
    ];

    const filteredOffer = _offersList.find(offer => {return offer.id === params.id})

    return (
        <section className="max-h-[calc(100vh - 50px)]">
            <PageSubheader
                title={`Edit offer ${params.id}`}
                body={
                <div className="flex gap-4 items-center">
                    <div>
                        <p>13.06.2023</p>
                    </div>
                    <Button
                        secondary
                        href={`/dashboard/offers/${params.id}`}
                        className="outline_btn"
                    >
                        Edit offer
                    </Button>
                    <Link href={"/dashboard/offers/create"} className="primary_btn">
                        New offer
                    </Link>
                </div>
                }
            />

            <div className="mb-7">
                <p>Name: {filteredOffer?.customerName}</p>
                <p>Phone: {filteredOffer?.phone}</p>
                <p>Email: {filteredOffer?.email}</p>
                <p>Address: {filteredOffer?.address}</p>
            </div>

            <div>
                <h2 className="mb-4 font-bold text-[20px]">Articles</h2>
                <ArticleLIst readOnly={true} articleList={filteredOffer?.articles} />
            </div>

        </section>
    );
};

export default OfferView;