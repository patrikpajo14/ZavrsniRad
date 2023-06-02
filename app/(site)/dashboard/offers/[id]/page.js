import React from "react";
import PageSubheader from "@/components/PageSubheader";
import Article from "@/components/Article";
import OffersForm from "@/app/(site)/dashboard/offers/components/OffersForm";

const EditOffer = () => {
    return (
        <section className="max-h-[calc(100vh - 50px)]">
            <PageSubheader title={"Edit offer"} />

            <OffersForm />

            <div className="mt-[20px] py-[10px] mx-[-15px] px-[15px] overflow-y-scroll max-h-[70vh] md:max-h-[40vh] xl:max-h-[50vh]">
                <Article />
            </div>
        </section>
    );
};

export default EditOffer;
