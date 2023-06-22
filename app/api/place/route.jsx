import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { name } = body;

  console.log("Name", name);

  if (!name) {
    return new NextResponse("Missing Fields", { status: 400 });
  }
  /* 
  const exist = await prisma.place.findUnique({
    where: {
      name,
    },
  });

  if (exist) {
    return new NextResponse("Place already exists", { status: 500 });
  }
 */


  return NextResponse.json(place);
}

export async function GET() {
  try {
    const places = await prisma.place.findMany();
    return NextResponse.json(places);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
