"use client";

import Image from "next/image";
import Card from "./card";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

export default function HomeCarousel() {
  return (
    <>
      {/* TODO: Change image on slide change with an animation */}
      <Image className="mx-auto mb-6" src="/mystery-box.png" alt="Mystery Box" width={240} height={240} />

      <Swiper
        centeredSlides
        spaceBetween={16}
        slidesPerView={1.15}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
