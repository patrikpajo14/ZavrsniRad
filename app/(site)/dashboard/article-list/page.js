import Article from "@/components/Article";
import Button from "@/components/Button";
import PageSubheader from "@/components/PageSubheader";
import React from "react";

const ArtcileList = () => {
  return (
    <section>
      <PageSubheader
        title={"Article List"}
        body={<Button>New article</Button>}
      />
      <div className="w-[100%]">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </section>
  );
};

export default ArtcileList;
