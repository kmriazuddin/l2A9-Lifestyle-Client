/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";
import { IApiResponse } from "../interface/apiResponse.interface";
import { createCoupon, getShopCoupon } from "../service/cuponService";

export const useCreateCoupon = () => {
  return useMutation<any, Error, FieldValues, unknown>({
    mutationFn: (data: any) => createCoupon(data),
  });
};

export const useGetShopCoupon = (id: string) => {
  return useQuery<IApiResponse<any[]>>({
    enabled: !!id,
    queryKey: ["getShopCupon"],
    queryFn: () => getShopCoupon(id),
  });
};
