import { MoveLeftIcon, MoveRightIcon } from "lucide-react";

interface SliderButtonsProps {
  sliderName: string;
  className?: string;
}

export const SliderButtons = ({ sliderName }: SliderButtonsProps) => {
  return (
    <nav className="flex mt-10 justify-between gap-3 md:w-auto md:justify-start">
      <button className={`${sliderName}-swiper-button-prev px-3 bg-white rounded-full text-base_2`}>
        <MoveLeftIcon />
      </button>
      <button className={`${sliderName}-swiper-button-next px-3 py-3 bg-white rounded-full text-base_2`}>
        <MoveRightIcon />
      </button>
    </nav>
  );
};
