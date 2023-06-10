"use client"

import Button from "@/components/Button";
import PageSubheader from "@/components/PageSubheader";
import React, {useState} from "react";
import CustomDrawer from "@/components/CustomDrawer";
import ArticleForm from "@/components/article/ArticleForm";
import ArticleLIst from "@/components/article/ArticleLIst";

const ArticleListPage = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

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
            price: 200
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
            price: 700
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
            price: 600
        }
    ]

    const handleCloseDrawer = () =>{
        setOpenDrawer(false);
    }

    const handleOpenDrawer =()=>{
        setOpenDrawer(true)
    }


  return (
    <section>
      <PageSubheader
        title={"Article List"}
        body={<Button onClick={handleOpenDrawer}>New article</Button>}
      />
        <ArticleLIst articleList={_articleList}/>

        <CustomDrawer isOpened={openDrawer} onClose={handleCloseDrawer} title={"Create article"}>
            <ArticleForm/>
        </CustomDrawer>
    </section>
  );
};

export default ArticleListPage;
