import getCurrentUser from "@/app/actions/GetCurrentUser";
import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { articles, data } = body;

  const { customerName, address, phone, email, city } = data;

  const currentUser = await getCurrentUser();

  const place = await prisma.place.findUnique({
    where: {
      name: city,
    },
  });

  console.log(place);

  if (!customerName || !address || !phone || !email || !city) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  /*  const offer = await prisma.offer.create({
    data: {
      customer_name: customerName,
      customer_address: address,
      customer_phone_number: phone,
      customer_email: email,
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
  }); */

  return NextResponse.json(data);
}

export async function GET() {
  try {
    const articles = await prisma.article.findMany();
    return NextResponse.json(articles);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
