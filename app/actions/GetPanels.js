import { useQuery } from "react-query";

export const useGetPanels = () => {
  return useQuery("getPanels", async () => {
    const response = await fetch("/api/panel");
    if (!response.ok) {
      throw new Error("Failed to fetch panels");
    }
    return response.json();
  });
};
