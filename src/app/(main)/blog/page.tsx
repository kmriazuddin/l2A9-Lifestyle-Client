"use client";

import Banner from "@/components/ui_component/homePage/Banner";
import Image from "next/image";
import React from "react";

const Blog = () => {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <h1 className="text-center text-xl font-semibold">
        This is Blog Section
      </h1>
      <div className="flex justify-center">
        <Image
          width={500}
          height={500}
          alt="logo"
          src="https://i.ibb.co.com/SdK0n79/section-title-vector.png"
        ></Image>
      </div>
      <div className="space-y-2 p-2 md:p-0 lg:p-0">
        <h1 className="md:text-lg lg:text-2xl font-semibold">
          What Hot Deals You Can Grab on This Winter 2024!!!
        </h1>
        <p className="md:text-lg lg:text-xl">
          The winter is coming…. Therefore you have to be prepared before the
          winter to protect yourself and your family. Moreover, brand new winter
          hot deals and offers are here again to boost your online shopping with
          numerous alluring deals, discounted prices, and vouchers. Whether you
          want to buy something for winter or grab some bargains at the best
          price, FindX can be your top opportunity to accomplish the online
          shopping you are looking for.
        </p>
        <div className="flex justify-center">
          <Image
            width={500}
            height={500}
            alt="image"
            src="https://blog.daraz.com.bd/wp-content/uploads/2023/11/men-s-winter-fashion.jpg"
          />
        </div>
        <p className="md:text-lg lg:text-xl">
          Sweaters are something traditional and formal winter wear. However,
          sweaters can be a very stylish and fashionable winter outfit if you
          purchase a trendy sweater or Kashmiri shawl for women and men from the
          FindX winter sweater collections. There are so many fashionable
          sweaters for men, women, and girls following various gorgeous sweater
          designs and prices.
        </p>
      </div>
      <div className="bg-gray-100 p-6 lg:mt-10">
        <div className="md:flex lg:flex items-center gap-2">
          <Image
            width={150}
            height={100}
            alt="image"
            src="https://i.ibb.co.com/RQJ0qs3/guide-2.jpg"
          />
          <div>
            <h1>Md Rahib</h1>
            <p>
              Md Rahib, an enthusiastic Content Writer & Researcher, has
              expertise in several industries, especially in IT, Software
              & E-commerce. Moreover, he is a strategic planner.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
