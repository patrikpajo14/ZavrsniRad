'use client'

import React from 'react';
import {useParams} from "next/navigation";
import PageSubheader from "@/components/PageSubheader";
import OffersForm from "@/app/(site)/dashboard/offers/components/OffersForm";
import ArticleLIst from "@/components/article/ArticleLIst";

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

            {filteredOffer.name}
        </section>
    );
};

export default OfferView;