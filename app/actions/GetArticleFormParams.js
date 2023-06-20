import axios from "axios";
import { useQuery } from "react-query";

const fetchParams = async () => {
  const types = await axios.get(`/api/articleType`);
  const panels = await axios.get(`/api/panel`);
  const colors = await axios.get(`/api/colors`);
  const blindsType = await axios.get(`/api/blindsType`);
  const extrasType = await axios.get(`/api/extrasType`);

  return {
    data: {
      types: types.data,
      panels: panels.data,
      colors: colors.data,
      blindsTypes: blindsType.data,
      extrasTypes: extrasType.data,
    },
  };
};

export const useGetArticleFormParams = () => {
  return useQuery(["article-form"], () => fetchParams(), {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    select: (data) => {
      return data.data;
    },
  });
};
