/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { queryClient } from "../providers/Providers";
import { IApiResponse } from "../interface/apiResponse.interface";
import {
  addVendorShop,
  blockVendorShop,
  getAllVendorShop,
  getVendorShop,
  getVendorSingleShop,
} from "../service/shopService";
import { IShop } from "../interface/shop.interface";

export const useAddShop = () => {
  return useMutation<any, Error, FieldValues, unknown>({
    mutationFn: async (data: any) => await addVendorShop(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["vendorShop"],
      });
    },
  });
};

export const useVendorShop = () => {
  return useQuery<IApiResponse<IShop[]>>({
    queryKey: ["vendorShop"],
    queryFn: async () => await getVendorShop(),
  });
};

export const useVendorSingleShop = (id: string | undefined) => {
  return useQuery<IApiResponse<IShop>>({
    enabled: !!id,
    queryKey: ["vendorShopSingle", id],
    queryFn: async () => await getVendorSingleShop(id as string),
  });
};

export const useAllVendorShop = (page: number) => {
  return useQuery<IApiResponse<IShop[]>>({
    queryKey: ["allVendorShop", page],
    queryFn: async () => await getAllVendorShop(page),
  });
};

export const useBlockShop = () => {
  return useMutation<any, Error, string, unknown>({
    mutationFn: async (id: any) => await blockVendorShop(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["allVendorShop"] });
    },
  });
};
