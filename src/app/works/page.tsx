import { HeroSlider } from "@/components/slider";
import React from "react";

const WorksPage = () => {
  return (
    <div className="flex flex-col">
        <h1 className="pt-10 text-big opacity-5">Чем я занимаюсь</h1>
      <HeroSlider />
    </div>
  );
};

export default WorksPage;
