import React from "react";
import ArticleLIst from "@/components/article/ArticleLIst";
import ArticleListHeader from "./components/ArticleListHeader";

const ArticleListPage = async () => {
  const _articleList = [
    {
      id: 1,
      name: "Single window",
      type_id: 1,
      amount: 1,
      width: 2000,
      height: 2000,
      color_id: 1,
      opening: "right",
      substock: 0,
      blinds_id: 0,
      extras_id: 0,
      price: 200,
    },
    {
      id: 2,
      name: "Doors",
      type_id: 1,
      amount: 1,
      width: 1000,
      height: 2000,
      color_id: 1,
      opening: "right",
      substock: 0,
      blinds_id: 0,
      extras_id: 0,
      price: 700,
    },
    {
      id: 3,
      name: "Double window",
      type_id: 1,
      amount: 1,
      width: 4000,
      height: 2000,
      color_id: 1,
      opening: "right",
      substock: 1,
      blinds_id: 0,
      extras_id: 0,
      price: 600,
    },
  ];

  return (
    <section>
      <ArticleListHeader />
      <ArticleLIst articleList={_articleList} />
    </section>
  );
};

export default ArticleListPage;
