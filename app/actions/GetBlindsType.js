import { useQuery } from "react-query";

export const useGetBlindsType = () => {
  return useQuery("getBlindsType", async () => {
    const response = await fetch("/api/blindsType");
    if (!response.ok) {
      throw new Error("Failed to fetch BlindsType");
    }
    return response.json();
  });
};
