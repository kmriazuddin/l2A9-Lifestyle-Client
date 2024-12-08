/* eslint-disable @typescript-eslint/no-explicit-any */

import { useMutation, useQuery } from "@tanstack/react-query";
import { IApiResponse } from "../interface/apiResponse.interface";
import { ICategory } from "../interface/category.interface";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "../service/category";

export const useAllCategory = () => {
  return useQuery<IApiResponse<ICategory[]>>({
    queryKey: ["allCategory"],
    queryFn: () => getAllCategory(),
  });
};

export const useAddCategory = () => {
  return useMutation<any, Error, string, unknown>({
    mutationFn: async (name: string) => await addCategory(name),
  });
};

export const useUpdateCategory = () => {
  return useMutation<any, Error, { id: string; name: string }, unknown>({
    mutationFn: async (data: { id: string; name: string }) =>
      await updateCategory(data.id, data.name),
  });
};

export const useDeleteCategory = () => {
  return useMutation<any, Error, string, unknown>({
    mutationFn: async (id: string) => await deleteCategory(id),
  });
};
