/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import axiosInstance from "@/src/lib/axiosInstance/axiosInstance";

export const getUserDashboard = async () => {
  try {
    const { data } = await axiosInstance.get(`/dashboard/user`);
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};

export const getAdminDashboard = async () => {
  try {
    const { data } = await axiosInstance.get(`/dashboard/admin`);
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};

export const getVendorDashboard = async () => {
  try {
    const { data } = await axiosInstance.get(`/dashboard/vendor`);
    return data;
  } catch (error: any) {
    throw new Error(error?.response?.data?.message || error?.message || error);
  }
};
