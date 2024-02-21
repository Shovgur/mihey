"use client";
import { Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { MoveUpRightIcon } from "lucide-react";

import { WorksData } from "../app/data";
import { SliderButtons } from "./slider-buttons";

export const HeroSlider = () => {
  return (
    <div>
      <Swiper
        className="!pt-[20px] w-full lg:!pt-16  "
        modules={[Navigation]}
        grabCursor
        slidesPerView={3}
        spaceBetween={10}
        navigation={{
          nextEl: ".slider-swiper-button-next",
          prevEl: ".slider-swiper-button-prev",
        }}
      >
        {WorksData.map((data) => (
          <SwiperSlide className="max-w-[630px] !overflow-hidden" key={data.id}>
            <div className="max-w-[622px] flex flex-col py-[48px] px-[46px] overflow-hidden border-[#6E6C78] border-[3px]">
              <h1 className="tracking-[-4%] max-w-[392px] text-[86px] leading-[82px] text-base_2">
                {data.title}
              </h1>
              <p className="text-[14px] pt-[42px] pb-3 max-w-[422px] leading-[16px]">{data.description}</p>
              <Link className="flex gap-3" href="/contacts">
                Talk to us <MoveUpRightIcon />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderButtons sliderName="slider" />
    </div>
  );
};
