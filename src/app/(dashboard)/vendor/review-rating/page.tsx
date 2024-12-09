"use client";

import { useGetReviewByShop } from "@/src/hooks/rating.hook";
import React, { useState } from "react";
import ReviewTable from "./ReviewTable";
import { DynamicPagination } from "@/src/components/ui_component/common/Pagination/DynamicPagination";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data } = useGetReviewByShop(currentPage);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);

    // Fetch new data here based on the page
  };
  return (
    <div>
      <div className="min-h-[85vh]">
        {data && <ReviewTable reviews={data?.data}></ReviewTable>}
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
