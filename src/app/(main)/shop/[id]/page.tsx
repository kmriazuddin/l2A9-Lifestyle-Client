/* eslint-disable @typescript-eslint/no-explicit-any */

import config from "@/config";
import { IShop } from "@/interface/shop.interface";

import Image from "next/image";
import React from "react";

import FollowAction from "./FollowAction";
import { User2 } from "lucide-react";
import AllProduct from "@/components/ui_component/common/AllProduct/AllProduct";

const ShopDetailsPage = async ({ params }: { params: any }) => {
  const { id } = await params;
  const res = await fetch(`${config.backendApi}/shop/get-single-shop/${id}`, {
    cache: "no-store",
    next: { tags: ["single-shop"] },
  });
  const { data }: { data: IShop } = await res.json();

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-500 text-lg">Shop details not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {/* Shop Header */}
      <div className="bg-white shadow rounded-md p-6 mb-6 ">
        <div className="flex flex-col items-center sm:flex-row gap-4 sm:items-center ">
          <Image
            src={data.images[0]}
            alt={data.name}
            width={400}
            height={400}
            className="w-40 h-40 object-cover rounded-full lg:mr-6"
          />
          <div className=" text-center sm:text-left">
            <h1 className="text-2xl font-bold">{data.name}</h1>
            <p className="text-gray-600 mt-2">{data.location}</p>
            <div className="flex items-center gap-5">
              <p className="text-gray-400 text-sm mt-1">
                Created at: {new Date(data.createdAt).toLocaleDateString()}
              </p>
              <p className="text-sm flex items-center font-medium">
                <span>{data?.followers?.length}</span>
                <span>
                  {" "}
                  <User2 className="w-4 "></User2>
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-center sm:justify-end">
          <FollowAction data={data} id={id}></FollowAction>
        </div>
      </div>

      {/* Products Section */}
      {data.products ? (
        <AllProduct data={data.products}></AllProduct>
      ) : (
        <p className="text-xl text-center font-medium">No Product to Show</p>
      )}
    </div>
  );
};

export default ShopDetailsPage;
