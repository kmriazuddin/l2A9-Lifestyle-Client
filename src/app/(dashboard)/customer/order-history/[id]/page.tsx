/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import OrderDetails from "@/components/ui_component/common/Order/OrderDetails";

const page = async ({ params }: { params: any }) => {
  const { id } = await params;

  return (
    <div>
      <OrderDetails id={id}></OrderDetails>
    </div>
  );
};

export default page;
