import prisma from "@/app/libs/prismadb";

const GetColors = async () => {
  try {
    const colors = await prisma.color.findMany();
    console.log(colors);
    return colors;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default GetColors;
