"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { IApiResponse } from "@/interface/apiResponse.interface";
import { IDiscount, IProduct } from "@/interface/product.interface";
import { queryClient } from "@/providers/Provider";
import {
  addProduct,
  allProduct,
  cloneProduct,
  deleteProduct,
  flashProduct,
  singleProduct,
  updateProduct,
} from "@/services/product";
import { useMutation, useQuery } from "@tanstack/react-query";
import { FieldValues } from "react-hook-form";

const invalidateQueries = (keys: string[]) => {
  keys.forEach((key) => queryClient.invalidateQueries({ queryKey: [key] }));
};

export const useAddProduct = () => {
  return useMutation<any, Error, FieldValues>({
    mutationFn: addProduct,
    onSuccess: () => {
      invalidateQueries([
        "vendorShopSingle",
        "all-product",
        "all-products",
        "singleVendorWithAllProduct",
      ]);
    },
  });
};

export const useCloneProduct = () => {
  return useMutation<any, Error, FieldValues>({
    mutationFn: cloneProduct,
    onSuccess: () =>
      invalidateQueries([
        "vendorShopSingle",
        "all-product",
        "all-products",
        "singleVendorWithAllProduct",
      ]),
  });
};

export const useUpdateProduct = () => {
  return useMutation<any, Error, { data: FieldValues; id: string }>({
    mutationFn: ({ data, id }) => updateProduct({ data, id }),
    onSuccess: () =>
      invalidateQueries([
        "vendorShopSingle",
        "all-product",
        "all-products",
        "singleVendorWithAllProduct",
      ]),
  });
};

export const useDeleteProduct = () => {
  return useMutation<any, Error, string>({
    mutationFn: deleteProduct,
    onSuccess: () => invalidateQueries(["vendorShopSingle"]),
  });
};

export const useAllProduct = (
  searchTerm: string,
  categoryId: string,
  sortCriteria: string,
  page: number
) => {
  return useQuery<IApiResponse<IProduct[]>>({
    queryKey: ["all-product", searchTerm, categoryId, sortCriteria, page],
    queryFn: () => allProduct({ searchTerm, categoryId, sortCriteria, page }),
    retry: true,
  });
};

export const useAllProduct2 = (
  searchTerm: string,
  categoryId: string,
  sortCriteria: string,
  page: number
) => {
  return useQuery<IApiResponse<IProduct[]>>({
    queryKey: ["all-products", searchTerm, categoryId, sortCriteria, page],
    queryFn: () => allProduct({ searchTerm, categoryId, sortCriteria, page }),
  });
};

export const useSingleProduct = (id: string) => {
  return useQuery<IApiResponse<IProduct>>({
    enabled: !!id,
    queryKey: ["single-product", id],
    queryFn: () => singleProduct(id),
  });
};

export const useFlashProduct = () => {
  return useQuery<IApiResponse<IDiscount[]>>({
    queryKey: ["flash-product"],
    queryFn: flashProduct,
  });
};
