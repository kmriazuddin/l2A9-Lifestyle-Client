"use client";

import OrderTable from "@/src/components/ui_component/common/Order/OrderTable";
import { DynamicPagination } from "@/src/components/ui_component/common/Pagination/DynamicPagination";
import { usePendingOrder } from "@/src/hooks/order.hook";
import React, { useState } from "react";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = usePendingOrder(currentPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div>
      {data?.data.length ? (
        <div>
          <div className="min-h-[85vh]">
            <OrderTable orderData={data.data}></OrderTable>
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
      ) : (
        <p className="text-xl font-medium text-center">No Data To Display</p>
      )}
    </div>
  );
};

export default Page;
