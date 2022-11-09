import React from "react";
import { useCarouselContext } from "./CarouselContext";
import { HiArrowLeft } from "react-icons/hi";

type NavigationProps = {
  onNext?: () => void;
  onPrev?: () => void;
  className?: string;
  count?: number;
};
export const Navigation: React.FC<NavigationProps> = (props) => {
  const { children, className } = props;
  const { next, prev, itemCount } = useCarouselContext();
  if (itemCount < 2) return <></>;

  return (
    <div className={`w-full flex justify-between ${className}`}>
      <button
        className="px-3"
        onClick={prev}
        aria-label="carousel button previous"
      >
        <Arrow />
      </button>
      {children}
      <button
        className="px-3 rotate-180"
        onClick={next}
        aria-label="carousel button next"
      >
        <Arrow />
      </button>
    </div>
  );
};

export default Navigation;
const Arrow = () => {
  return <HiArrowLeft className="border-2 border-current rounded-full" />;
};
