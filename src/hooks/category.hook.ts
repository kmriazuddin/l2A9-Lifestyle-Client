"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IApiResponse } from "@/interface/apiResponse.interface";
import { ICategory } from "@/interface/category.interface";
import { queryClient } from "@/providers/Provider";
import {
  addCategory,
  deleteCategory,
  getAllCategory,
  updateCategory,
} from "@/services/category";
import { useMutation, useQuery } from "@tanstack/react-query";

const invalidateCategoryQueries = () => {
  ["allCategory", "allCategorys", "allCategoryDashboard"].forEach((key) =>
    queryClient.invalidateQueries({ queryKey: [key] })
  );
};

export const useAllCategory = () => {
  return useQuery<IApiResponse<ICategory[]>>({
    queryKey: ["allCategory"],
    queryFn: getAllCategory,
  });
};

export const useAllCategory2 = () => {
  return useQuery<IApiResponse<ICategory[]>>({
    queryKey: ["allCategorys"],
    queryFn: getAllCategory,
  });
};

export const useAllCategoryDashboard = () => {
  return useQuery<IApiResponse<ICategory[]>>({
    queryKey: ["allCategoryDashboard"],
    queryFn: getAllCategory,
  });
};

export const useAddCategory = () => {
  return useMutation<any, Error, string, void>({
    mutationFn: addCategory,
    onSuccess: invalidateCategoryQueries,
  });
};

export const useUpdateCategory = () => {
  return useMutation<any, Error, { id: string; name: string }, void>({
    mutationFn: ({ id, name }) => updateCategory(id, name),
    onSuccess: invalidateCategoryQueries,
  });
};

export const useDeleteCategory = () => {
  return useMutation<any, Error, string, void>({
    mutationFn: deleteCategory,
    onSuccess: invalidateCategoryQueries,
  });
};
