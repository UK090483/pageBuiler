import { useCallback, useState, useMemo } from "react";

export interface useCarouselProps {
  items: any[] | number;
  initialActiveItem?: number;
}

export function useCarousel(props: useCarouselProps) {
  const { initialActiveItem, items } = props;

  const [[activeItemIndex, lastActiveItemIndex], setActiveItem] = useState<
    [number, number | null]
  >([initialActiveItem || 0, null]);
  const itemCount = useMemo(
    () => (Array.isArray(items) ? items.length : items),
    [items]
  );

  const next = useCallback(
    () => setActiveItem(([current]) => [(current + 1) % itemCount, current]),
    [itemCount]
  );
  const prev = useCallback(
    () =>
      setActiveItem(([current]) => [
        current === 0 ? itemCount - 1 : current - 1,
        current,
      ]),
    [itemCount]
  );
  const reset = () => setActiveItem([initialActiveItem || 0, null]);
  const set = (index: number) => setActiveItem(([current]) => [index, current]);

  return {
    next,
    prev,
    reset,
    set,
    activeItemIndex,
    lastActiveItemIndex,
    itemCount,
  };
}
