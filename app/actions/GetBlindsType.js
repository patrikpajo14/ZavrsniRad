import prisma from "@/app/libs/prismadb";

const GetBlindsTypes = async () => {
  try {
    const types = await prisma.blindsType.findMany();
    console.log(types);
    return types;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default GetBlindsTypes;
