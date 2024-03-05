"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  useDotButton,
  CarouselDotButton,
} from "~/components/ui/carousel";
import Card from "./card";
import clsx from "clsx";

export default function HomeCarousel() {
  const [api, setApi] = useState<CarouselApi>();

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(api);

  return (
    <Carousel setApi={setApi} opts={{ containScroll: false }} className="pb-8 pt-4">
      <CarouselContent>
        <CarouselItem className="flex-[0_0_85%]">
          <Card />
        </CarouselItem>
        <CarouselItem className="flex-[0_0_85%]">
          <Card />
        </CarouselItem>
        <CarouselItem className="flex-[0_0_85%]">
          <Card />
        </CarouselItem>
      </CarouselContent>
      <div className="mt-6 flex items-center justify-center gap-2">
        {scrollSnaps.map((_, index) => (
          <CarouselDotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={clsx("h-1.5 w-1.5 rounded-full bg-gray-accent-6 transition-colors", {
              "bg-rewoven-caramel": index === selectedIndex,
            })}
          />
        ))}
      </div>
    </Carousel>
  );
}
