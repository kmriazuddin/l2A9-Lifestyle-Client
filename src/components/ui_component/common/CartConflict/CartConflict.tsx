"use client";

import React from "react";
import { DialogClose } from "@radix-ui/react-dialog";
import { ModalBox } from "../modal/ModalBox";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { replaceCart, retainCart } from "@/redux/features/cartSlice/cartSlice";

const CartConflict = () => {
  const { showVendorConflictDialog } = useAppSelector(
    (state) => state.cartSlice
  );
  const dispatch = useAppDispatch();
  const handleReplaceCart = () => {
    dispatch(replaceCart());
  };

  const handleRetainCart = () => {
    dispatch(retainCart());
  };
  return (
    <div>
      {" "}
      <>
        {showVendorConflictDialog && (
          <ModalBox
            isOpen={true}
            title="You have items from another vendor in your cart. What would you
             like to do?"
          >
            <div className="grid gap-2">
              <DialogClose
                className=" py-2 text-white bg-zinc-950"
                onClick={handleReplaceCart}
              >
                Replace Cart
              </DialogClose>
              <DialogClose
                className=" py-2 text-white bg-zinc-950"
                onClick={handleRetainCart}
              >
                Retain Current Cart
              </DialogClose>
            </div>
          </ModalBox>
        )}
      </>
    </div>
  );
};

export default CartConflict;
