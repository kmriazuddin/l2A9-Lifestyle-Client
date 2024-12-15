"use client";

import ChangePass from "@/components/ui_component/common/ChangePassword/ChangePassword";
import { useGetVendorDashboard } from "@/hooks/dashboard";
import React from "react";

import { FaShopify, FaBox, FaCheckCircle, FaDollarSign } from "react-icons/fa";

const Dashboard = () => {
  const { data, isLoading, error } = useGetVendorDashboard();

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-solid border-pink-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-lg font-semibold text-red-500">
          Error: {error.message}
        </div>
      </div>
    );
  }

  const totalShops = data?.data?.totalShops || 0;
  const totalProducts = data?.data?.totalProducts || 0;
  const totalCompletedOrders = data?.data?.totalCompletedOrders || 0;
  const totalEarnings = data?.data?.totalEarnings || 0;

  return (
    <div>
      <div className="max-w-screen-lg p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 mx-auto">
        <div className="bg-white text-gray-800 border border-gray-200 shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:shadow-lg transform duration-300">
          <FaShopify className="text-4xl text-blue-500 mb-3" />
          <p className="text-lg font-semibold">Your Shops</p>
          <p className="text-2xl font-bold">{totalShops} Shops</p>
        </div>
        <div className="bg-white text-gray-800 border border-gray-200 shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:shadow-lg transform duration-300">
          <FaBox className="text-4xl text-green-500 mb-3" />
          <p className="text-lg font-semibold">Total Products</p>
          <p className="text-2xl font-bold">{totalProducts} Products</p>
        </div>
        <div className="bg-white text-gray-800 border border-gray-200 shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:shadow-lg transform duration-300">
          <FaCheckCircle className="text-4xl text-yellow-500 mb-3" />
          <p className="text-lg font-semibold">Completed Orders</p>
          <p className="text-2xl font-bold">{totalCompletedOrders} Orders</p>
        </div>
        <div className="bg-white text-gray-800 border border-gray-200 shadow-md rounded-lg flex flex-col items-center justify-center p-6 hover:shadow-lg transform duration-300">
          <FaDollarSign className="text-4xl text-pink-500 mb-3" />
          <p className="text-lg font-semibold">Total Earnings</p>
          <p className="text-2xl font-bold">{totalEarnings} Tk</p>
        </div>
      </div>
      <ChangePass></ChangePass>
    </div>
  );
};

export default Dashboard;
