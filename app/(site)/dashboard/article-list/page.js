"use client";
import React from "react";
import ArticleLIst from "@/components/article/ArticleLIst";
import ArticleListHeader from "./components/ArticleListHeader";
import { useGetArticles } from "@/app/actions/GetArticles";

const ArticleListPage = () => {
  const { data, isLoading, isError } = useGetArticles();

  if (isError) {
    return <div>Error fetching data</div>;
  }

  return (
    <section>
      <ArticleListHeader />
      {isLoading ? <p>Loading...</p> : <ArticleLIst articleList={data} />}
    </section>
  );
};

export default ArticleListPage;
