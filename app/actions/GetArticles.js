import { useQuery } from "react-query";

export const useGetArticles = () => {
  return useQuery("getArticles", async () => {
    const response = await fetch("/api/article");
    if (!response.ok) {
      throw new Error("Failed to fetch Articles");
    }
    return response.json();
  });
};
