import Button from "@/components/Button";
import PageSubheader from "@/components/PageSubheader";
import React from "react";

const Dashboard = () => {
  return (
    <section>
      <PageSubheader
        title={"Dashboard"}
        body={
          <div className="flex gap-4 items-center">
            <Button secondary={true}>New article</Button>
            <Button>New offer</Button>
          </div>
        }
      />
    </section>
  );
};

export default Dashboard;
