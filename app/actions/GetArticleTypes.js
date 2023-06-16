import prisma from "@/app/libs/prismadb";

const GetArticleTypes = async () => {
  try {
    const types = await prisma.type.findMany();
    console.log(types);
    return types;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default GetArticleTypes;
