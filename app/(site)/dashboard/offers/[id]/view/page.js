"use client";

import React from "react";
import { useParams } from "next/navigation";
import PageSubheader from "@/components/PageSubheader";
import ArticleLIst from "@/components/article/ArticleLIst";
import Link from "next/link";
import { useGetOffersById } from "@/app/actions/GetOffers";
import Loader from "@/components/Loader/Loader";

const OfferView = () => {
  const params = useParams();

  const { data: offer, isLoading } = useGetOffersById(params.id);

  return (
    <section className="max-h-[calc(100vh - 50px)]">
      <PageSubheader
        title={`Edit offer ${params.id}`}
        body={
          <div className="flex gap-4 items-center">
            <div>
              <p>13.06.2023</p>
            </div>
            <Link
              href={`/dashboard/offers/${params.id}`}
              className="outline_btn"
            >
              Edit offer
            </Link>
            <Link href={"/dashboard/offers/create"} className="primary_btn">
              New offer
            </Link>
          </div>
        }
      />

      {isLoading ? (
        <div>
          <Loader sx={"min-h-[500px]"} />
        </div>
      ) : (
        <>
          <div className="mb-7">
            <p>Name: {offer?.customer_name}</p>
            <p>Phone: {offer?.customer_phone_number}</p>
            <p>Email: {offer?.customer_email}</p>
            <p>Address: {offer?.customer_address}</p>
          </div>

          <div>
            <h2 className="mb-4 font-bold text-[20px]">Articles</h2>
            <ArticleLIst readOnly={true} articleList={offer?.articleList} />
          </div>
        </>
      )}
    </section>
  );
};

export default OfferView;
