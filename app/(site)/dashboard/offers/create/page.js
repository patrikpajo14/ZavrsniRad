import React from "react";
import OffersForm from "../components/OffersForm";
import PageSubheader from "@/components/PageSubheader";
import Article from "@/components/Article";

const CreateOffer = () => {
  return (
    <section className="max-h-[calc(100vh - 50px)]">
      <PageSubheader title={"Create offer"} />

      <OffersForm />

      <div className="mt-[20px] py-[10px] mx-[-15px] px-[15px]">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </section>
  );
};

export default CreateOffer;
