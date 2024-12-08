"use client";

import React from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import CButton from "@/src/components/ui_component/common/Form/CButton";
import CForm from "@/src/components/ui_component/common/Form/CForm";
import CInput from "@/src/components/ui_component/common/Form/CInput";
import { useAddCategory } from "@/src/hooks/category.hook";
import DeleteCategory from "./DeleteCategory";
import EditCategory from "./EditCategory";

interface ICategory {
  categoryId: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

const CategorieAction = ({ categories }: { categories: ICategory[] }) => {
  const { mutate, isPending } = useAddCategory();

  const addCategory = async (data: FieldValues) => {
    mutate(data.name, {
      onSuccess: () => {
        toast.success("Category added.");
      },
      onError: () => {
        toast.error("Something went wrong! Try again.");
      },
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Manage Categories</h1>

      {/* Add Category Section */}
      <div className="mb-6">
        <CForm onFromSubmit={addCategory}>
          <p className="mb-2 font-semibold">Add Category</p>
          <div className="flex items-center  gap-2">
            <CInput
              label=""
              name="name"
              required={true}
              placeHolder="Name"
            ></CInput>

            <CButton isPending={isPending} type="submit" text="Add"></CButton>
          </div>
        </CForm>
      </div>

      {/* Category List */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <div
            key={category.categoryId}
            className="border border-gray-300 rounded p-4 shadow"
          >
            <div className="mb-2">
              <h2 className="text-lg font-semibold">{category.name}</h2>
              <p className="text-sm text-gray-500">
                Created: {new Date(category.createdAt).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-500">
                Updated: {new Date(category.updatedAt).toLocaleDateString()}
              </p>
            </div>
            <div className="flex gap-2">
              <DeleteCategory id={category.categoryId}></DeleteCategory>
              <EditCategory id={category.categoryId}></EditCategory>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategorieAction;
