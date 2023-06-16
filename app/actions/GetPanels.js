import prisma from "@/app/libs/prismadb";

const GetPanels = async () => {
  try {
    const panels = await prisma.panel.findMany();
    console.log(panels);
    return panels;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default GetPanels;
