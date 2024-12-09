"use client";

import OrderTable from "@/src/components/ui_component/common/Order/OrderTable";
import { DynamicPagination } from "@/src/components/ui_component/common/Pagination/DynamicPagination";
import { useAllOrder } from "@/src/hooks/order.hook";
import React, { useState } from "react";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useAllOrder(currentPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <div className="min-h-[84vh]">
        {data && <OrderTable orderData={data.data}></OrderTable>}
      </div>{" "}
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

export default Page;
