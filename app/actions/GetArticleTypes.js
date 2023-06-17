import { useQuery } from "react-query";

export const useGetArticleType = () => {
  return useQuery("getArticleType", async () => {
    const response = await fetch("/api/articleType");
    if (!response.ok) {
      throw new Error("Failed to fetch ArticleType");
    }
    return response.json();
  });
};
