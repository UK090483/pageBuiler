import * as React from "react";
import { useCarouselContext } from "./CarouselContext";

type DotsProps = {
  className?: string;
};
const Dots: React.FC<DotsProps> = (props) => {
  const { className } = props;
  const { itemCount, activeItemIndex, set } = useCarouselContext();
  const dots = React.useMemo(() => new Array(itemCount).fill("a"), [itemCount]);
  if (itemCount < 2) return <></>;
  return (
    <div
      aria-hidden={true}
      className={`flex justify-center items-center${
        className ? className : ""
      }`}
    >
      {dots.map((i, index) => (
        <div
          onClick={() => set(index)}
          key={index}
          className={`w-3 h-3 mx-0.5 rounded-full border-[0.5px] transition-colors border-current ${
            activeItemIndex === index ? "bg-current" : " bg-transparent"
          }`}
        />
      ))}
    </div>
  );
};

export default Dots;
