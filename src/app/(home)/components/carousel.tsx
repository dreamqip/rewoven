"use client";

import Image from "next/image";
import Card from "./card";
import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Thumbs, EffectFlip, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/thumbs";
import "swiper/css/pagination";

// TODO: Move to utils
const bulletVariables = {
  "--swiper-pagination-color": "#1C1B1F",
  "--swiper-pagination-bullet-size": "6px",
  "--swiper-pagination-bullet-inactive-color": "hsl(var(--accent-6))",
  "--swiper-pagination-bullet-inactive-opacity": 1,
  "--swiper-pagination-bottom": 0,
} as React.CSSProperties;

export default function HomeCarousel() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);

  return (
    <>
      <Swiper
        className="mb-8"
        thumbs={{ swiper: thumbsSwiper }}
        modules={[EffectFlip, Thumbs]}
        spaceBetween={16}
        effect="flip"
        flipEffect={{ slideShadows: false }}
      >
        <SwiperSlide>
          <Image className="mx-auto" src="/mystery-box.png" alt="Mystery Box" width={240} height={240} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="mx-auto" src="/mystery-box.png" alt="Mystery Box" width={240} height={240} />
        </SwiperSlide>
        <SwiperSlide>
          <Image className="mx-auto" src="/mystery-box.png" alt="Mystery Box" width={240} height={240} />
        </SwiperSlide>
      </Swiper>

      <Swiper
        className="pb-8"
        onSwiper={setThumbsSwiper}
        modules={[Thumbs, Pagination]}
        centeredSlides={true}
        spaceBetween={16}
        pagination={true}
        slidesPerView={1.15}
        watchSlidesProgress={true}
        style={bulletVariables}
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
