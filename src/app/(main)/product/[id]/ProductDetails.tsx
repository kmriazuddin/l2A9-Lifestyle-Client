"use client";

import Image from "next/image";

import React, { useContext, useEffect, useState } from "react";
import RelatedProducts from "./RelatedProducts";
import Link from "next/link";
import { useSingleProduct } from "@/src/hooks/product.hook";
import { useAppDispatch } from "@/src/redux/hooks";
import {
  addItemToCart,
  ICartItem,
} from "@/src/redux/features/cartSlice/cartSlice";
import { IProduct } from "@/src/interface/product.interface";
import AverageRating from "@/src/components/ui_component/common/Rating/AverageRating";
import { Button } from "@/src/components/ui/button";
import CartConflict from "@/src/components/ui_component/common/CartConflict/CartConflict";
import { AuthContext } from "@/src/providers/AuthProvider";

const ProductDetails = ({ id }: { id: string }) => {
  const userData = useContext(AuthContext);
  const { data: { data: product } = {} } = useSingleProduct(id);
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [index, setIndex] = useState(0);

  const dispatch = useAppDispatch();
  const handleAddToCart = (data: ICartItem) => {
    dispatch(addItemToCart(data));
  };

  const saveToRecentProducts = (product: IProduct) => {
    // Get recent products from localStorage
    const recentProducts = JSON.parse(
      localStorage.getItem("recentProducts") || "[]"
    );

    // Filter out duplicates
    const filteredProducts = recentProducts.filter(
      (p: IProduct) => p.productId !== product.productId
    );

    // Add the new product at the start
    const updatedProducts = [product, ...filteredProducts].slice(0, 10);

    // Save back to localStorage
    localStorage.setItem("recentProducts", JSON.stringify(updatedProducts));
  };
  useEffect(() => {
    if (product) {
      saveToRecentProducts(product);
    }
  }, [product]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Product Details Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Image Gallery */}
        <div className="flex flex-col gap-4 w-full lg:w-1/2">
          <div className="flex justify-center w-full md:px-5 lg:px-10">
            {!!product?.name && (
              <Image
                width={400}
                height={300}
                src={product?.images[index] || ""}
                alt={"ddgdg"}
                className=" lg:w-full h-80 sm:h-96 md:h-[400px] lg:h-[500px] object-cover rounded-lg border"
              />
            )}
          </div>
          <div className="flex justify-center gap-4">
            {product?.images?.map((image, idx) => (
              <Image
                onClick={() => setIndex(idx)}
                width={200}
                height={100}
                key={idx}
                src={image}
                alt={`Product ${idx + 1}`}
                className="w-20 h-20 rounded-lg border object-cover cursor-pointer"
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-3xl font-bold">{product?.name}</h1>
          <h1 className="text-sm text-zinc-600 hover:underline font-medium">
            <Link href={`/shop/${product?.shopId}`}>
              {" "}
              {product?.shop?.name}
            </Link>
          </h1>
          <div className="mt-2">
            <AverageRating
              rating={product?.averageRating ? product.averageRating : 0}
              width={70}
            ></AverageRating>{" "}
            <p className="text-sm font-medium">{`(${product?.totalReview} Customer review)`}</p>
          </div>
          <p className="text-gray-700 mt-3">{product?.description}</p>
          <p className="text-xl font-semibold text-green-600 mt-4">
            $
            {!!product?.flashSale?.length ? (
              <>
                {product.price -
                  (product.price * product.flashSale[0].discount) / 100}
              </>
            ) : (
              <>{product?.price}</>
            )}
          </p>
          {!!product?.flashSale?.length && (
            <p className="text-sm font-semibold  mt-2">
              <span> ${product?.price}</span>{" "}
              <span className="text-xs ms-3  text-orange-500">
                {" "}
                {product?.flashSale[0].discount}%
              </span>
            </p>
          )}

          {/* Size Selection */}
          <div className="mt-6">
            <h2 className="font-medium">Select Size:</h2>
            <div className="flex gap-4 mt-2">
              {product?.sizes?.map((size) => (
                <Button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2  ${
                    selectedSize === size
                      ? ""
                      : "bg-white text-gray-800 hover:text-white"
                  }`}
                >
                  {size}
                </Button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="mt-6">
            <h2 className="font-medium">Quantity:</h2>
            <div className="flex gap-4 mt-2">
              <Button
                onClick={() =>
                  setQuantity((prev) => (prev > 1 ? prev - 1 : prev))
                }
              >
                -
              </Button>
              <span className="px-4 py-1 border rounded-lg">{quantity}</span>
              <Button onClick={() => setQuantity((prev) => prev + 1)}>+</Button>
            </div>
          </div>

          {/* Add to Cart */}
          {product && userData?.user?.role == "CUSTOMER" && (
            <Button
              onClick={() =>
                handleAddToCart({
                  category: product?.category.name,
                  id: product?.productId,
                  photo: product?.images[0],
                  price: product?.price,
                  quantity,
                  title: product.name,
                  size: selectedSize,
                  discount: !!product?.flashSale?.length
                    ? product.flashSale[0].discount + product.discounts
                    : product.discounts,
                  shopId: product.shopId,
                })
              }
              disabled={quantity <= 0}
              className={`mt-6 w-full py-5 text-white font-bold rounded-lg `}
            >
              Add to Cart
            </Button>
          )}
        </div>
      </div>
      {/* Related products */}
      <div>
        <p className="text-center my-4 text-xl font-semibold">
          Releted Products
        </p>
        {product?.relatedProduct && (
          <RelatedProducts product={product?.relatedProduct}></RelatedProducts>
        )}
      </div>

      {/* User Reviews Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">User Reviews</h2>
        <div className="mt-6 h-96 overflow-y-auto border rounded-lg p-4 bg-gray-50">
          {product?.Review?.map((review, idx) => (
            <div
              key={idx}
              className="border-b pb-4 mb-4 last:border-none last:pb-0 last:mb-0"
            >
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-medium">{review.customer?.name}</p>
                  <div className="flex">
                    <AverageRating
                      width={70}
                      rating={review?.rating}
                    ></AverageRating>
                  </div>
                </div>
                <p className="text-gray-600 m">{review.comment}</p>
              </div>
              {review.vendorReply && (
                <div className=" ms-4 text-sm">
                  <span className="font-bold">Seller:</span>{" "}
                  {review.vendorReply}
                </div>
              )}
            </div>
          ))}
        </div>
        <CartConflict></CartConflict>
      </div>
    </div>
  );
};

export default ProductDetails;
