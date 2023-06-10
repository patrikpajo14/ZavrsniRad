'use client'

import React from 'react';
import {useParams} from "next/navigation";

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
        <div>
            <h1>{filteredOffer.customerName}</h1>
        </div>
    );
};

export default OfferView;