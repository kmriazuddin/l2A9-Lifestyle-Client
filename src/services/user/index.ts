/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/lib/axiosInstance/axiosInstance";

export const getAllUser = async (
  searchTerm: string,
  isBlocked: string,
  page: number
) => {
  try {
    const res = await axiosInstance.get(`/user`, {
      params: {
        searchTerm,
        isBlocked,
        page,
      },
    });

    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};

export const blockUser = async (id: string) => {
  try {
    const res = await axiosInstance.patch(`/user/block/${id}`);
    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};

export const deleteUser = async (id: string) => {
  try {
    const res = await axiosInstance.patch(`/user/delete/${id}`);
    return res?.data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};
