"use client";
import { useAllVendorShop } from "@/hooks/shop.hook";
import React, { useState } from "react";
import ShopTable from "./ShopTable";
import { DynamicPagination } from "@/components/ui_component/common/Pagination/DynamicPagination";

const ManageShop = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useAllVendorShop(currentPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div className="min-h-[85vh]">
        {data && <ShopTable shopData={data?.data}></ShopTable>}
      </div>
      <div className="flex justify-center mt-5">
        {data?.meta && data && (
          <DynamicPagination
            meta={data.meta}
            onPageChange={handlePageChange}
          ></DynamicPagination>
        )}
      </div>
    </div>
  );
};

export default ManageShop;
