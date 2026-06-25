"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import banner1 from "../../../public/images/banner.png";
import banner2 from "../../../public/images/chat (98).png";
import banner3 from "../../../public/images/banner2.jpg";

const banners = [banner1, banner2, banner3];

function BannerSwiper() {
return ( <div className="w-full relative overflow-hidden">
<Swiper
modules={[Autoplay, Pagination]}
spaceBetween={0}
slidesPerView={1}
loop={true}
speed={1200}
autoplay={{
delay: 5000,
disableOnInteraction: false,
}}
pagination={{
clickable: true,
dynamicBullets: true,
}}
>
{banners.map((banner, index) => ( <SwiperSlide key={index}> <div className="relative w-full h-[250px] sm:h-[400px] lg:h-[700px] overflow-hidden">

```
          {/* Banner Image */}
          <img
            src={banner.src}
            alt={`Banner ${index + 1}`}
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
              opacity-100
            "
          />

          {/* Dark Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/60
              via-black/25
              to-transparent
            "
          />

          {/* Bottom Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/40
              via-transparent
              to-transparent
            "
          />

          {/* Premium Light Effect */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-emerald-500/10
              via-transparent
              to-yellow-400/10
            "
          />

          {/* Decorative Blur */}
          <div
            className="
              absolute
              -top-20
              -left-20
              w-72
              h-72
              bg-emerald-400/20
              rounded-full
              blur-3xl
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -right-20
              w-72
              h-72
              bg-yellow-400/20
              rounded-full
              blur-3xl
            "
          />
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

);
}

export default BannerSwiper;
