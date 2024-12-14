"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CForm from "@/components/ui_component/common/Form/CForm";
import CGroupCheckbox from "@/components/ui_component/common/Form/CGroupCheckbox";
import { FieldValues } from "react-hook-form";
import CButton from "@/components/ui_component/common/Form/CButton";
import CInput from "@/components/ui_component/common/Form/CInput";
import CSelect from "@/components/ui_component/common/Form/CSelect";
import { useAllCategory } from "@/hooks/category.hook";
import { useVendorShop } from "@/hooks/shop.hook";
import { uploadImagesToCloudinary } from "@/lib/utils/uploadImageArray";
import { toast } from "sonner";
import { useAddProduct } from "@/hooks/product.hook";
import CImageInput from "@/components/ui_component/common/Form/CImage";

const AddProduct = () => {
  const { data } = useAllCategory();
  const { mutate, isPending } = useAddProduct();
  const { data: shopData } = useVendorShop();

  const onFromSubmit = async (data: FieldValues) => {
    const { images: imageFiles, ...otherData } = data;
    const imageUrl = await uploadImagesToCloudinary(imageFiles);

    if (imageUrl) {
      mutate(
        { ...otherData, images: imageUrl },
        {
          onSuccess: () => {
            toast.success("Product added successfully!");
          },
          onError: () => {
            toast.error("Something went wrong!");
          },
        }
      );
    } else {
      toast.error("Something went wrong!");
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Shop Product Add</CardTitle>
        <CardDescription>
          Experience Personalized Online Shopping in Bangladesh with FindXBD.
        </CardDescription>
      </CardHeader>

      <CardContent className="">
        <CForm onFromSubmit={onFromSubmit}>
          <div className="grid gap-3">
            <CImageInput name="images" label="Product Image"></CImageInput>

            <CInput name="name" label="Product Name" type="text"></CInput>
            <CInput name="description" label="Description" type="text"></CInput>
            <CInput name="discounts" label="Discounts" type="number"></CInput>
            <CInput name="price" label="Price" type="number"></CInput>
            <CInput name="stock" label="Quantity" type="number"></CInput>
            <CGroupCheckbox></CGroupCheckbox>
            <CSelect
              options={
                data?.data
                  ? data?.data?.map((info) => {
                      return { label: info?.name, value: info?.categoryId };
                    })
                  : []
              }
              label="Category"
              text="Select Category"
              name="categoryId"
            ></CSelect>
            <CSelect
              options={
                shopData?.data
                  ? shopData?.data?.map((info) => {
                      return { label: info?.name, value: info?.shopId };
                    })
                  : []
              }
              label="Select Shop"
              text="Select Shop"
              name="shopId"
            ></CSelect>

            <CButton
              isPending={isPending}
              type="submit"
              text="Add Product"
            ></CButton>
          </div>
        </CForm>
      </CardContent>
    </Card>
  );
};

export default AddProduct;
