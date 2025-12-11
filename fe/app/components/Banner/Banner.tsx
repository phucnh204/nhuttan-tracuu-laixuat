"use client"  // ⚠️ Bắt buộc với App Router nếu dùng hook hoặc Swiper

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import banner1 from "../../../public/images/banner.png";
import banner3 from "../../../public/images/banner2.jpg";
import banner2 from "../../../public/images/chat (98).png";

const banners = [banner1, banner2, banner3];

function BannerSwiper() {
  return (
    <div className="w-full relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full" style={{ paddingTop: '40%' }}>
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-900 to-blue-700"></div>

              {/* Image */}
              <img
                src={banner.src}
                alt={`Banner ${index + 1}`}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-95"
              />

              {/* Optional contrast overlay */}
              <div className="absolute inset-0 bg-black opacity-20"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default BannerSwiper;
