import prisma from "../../../libs/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  try {
    const { id } = params;

    const deletedArticle = await prisma.article.findUnique({
      where: {
        id: id,
      },
      include: { offers: true },
    });

    console.log(deletedArticle);

    const offerIdsToUpdate = deletedArticle.offersIDs;

    console.log(offerIdsToUpdate);

    for (const offerId of offerIdsToUpdate) {
      console.log(offerId);
      await prisma.offer.update({
        where: { id: offerId },
        data: {
          ...data,
          articleIDs: {
            set: ["nista"],
          },
        },
      });
    }

    console.log("kraj");

    return NextResponse.json(deletedArticle);
  } catch (error) {
    return NextResponse.json(null);
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    const {
      typeId,
      panelId,
      colorId,
      opening,
      substock,
      amount,
      width,
      height,
      blindsTypeId,
      blindsWidth,
      blindsHeight,
      extrasTypeId,
      extrasWidth,
      extrasHeight,
      price,
    } = body;

    const type = await prisma.type.findUnique({
      where: {
        id: typeId,
      },
    });

    const name = type.name;

    if (
      !type ||
      !panelId ||
      !opening ||
      !substock ||
      !width ||
      !height ||
      !price
    ) {
      return new NextResponse("Missing Fields", { status: 400 });
    }

    const article = await prisma.article.update({
      data: {
        name: name,
        amount: amount,
        width: width,
        height: height,
        opening: opening,
        substock: substock,
        price: price,
        type: {
          connect: { id: typeId },
        },
        panel: {
          connect: { id: panelId },
        },
        color: {
          connect: { id: colorId },
        },
        blinds: {
          connect: { id: blindsTypeId },
        },
        blindsWidth: blindsWidth,
        blindsHeight: blindsHeight,
        extras: {
          connect: { id: extrasTypeId },
        },
        extrasWidth: extrasWidth,
        extrasHeight: extrasHeight,
      },
      where: {
        id: id,
      },
    });

    console.log(article);

    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json(null);
  }
}
