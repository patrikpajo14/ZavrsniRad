"use client";

import React from "react";
import SmallWidget from "./smallWidget";
import { useGetOffers } from "@/app/actions/GetOffers";
import WidgetWithGraph from "./WidgetWithGraph";
import Loader from "../Loader/Loader";

const WidgetsRow = () => {
  const { data: offers, isLoading } = useGetOffers();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1  sm:grid-cols-3 gap-2 md:gap-5 mb-2 md:mb-5">
        <Loader />
        <Loader />
        <Loader />
      </div>
    );
  }

  const offersDone = offers.filter((offer) => {
    return offer.status === "done";
  });
  const offersPending = offers.filter((offer) => {
    return offer.status === "pending";
  });
  const offersRejected = offers.filter((offer) => {
    return offer.status === "rejected";
  });

  console.log(offersDone);

  return (
    <div className="grid grid-cols-1  sm:grid-cols-3 gap-2 md:gap-5 mb-2 md:mb-5">
      <WidgetWithGraph
        title="Percentage of Done"
        doneNumber={offersDone.length}
        totalNumber={offers.length}
      />
      <SmallWidget
        title="Offers Pending"
        number={offersPending.length}
        image="/assets/images/pending.png"
      />
      <SmallWidget
        title="Offers Done"
        number={offersDone.length}
        image="/assets/images/done.png"
      />
    </div>
  );
};

export default WidgetsRow;
