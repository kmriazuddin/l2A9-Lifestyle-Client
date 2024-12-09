"use client";

import { Button } from "@/src/components/ui/button";
import { IProduct } from "@/src/interface/product.interface";
import {
  addItemToCart,
  ICartItem,
} from "@/src/redux/features/cartSlice/cartSlice";
import { useAppDispatch } from "@/src/redux/hooks";
import React from "react";
import { FaCartPlus } from "react-icons/fa";

const CartAction = ({ option }: { option: IProduct }) => {
  const dispatch = useAppDispatch();
  const handleAddToCart = (data: ICartItem) => {
    dispatch(addItemToCart(data));
  };
  return (
    <Button
      onClick={() =>
        handleAddToCart({
          category: option?.category.name,
          id: option?.productId,
          photo: option?.images[0],
          price: option?.price,
          quantity: 1,
          title: option.name,
          size: option.sizes.length > 0 ? option.sizes[0] : "",
          discount: option.flashSale
            ? option.flashSale[0].discount + option.discounts
            : option.discounts,
          shopId: option.shopId,
        })
      }
      className="hover:text-green-500"
      size={"sm"}
    >
      <FaCartPlus></FaCartPlus>
    </Button>
  );
};

export default CartAction;
