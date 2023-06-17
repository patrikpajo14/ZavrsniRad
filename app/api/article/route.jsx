import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const {
    typeId,
    panel,
    color,
    opening,
    substock,
    width,
    height,
    blindsType,
    blindsWidth,
    blindsHeight,
    extrasType,
    extrasWidth,
    extrasHeight,
    price,
  } = body;

  console.log("BODY", body);

  const type = await prisma.type.findUnique({
    where: {
      id: typeId,
    },
  });

  const name = type.name;

  if (!type || !panel || !opening || !substock || !width || !height || !price) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const article = await prisma.article.create({
    data: {
      name: name,
      panel,
      color,
      opening,
      substock,
      width,
      height,
      blindsType,
      blindsWidth,
      blindsHeight,
      extrasType,
      extrasWidth,
      extrasHeight,
      price,
    },
  });

  console.log(article);

  return NextResponse.json(article);
}

export async function GET() {
  try {
    const articles = await prisma.article.findMany();
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
