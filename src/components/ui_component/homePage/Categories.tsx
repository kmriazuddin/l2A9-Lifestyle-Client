"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import { useAllCategory } from "@/hooks/category.hook";
import Link from "next/link";
import { useAppDispatch } from "@/redux/hooks";
import { setCategoryId } from "@/redux/features/cartSlice/cartSlice";
const Categories = () => {
  const { data } = useAllCategory();
  const dispatch = useAppDispatch();
  return (
    <div className=" mb-8 px-1 mt-5 sm:mt-0">
      <Swiper
        className=""
        slidesPerView={2}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          440: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          550: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          988: {
            slidesPerView: 5,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination]}
      >
        {data?.data?.map((option) => (
          <SwiperSlide key={option.categoryId}>
            <Link
              onClick={() => dispatch(setCategoryId(option.categoryId))}
              href={`/product`}
              className="w-full hover:scale-95 duration-500 flex justify-center"
            >
              <div className=" w-36 h-10 md:min-w-40 flex  items-center justify-center rounded-full bg-black md:h-14 text-white font-medium">
                {option.name}
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Categories;
