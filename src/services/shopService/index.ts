/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance/axiosInstance";
import { FieldValues } from "react-hook-form";

export const getAllVendorShop = async (page: number) => {
  try {
    const res = await axiosInstance.get(`/shop/get-all-shop`, {
      params: {
        page,
      },
    });

    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};

export const getVendorShop = async () => {
  try {
    const res = await axiosInstance.get(`/shop`);

    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};
export const getVendorSingleShop = async (id: string) => {
  try {
    const res = await axiosInstance.get(`/shop/${id}`);

    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};
export const getVendorSingleShopOrders = async (id: string, page: number) => {
  try {
    const res = await axiosInstance.get(`/order/shop-order/${id}`, {
      params: {
        page,
      },
    });

    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};

export const addVendorShop = async (data: FieldValues) => {
  try {
    const res = await axiosInstance.post(`/shop/create-shop`, data);

    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};

export const blockVendorShop = async (id: string) => {
  try {
    const res = await axiosInstance.patch(`/shop/block-shop/${id}`);
    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};
