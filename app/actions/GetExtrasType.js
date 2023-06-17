import { useQuery } from "react-query";

export const useGetExtrasType = () => {
  return useQuery("getExtrasType", async () => {
    const response = await fetch("/api/extrasType");
    if (!response.ok) {
      throw new Error("Failed to fetch ExtrasType");
    }
    return response.json();
  });
};
