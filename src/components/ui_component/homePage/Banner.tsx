"use client";

import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import slide1 from "@/assets/slide-1.png";
import slide2 from "@/assets/slide-2.jpg";
import slide3 from "@/assets/slide-3.jpg";
import slide4 from "@/assets/slide-4.jpg";

const Banner = () => {
  return (
    <div className="mb-5">
      <Carousel showThumbs={false} className="">
        <Image width={1000} height={100} alt="" src={slide2} />
        <Image width={1000} height={100} alt="" src={slide1} />
        <Image width={1000} height={100} alt="" src={slide3} />
        <Image width={1000} height={100} alt="" src={slide4} />
      </Carousel>
    </div>
  );
};

export default Banner;
