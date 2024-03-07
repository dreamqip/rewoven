"use client";

import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { EffectFlip, Pagination, Thumbs } from "swiper/modules";
import { Button } from "~/components/ui/button";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/thumbs";

const bulletVariables = {
  "--swiper-pagination-color": "hsl(var(--accent-2))",
  "--swiper-pagination-bullet-size": "6px",
  "--swiper-pagination-bullet-inactive-color": "hsl(var(--accent-6))",
  "--swiper-pagination-bullet-inactive-opacity": 1,
  "--swiper-pagination-bottom": 0,
} as React.CSSProperties;

export default function Welcome({ onNext }: { onNext: () => void }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  return (
    <>
      <div className="grid min-w-0 grid-rows-[1fr_auto] bg-rewoven-ivory px-4 pb-8">
        <div className="min-w-0">
          <Swiper
            className="h-full"
            modules={[EffectFlip, Pagination, Thumbs]}
            effect="flip"
            flipEffect={{ slideShadows: false }}
            pagination={true}
            thumbs={{ swiper: thumbsSwiper }}
            style={bulletVariables}
          >
            <SwiperSlide className="flex">
              <Image className="m-auto" src="/avatar.png" alt="Rewoven Logo" width={128} height={128} />
            </SwiperSlide>
            <SwiperSlide className="flex">
              <Image className="m-auto" src="/avatar.png" alt="Rewoven Logo" width={128} height={128} />
            </SwiperSlide>
            <SwiperSlide className="flex">
              <Image className="m-auto" src="/avatar.png" alt="Rewoven Logo" width={128} height={128} />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="min-w-0">
          <Swiper onSwiper={setThumbsSwiper} watchSlidesProgress={true}>
            <SwiperSlide>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <span className="uppercase text-gray-accent-6">Welcome</span>
                  <span className="text-lg font-semibold">Boba in Your Wallet</span>
                </div>
                <p className="text-sm text-gray-accent-6">
                  A new loyalty program from your favorite Boba shop! Earn points with every purchase and unlock mystery
                  boxes filled with exclusive rewards.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <span className="uppercase text-gray-accent-6">Welcome</span>
                  <span className="text-lg font-semibold">Boba in Your Wallet</span>
                </div>
                <p className="text-sm text-gray-accent-6">
                  A new loyalty program from your favorite Boba shop! Earn points with every purchase and unlock mystery
                  boxes filled with exclusive rewards.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <Button className="mt-6" onClick={onNext}>
          Next
        </Button>
      </div>
    </>
  );
}
