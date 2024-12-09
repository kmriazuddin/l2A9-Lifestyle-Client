"use client";

import React, { useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCartPlus } from "react-icons/fa";
import AverageRating from "../Rating/AverageRating";
import CartConflict from "../CartConflict/CartConflict";
import { IProduct } from "@/interface/product.interface";
import { useAppDispatch } from "@/redux/hooks";
import { addItemToCart, ICartItem } from "@/redux/features/cartSlice/cartSlice";
import { AuthContext } from "@/providers/AuthProvider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const AllProduct = ({ data }: { data: IProduct[] }) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (data: ICartItem) => {
    dispatch(addItemToCart(data));
  };
  const userData = useContext(AuthContext);
  return (
    <div className="container mx-auto mt-2">
      {" "}
      {/* product section */}
      <div className="grid gap-3 gap-y-5 justify-items-center  xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mb-5  2xl:grid-cols-6">
        {data?.map((option) => (
          <Card key={option?.productId} className=" xs:w-48 sm:w-64 md:w-60">
            <CardHeader className="pb-0">
              <div className="w-full h-36 sm:h-44 md:h-48 overflow-hidden">
                <Image
                  className="object-cover h-full"
                  width={200}
                  height={200}
                  src={option.images[0]}
                  alt=""
                ></Image>
              </div>
              <CardTitle className="text-lg">
                <Link
                  className="hover:underline underline-offset-2"
                  href={`/product/${option.productId}`}
                >
                  {option.name.length > 17 ? (
                    <> {option?.name.slice(0, 18)}..</>
                  ) : (
                    option?.name
                  )}
                </Link>
              </CardTitle>
              <CardDescription>
                {option?.description?.length > 40 ? (
                  <>{option.description.slice(0, 39)}...</>
                ) : (
                  option.description
                )}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-sm mt-2 pb-1 ">
              <div className="flex justify-between items-center">
                <p className="font-medium">{option.price}Tk</p>
                <Button
                  disabled={userData?.user?.role !== "CUSTOMER"}
                  onClick={() =>
                    handleAddToCart({
                      category: option?.category.name,
                      id: option?.productId,
                      photo: option?.images[0],
                      price: option?.price,
                      quantity: 1,
                      title: option.name,
                      size: option.sizes.length > 0 ? option.sizes[0] : "",
                      discount: !!option.flashSale?.length
                        ? option.flashSale[0]?.discount + option.discounts
                        : option.discounts,
                      shopId: option.shopId,
                    })
                  }
                  className="hover:text-green-500"
                  size={"sm"}
                >
                  <FaCartPlus></FaCartPlus>
                </Button>
              </div>
              <div className="flex justify-center">
                <AverageRating
                  rating={option?.averageRating ? option?.averageRating : 0}
                  width={55}
                ></AverageRating>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <CartConflict></CartConflict>
    </div>
  );
};

export default AllProduct;
