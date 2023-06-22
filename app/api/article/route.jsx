import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
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

  const article = await prisma.article.create({
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
        connect: {
          id: blindsTypeId === "" ? "648ec585f8b656a025269d84" : blindsTypeId,
        },
      },
      blindsWidth: blindsWidth,
      blindsHeight: blindsHeight,
      extras: {
        connect: {
          id: extrasTypeId === "" ? "648ec57ff8b656a025269d82" : extrasTypeId,
        },
      },
      extrasWidth: extrasWidth,
      extrasHeight: extrasHeight,
    },
  });

  console.log(article);

  return NextResponse.json(article);
}

export async function GET() {
  try {
    const articles = await prisma.article.findMany();

    const body = await Promise.all(
      articles.map(async (article) => {
        const type = await prisma.type.findUnique({
          where: {
            id: article.typeId,
          },
        });

        const panel = await prisma.panel.findUnique({
          where: {
            id: article.panelId,
          },
        });

        const color = await prisma.color.findUnique({
          where: {
            id: article.colorId,
          },
        });

        const blinds = await prisma.blindsType.findUnique({
          where: {
            id: article.blindsId,
          },
        });

        const extras = await prisma.netsType.findUnique({
          where: {
            id: article.extrasId,
          },
        });

        return {
          ...article,
          type: type,
          color: color,
          panel: panel,
          blinds: blinds,
          extras: extras,
        };
      })
    );

    return NextResponse.json(body);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
