import { useQuery } from "@tanstack/react-query";
import { IApiResponse } from "../interface/apiResponse.interface";
import { IUserDashboardData } from "../interface/dashboard.interface";
import {
  getAdminDashboard,
  getUserDashboard,
  getVendorDashboard,
} from "../service/dashboardService";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const useGetUserDashboard = () => {
  return useQuery<IApiResponse<IUserDashboardData>>({
    queryKey: ["getUserDashboard"],
    queryFn: () => getUserDashboard(),
  });
};

export const useGetVendorDashboard = () => {
  return useQuery<IApiResponse<any>>({
    queryKey: ["getVendorDashboard"],
    queryFn: () => getVendorDashboard(),
  });
};

export const useGetAdminDashboard = () => {
  return useQuery<IApiResponse<any>>({
    queryKey: ["getAdminDashboard"],
    queryFn: () => getAdminDashboard(),
  });
};
