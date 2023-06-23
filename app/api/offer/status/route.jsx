import prisma from "../../../libs/prismadb";
import { NextResponse } from "next/server";

export async function PUT(request) {
  try {
    const body = await request.json();
    console.log(body);

    const { id, status } = body;

    const results = await prisma.offer.update({
      where: {
        id: id,
      },
      data: {
        status: status,
      },
    });

    console.log("DONE", results);

    return NextResponse.json(updatedOffer);
  } catch (error) {
    return NextResponse.json(null);
  }
}
