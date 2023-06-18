"use client";

import React, { useState } from "react";
import Article from "@/components/Article";
import CustomDrawer from "@/components/CustomDrawer";
import ArticleForm from "@/components/article/ArticleForm";
import axios from "axios";
import { toast } from "react-hot-toast";

function ArticleLIst({ articleList, readOnly }) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [listData, setListData] = useState(articleList);

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const handleSelectArticle = (article) => {
    setSelectedArticle(article);
  };

  const handleDeleteArticle = (id) => {
    axios
      .delete(`/api/article/${id}`)
      .then((callback) => {
        if (callback?.status === 200) {
          toast.success("Article deleted successfuly!");
        }
      })
      .catch((error) => toast.error(error.response.data));
    const deleteRow = listData.filter((row) => row.id !== id);
    setListData(deleteRow);
  };

  return (
    <section>
      {articleList === undefined || articleList.lenght < 1 ? (
        <div className="text-center text-[24px] font-bold py-10">
          List is Empty
        </div>
      ) : (
        <>
          {articleList?.map((article) => (
            <Article
              key={article.id}
              article={article}
              readOnly={readOnly}
              setEdit={() => {
                setIsEdit(true);
              }}
              onSelect={handleSelectArticle}
              onDelete={() => handleDeleteArticle(article.id)}
              openDrawer={handleOpenDrawer}
            />
          ))}
        </>
      )}

      <CustomDrawer
        isOpened={openDrawer}
        onClose={handleCloseDrawer}
        title={"Create article"}
      >
        <ArticleForm isEdit={isEdit} article={selectedArticle} />
      </CustomDrawer>
    </section>
  );
}

export default ArticleLIst;
