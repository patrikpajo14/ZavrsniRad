import prisma from "../../libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const { name } = body;

  if (!name) {
    return new NextResponse("Missing Fields", { status: 400 });
  }

  const exist = await prisma.netsType.findUnique({
    where: {
      name,
    },
  });

  if (exist) {
    return new NextResponse("Extras Type already exists", { status: 500 });
  }

  const extrasType = await prisma.netsType.create({
    data: {
      name,
    },
  });

  return NextResponse.json(extrasType);
}

export async function GET() {
  try {
    const extrasTypes = await prisma.netsType.findMany();
    return NextResponse.json(extrasTypes);
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
