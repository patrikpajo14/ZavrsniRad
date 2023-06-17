import { useQuery } from "react-query";

export const useGetColors = () => {
  return useQuery("getColors", async () => {
    const response = await fetch("/api/colors");
    if (!response.ok) {
      throw new Error("Failed to fetch colors");
    }
    return response.json();
  });
};
