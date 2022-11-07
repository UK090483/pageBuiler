import { useState, useEffect, useRef, useCallback } from "react";

export type useDragOptions = {
  onPointerDown?: (e: PointerEvent | MouseEvent) => void;
  onPointerUp?: (e: PointerEvent | MouseEvent) => void;
  onPointerMove?: (e: PointerEvent | MouseEvent) => void;
  onDrag?: (
    coordinates: typeof defaultCoordinates,
    e: PointerEvent | MouseEvent
  ) => void;
};

const defaultCoordinates = {
  x: 0,
  y: 0,
  initialX: 0,
  initialY: 0,
  deltaX: 0,
  deltaY: 0,
};

function useDrag<T extends HTMLDivElement>(
  ref: React.RefObject<T>,
  deps = [],
  options: useDragOptions = {}
) {
  const {
    onPointerDown = () => {},
    onPointerUp = () => {},
    onPointerMove = () => {},
    onDrag = () => {},
  } = options;

  const [isDragging, setIsDragging] = useState(false);

  const coordinates = useRef<typeof defaultCoordinates>(defaultCoordinates);

  const handlePointerDown = useCallback(
    (e: PointerEvent | MouseEvent) => {
      if (!isDragging) {
        onPointerDown(e);
        setIsDragging(true);
        coordinates.current = {
          ...coordinates.current,
          initialX: e.clientX,
          initialY: e.clientY,
          x: e.clientX,
          y: e.clientY,
        };
      }
    },
    [onPointerDown, isDragging]
  );

  const handlePointerUp = useCallback(
    (e: PointerEvent | MouseEvent) => {
      if (isDragging) {
        setIsDragging(false);
        onPointerUp(e);
        coordinates.current = defaultCoordinates;
      }
    },
    [onPointerUp, isDragging]
  );

  const handlePointerMove = useCallback(
    (e: PointerEvent | MouseEvent) => {
      onPointerMove(e);
      if (isDragging) {
        coordinates.current = {
          ...coordinates.current,
          x: e.clientX,
          y: e.clientY,
          deltaX: e.clientX - coordinates.current.initialX,
          deltaY: e.clientY - coordinates.current.initialY,
        };

        onDrag(coordinates.current, e);
      }
    },
    [isDragging, onPointerMove, onDrag]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    // element.addEventListener("pointerdown", handlePointerDown);
    // element.addEventListener("pointerup", handlePointerUp);
    // element.addEventListener("pointermove", handlePointerMove);
    element.addEventListener("mousedown", handlePointerDown);
    element.addEventListener("mouseup", handlePointerUp);
    element.addEventListener("mousemove", handlePointerMove);

    return () => {
      //   element.removeEventListener("pointerdown", handlePointerDown);
      //   element.removeEventListener("pointerup", handlePointerUp);
      //   element.removeEventListener("pointermove", handlePointerMove);
      element.removeEventListener("mousedown", handlePointerDown);
      element.removeEventListener("mouseup", handlePointerUp);
      element.removeEventListener("mousemove", handlePointerMove);
    };
  }, [isDragging, handlePointerDown, handlePointerUp, handlePointerMove, ref]);

  return { isDragging };
}

export default useDrag;
