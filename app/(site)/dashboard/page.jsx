import Button from "@/components/Button";
import PageSubheader from "@/components/PageSubheader";
import Link from "next/link";
import React from "react";

const Dashboard = () => {
  return (
    <section>
      <PageSubheader
        title={"Dashboard"}
        body={
          <div className="flex gap-4 items-center">
            <Link
              href={"/dashboard/article-list/create"}
              className="outline_btn"
            >
              New article
            </Link>
            <Link href={"/dashboard/offers/create"} className="primary_btn">
              New offer
            </Link>
          </div>
        }
      />
    </section>
  );
};

export default Dashboard;
