"use client";
import Button from "@/components/Button";
import CustomDrawer from "@/components/CustomDrawer";
import PageSubheader from "@/components/PageSubheader";
import ArticleForm from "@/components/article/ArticleForm";
import React, { useState } from "react";

const ArticleListHeader = ({ colors }) => {
  const [openDrawer, setOpenDrawer] = useState(false);

  console.log(colors);

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };
  return (
    <>
      <PageSubheader
        title={"Article List"}
        body={<Button onClick={handleOpenDrawer}>New article</Button>}
      />
      <CustomDrawer
        isOpened={openDrawer}
        onClose={handleCloseDrawer}
        title={"Create article"}
      >
        <ArticleForm colors={colors} />
      </CustomDrawer>
    </>
  );
};

export default ArticleListHeader;
