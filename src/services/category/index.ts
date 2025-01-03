/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance/axiosInstance";
import { revalidateTag } from "next/cache";

const handleError = (error: any): never => {
  throw new Error(error?.response?.data?.message || error?.message || error);
};

export const getAllCategory = async () => {
  try {
    const { data } = await axiosInstance.get("/category");
    return data;
  } catch (error: any) {
    handleError(error);
  }
};

export const addCategory = async (name: string) => {
  try {
    const { data } = await axiosInstance.post("/category/create-category", {
      name,
    });
    revalidateTag("all-category");
    return data;
  } catch (error: any) {
    handleError(error);
  }
};

export const updateCategory = async (id: string, name: string) => {
  try {
    const { data } = await axiosInstance.patch(`/category/${id}`, { name });
    revalidateTag("all-category");
    return data;
  } catch (error: any) {
    handleError(error);
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const { data } = await axiosInstance.delete(`/category/${id}`);
    revalidateTag("all-category");
    return data;
  } catch (error: any) {
    handleError(error);
  }
};
