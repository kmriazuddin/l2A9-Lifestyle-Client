"use client";

import AllProduct from "@/src/components/ui_component/common/AllProduct/AllProduct";
import { IProduct } from "@/src/interface/product.interface";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [recentProducts, setRecentProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const storedProducts = JSON.parse(
      localStorage.getItem("recentProducts") || "[]"
    );
    setRecentProducts(storedProducts);
  }, []);

  return (
    <div>
      <AllProduct data={recentProducts} />
    </div>
  );
};

export default Page;
