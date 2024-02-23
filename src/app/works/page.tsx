import { HeroSlider } from "@/components/slider";
import React from "react";

const WorksPage = () => {
  return (
    <main className="flex min-h-screen px-[30px] md:px-[104px] overflow-x-hidden z-20 relative ">
      <div className="!w-full">
        <h1 className="pt-5 text-[64px] hidden md:block md:text-big opacity-30">
          Чем я занимаюсь
        </h1>
        <HeroSlider />
      </div>
    </main>
  );
};

export default WorksPage;
