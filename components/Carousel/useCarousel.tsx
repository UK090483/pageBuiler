import { useCallback, useState } from "react";

export interface useCarouselProps<T> {
  items: T[];
  initialActiveItem?: number;
}

export function useCarousel<T extends any>(props: useCarouselProps<T>) {
  const { initialActiveItem, items } = props;

  const [activeItemId, setActiveItemId] = useState(initialActiveItem || 0);
  const [lastActiveItemId, setLastActiveItemId] = useState(
    initialActiveItem || 0
  );
  const itemCount = items.length;
  const next = useCallback(
    () => setActiveItemId((x) => (x + 1) % itemCount),
    [itemCount]
  );
  const prev = useCallback(
    () => setActiveItemId((x) => (x === 0 ? itemCount - 1 : x - 1)),
    []
  );
  const reset = () => setActiveItemId(initialActiveItem || 0);
  const set = (index: number) => setActiveItemId(index || 0);

  return { next, prev, reset, set, activeItemId, lastActiveItemId };
}
