import React from "react";

import Image from "next/image";
import { toast } from "sonner";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/src/components/ui/table";
import { IShop } from "@/src/interface/shop.interface";
import { useBlockShop } from "@/src/hooks/shop.hook";
import { DialogClose } from "@/src/components/ui/dialog";
import { ModalBox } from "@/src/components/ui_component/common/modal/ModalBox";

const ShopTable = ({ shopData }: { shopData: IShop[] }) => {
  const { mutate } = useBlockShop();
  const blockShop = (id: string) => {
    mutate(id, {
      onSuccess: () => {
        toast.success("User Account Status Changed");
      },
      onError: () => {
        toast.error("Something went wrong! Try again.");
      },
    });
  };
  return (
    <Table>
      <TableCaption>A list of shops and their details.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Shop Name</TableHead>
          <TableHead>Image</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Vendor Email</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {shopData.map((shop) => (
          <TableRow key={shop?.shopId}>
            <TableCell className="font-medium">{shop?.name}</TableCell>
            <TableCell>
              <Image
                width={100}
                height={100}
                src={shop?.images[0]}
                alt={shop?.name}
                className="h-10 w-10 object-cover rounded"
              />
            </TableCell>
            <TableCell>{shop?.location}</TableCell>
            <TableCell>{shop?.vendor?.email}</TableCell>
            <TableCell>
              {shop?.isBlackListed ? (
                <span className="text-red-500">Blacklisted</span>
              ) : (
                <span className="text-green-500">Active</span>
              )}
            </TableCell>
            <TableCell>
              <ModalBox
                btnIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                    />
                  </svg>
                }
                title="Are you sure?"
              >
                <DialogClose
                  onClick={() => blockShop(shop.shopId)}
                  className="bg-primary text-primary-foreground shadow hover:bg-primary/90 py-2 rounded-md "
                >
                  Yes
                </DialogClose>
              </ModalBox>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ShopTable;
