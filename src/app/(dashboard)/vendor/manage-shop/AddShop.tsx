"use client";

import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import CForm from "@/src/components/ui_component/common/Form/CForm";
import { useAddShop } from "@/src/hooks/shop.hook";
import { uploadImagesToCloudinary } from "@/src/lib/utils/uploadImageArray";
import CInput from "@/src/components/ui_component/common/Form/CInput";
import CImageInput from "@/src/components/ui_component/common/Form/CImage";
import CButton from "@/src/components/ui_component/common/Form/CButton";
const AddShop = () => {
  const { mutate, isPending } = useAddShop();
  const onFromSubmit = async (data: FieldValues) => {
    const { images: imageFiles, ...otherData } = data;
    const imageUrl = await uploadImagesToCloudinary(imageFiles);

    if (imageUrl) {
      mutate(
        { ...otherData, images: imageUrl },
        {
          onSuccess: () => {
            toast.success("Shop added.");
          },
          onError: () => {
            toast.error("Something went wrong! Try again.");
          },
        }
      );
    } else {
      toast.error("Something went wrong! Try again.");
    }
  };
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        <CForm onFromSubmit={onFromSubmit}>
          <div className="grid gap-4">
            <CInput label="Name" name="name"></CInput>
            <CInput label="Location" name="location"></CInput>
            <CImageInput name="images" label="Product Image"></CImageInput>
            <CButton
              isPending={isPending}
              type="submit"
              text="Add Shop"
            ></CButton>
          </div>
        </CForm>
      </CardContent>
    </Card>
  );
};

export default AddShop;
