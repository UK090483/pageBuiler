import clsx from "clsx";
import * as React from "react";
import { useState } from "react";
import { ICarouselContextState, useCarouselContext } from "./CarouselContext";

interface ICarouselItemWrapProps {
  nextOnClick?: boolean;
  children: (props: {
    activeItemIndex: number;
    lastActiveItemIndex: null | number;
  }) => React.ReactElement | React.ReactElement[];
}

function CarouselItemWrap(props: ICarouselItemWrapProps) {
  const { children, nextOnClick = true } = props;
  const { activeItemIndex, lastActiveItemIndex, next } = useCarouselContext();

  return (
    <ul
      onClick={() => nextOnClick && next()}
      className={clsx("w-full grid grid-cols-1 grid-rows-1")}
    >
      {children && children({ activeItemIndex, lastActiveItemIndex })}
    </ul>
  );
}

export default CarouselItemWrap;
