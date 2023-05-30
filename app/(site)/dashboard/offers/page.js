import Button from "@/components/Button";
import PageSubheader from "@/components/PageSubheader";
import Link from "next/link";
import React from "react";

const Offers = () => {
  return (
    <section>
      <PageSubheader
        title={"Offers list"}
        body={
          <Link href="/dashboard/offers/create" className="primary_btn">
            New offer
          </Link>
        }
      />
    </section>
  );
};

export default Offers;
