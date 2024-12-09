import React from "react";
import Banner from "@/components/ui_component/homePage/Banner";
import Categories from "@/components/ui_component/homePage/Categories";
import FlashSale from "@/components/ui_component/homePage/FlashSale";
import VendorProducts from "@/components/ui_component/homePage/VendorProducts";

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <FlashSale></FlashSale>
      <Categories></Categories>
      <VendorProducts></VendorProducts>
    </div>
  );
};

export default page;
