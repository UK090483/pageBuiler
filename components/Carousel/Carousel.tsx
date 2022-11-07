import useDrag, { useDragOptions } from "@hooks/useDrag";
import clsx from "clsx";
import * as React from "react";
import { CarouselContextProvider } from "./CarouselContext";
import CarouselItemWrap from "./CarouselItemWrap";
import Dots from "./Dots";
import Navigation from "./Navigation";

interface ICarouselProps {
  children: React.ReactElement[];
}

function Carousel(props: ICarouselProps) {
  const { children } = props;

  return (
    <CarouselContextProvider items={children}>
      <Navigation>
        <div className="w-full flex overflow-hidden">
          <CarouselItemWrap>
            {({ activeItem }) => {
              return children.map((i, index) => {
                return React.cloneElement(i, {
                  className: clsx(
                    i.props?.className,
                    "col-start-1 col-span-1 row-start-1 row-span-1 transition-all duration-500",
                    {
                      "opacity-100 translate-y-0": activeItem === index,
                      "opacity-0 translate-y-full": activeItem !== index,
                    }
                  ),
                });
              });
            }}
          </CarouselItemWrap>
        </div>
      </Navigation>
      <Dots />
    </CarouselContextProvider>
  );
}

export default Carousel;
