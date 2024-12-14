"use client";
import React, { useState } from "react";
import OrderTable from "../../../../components/ui_component/common/Order/OrderTable";
import { useSigleUserAllOrder } from "@/hooks/order.hook";
import { DynamicPagination } from "@/components/ui_component/common/Pagination/DynamicPagination";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useSigleUserAllOrder(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    // Fetch new data here based on the page
  };

  return (
    <div>
      <div className="min-h-[85vh]">
        {data ? <OrderTable orderData={data.data}></OrderTable> : <></>}
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

export default Page;
