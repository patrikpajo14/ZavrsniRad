import axios from "axios";
import { toast } from "react-hot-toast";
import { useQuery, useMutation, useQueryClient } from "react-query";

const fetchOffers = () => {
  return axios.get("/api/offer");
};

export const useGetOffers = () => {
  return useQuery("offers", fetchOffers, {
    select: (data) => {
      return data.data;
    },
  });
};

const addOffer = (offer) => {
  return axios.post("/api/offer", offer);
};

export const useAddOffer = () => {
  const queryClient = useQueryClient();
  return useMutation(addOffer, {
    onSuccess: (data) => {
      toast.success("offer Created!");
      queryClient.setQueryData("offers", (oldQueryData) => {
        return {
          ...oldQueryData,
          data: [...oldQueryData.data, data.data],
        };
      });
    },
  });
};

const updateOffer = (data) => {
  console.log("IZ FORMUNE", data.body);
  return axios.put(`/api/offer/${data.id}`, data.body);
};

export const useUpdateOffer = () => {
  const queryClient = useQueryClient();
  return useMutation(updateOffer, {
    onSuccess: () => {
      toast.success("offer Updated!");
      queryClient.invalidateQueries("offers");
    },
  });
};

const fetchOffersById = (id) => {
  return axios.get(`/api/offer/${id}`);
};

export const useGetOffersById = (id) => {
  return useQuery(["offer", id], () => fetchOffersById(id), {
    select: (data) => {
      return data.data;
    },
  });
};
