import PageLoader from "@/components/PageLoader/PageLOader";
import PageSubheader from "@/components/PageSubheader";
import WidgetsRow from "@/components/dashboard/WidgetsRow";
import { OffersTable } from "@/components/offers";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <section>
      <PageSubheader
        title={"Dashboard"}
        body={
          <div className="flex gap-4 items-center">
            <Link href={"/dashboard/article-list"} className="outline_btn">
              Articles
            </Link>
            <Link href={"/dashboard/offers/create"} className="primary_btn">
              New offer
            </Link>
          </div>
        }
      />

      <WidgetsRow />

      <OffersTable limit={5} />

      <PageLoader />
    </section>
  );
};

export default Dashboard;
