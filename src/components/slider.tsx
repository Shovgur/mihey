"use client";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { MoveUpRightIcon } from "lucide-react";

import { WorksData } from "../app/data";
import { SliderButtons } from "./slider-buttons";

export const HeroSlider = () => {
  return (
    <>
      <Swiper
        className="!pt-[20px] !overflow-visible lg:!pt-16  "
        modules={[Navigation]}
        grabCursor
        spaceBetween={20}
        slidesPerView="auto"
        navigation={{
          nextEl: ".slider-swiper-button-next",
          prevEl: ".slider-swiper-button-prev",
        }}
      >
        {WorksData.map((data) => (
          <SwiperSlide
            className=" flex w-[320px] md:w-[600px] flex-col py-[35px] md:py-[48px] px-[35px] md:px-[46px] overflow-hidden border-[#6E6C78] border-[3px]"
            key={data.id}
          >
            <h1 className="tracking-[-4%] max-w-[392px] text-[45px] md:text-[86px] leading-[60px] md:leading-[82px] text-base_2">
              {data.title}
            </h1>
            <p className="text-[14px] pt-[42px] pb-3 max-w-[422px] leading-[16px]">
              {data.description}
            </p>
            <Link className="flex gap-3" href="/contacts">
              Talk to us <MoveUpRightIcon />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButtons sliderName="slider" />
    </>
  );
};
