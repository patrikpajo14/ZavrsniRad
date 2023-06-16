import prisma from "@/app/libs/prismadb";

const GetExtrasTypes = async () => {
  try {
    const types = await prisma.netsType.findMany();
    console.log(types);
    return types;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default GetExtrasTypes;
