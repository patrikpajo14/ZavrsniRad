"use client";

import React from "react";
import { useParams } from "next/navigation";
import PageSubheader from "@/components/PageSubheader";
import ArticleLIst from "@/components/article/ArticleLIst";
import Link from "next/link";
import { useGetOffersById } from "@/app/actions/GetOffers";
import Loader from "@/components/Loader/Loader";
import { format, parseISO } from "date-fns";

const OfferView = () => {
  const params = useParams();

  const { data: offer, isLoading } = useGetOffersById(params.id);

  console.log(offer);

  return (
    <section className="max-h-[calc(100vh - 50px)]">
      <PageSubheader
        title={`Preview offer: ${params.id}`}
        body={
          <div className="flex gap-4 items-center">
            <div>
              <p>
                {!isLoading
                  ? format(parseISO(offer?.create_date), "dd.MM.yyyy")
                  : ""}
              </p>
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
            <p>
              Address: {offer?.customer_address}, {offer?.place?.place_name}
            </p>
            <p className="font-bold text-[18px]">
              Total price: {offer?.total} €
            </p>
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
