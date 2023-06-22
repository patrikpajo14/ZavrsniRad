import prisma from "../../../libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const { id } = params;
    const offer = await prisma.offer.findUnique({
      where: {
        id: id,
      },
    });

    const total = offer.articleList.reduce(
      (sum, article) => sum + article.price * article.amount,
      0
    );
    const body = {
      ...offer,
      total: total,
    };
    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    // Find the offers that reference the article
    const updatedOffers = await prisma.offer.updateMany({
      where: {
        articleIDs: {
          contains: id,
        },
      },
      data: {
        articleIDs: {
          set: [],
        },
      },
    });

    console.log(updatedOffers);

    // Update the offers by removing the article ID from the articleIDs array
    /*    const updatePromises = offers.map((offer) => {
        const updatedArticleIDs = offer.articleIDs.filter(
          (articleId) => articleId !== id
        );
  
        return prisma.offer.update({
          where: {
            id: offer.id,
          },
          data: {
            articleIDs: updatedArticleIDs,
          },
        });
      }); */

    const deletedArticle = await prisma.article.delete({
      where: {
        id: aid,
      },
    });

    return NextResponse.json(deletedArticle);
  } catch (error) {
    return NextResponse.json(null);
  }
}
