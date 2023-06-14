'use client'

import React, {useState} from 'react';
import Article from "@/components/Article";
import CustomDrawer from "@/components/CustomDrawer";
import ArticleForm from "@/components/article/ArticleForm";

function ArticleLIst({articleList, readOnly}) {
    const [openDrawer, setOpenDrawer] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [listData, setListData] = useState(articleList);

    const handleCloseDrawer = () =>{
        setOpenDrawer(false);
    }

    const handleOpenDrawer =()=>{
        setOpenDrawer(true)
    }

    const handleSelectArticle =(article)=>{
        setSelectedArticle(article)
    }

    const handleDeleteArticle = (id) => {
        const deleteRow = listData.filter((row) => row.id !== id);
        setListData(deleteRow);
    };

    return (
        <section>
            {articleList.map((article) => (
                <Article
                    key={article.id}
                    article={article}
                    readOnly={readOnly}
                    setEdit={()=>{setIsEdit(true)}}
                    onSelect={handleSelectArticle}
                    onDelete={()=>handleDeleteArticle(article.id)}
                    openDrawer={handleOpenDrawer}
                />
            ))}

            <CustomDrawer isOpened={openDrawer} onClose={handleCloseDrawer} title={"Create article"}>
                <ArticleForm isEdit={isEdit} article={selectedArticle}/>
            </CustomDrawer>
        </section>
    );
}

export default ArticleLIst;