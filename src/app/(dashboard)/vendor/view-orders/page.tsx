"use client";

import OrderTable from "@/src/components/ui_component/common/Order/OrderTable";
import { DynamicPagination } from "@/src/components/ui_component/common/Pagination/DynamicPagination";
import { useVendorSingleShopOrders } from "@/src/hooks/order.hook";
import { useVendorShop } from "@/src/hooks/shop.hook";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { data: allShop } = useVendorShop();
  const [page, setPage] = useState(1);
  const [selectedId, setSelected] = useState(allShop?.data[0]?.shopId || "");
  const { data } = useVendorSingleShopOrders(selectedId, page);
  console.log(page);
  useEffect(() => {
    if (allShop?.data[0]?.shopId) {
      setSelected(allShop?.data[0]?.shopId);
    }
  }, [allShop]);
  const handlePageChange = (page: number) => {
    console.log(page);
    setPage(page);
  };
  console.log(data);
  return (
    <div className="">
      <div className="min-h-[85vh]">
        {!!data?.data && <OrderTable orderData={data.data} />}
      </div>

      <div className="mt-2">
        {data?.meta && (
          <DynamicPagination
            onPageChange={handlePageChange}
            meta={data?.meta}
          ></DynamicPagination>
        )}
      </div>
    </div>
  );
};

export default Page;
