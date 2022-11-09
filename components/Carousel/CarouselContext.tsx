import React, { useContext } from "react";
import { useCarousel, useCarouselProps } from "./useCarousel";

export interface ICarouselContextState extends ReturnType<typeof useCarousel> {}

const defaultState: ICarouselContextState = {
  next: () => null,
  prev: () => null,
  reset: () => null,
  set: () => null,
  lastActiveItemIndex: null,
  activeItemIndex: 0,
  itemCount: 0,
};

const CarouselContext = React.createContext(defaultState);

interface CarouselContextProviderProps extends useCarouselProps {
  children?: React.ReactNode | undefined;
}

export function CarouselContextProvider(props: CarouselContextProviderProps) {
  const { children, ...rest } = props;
  const {
    itemCount,
    lastActiveItemIndex,
    activeItemIndex,
    next,
    prev,
    reset,
    set,
  } = useCarousel(rest);

  return (
    <CarouselContext.Provider
      value={{
        itemCount,
        activeItemIndex,
        lastActiveItemIndex,
        next,
        prev,
        reset,
        set,
        ...rest,
      }}
    >
      {children}
    </CarouselContext.Provider>
  );
}

export const useCarouselContext = () => {
  return useContext(CarouselContext);
};
