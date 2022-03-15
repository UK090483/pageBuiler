import { useCallback } from "react";

type KeydownItems = "ArrowDown" | "ArrowUp" | "ArrowLeft" | "ArrowRight";

type useKeyPressCallbacks = { [k: KeydownItems | string]: () => void };

type UseKeyPress = (callBacks: useKeyPressCallbacks) => {
  onKeyDown: React.KeyboardEventHandler<HTMLElement>;
};

const useKeyPress: UseKeyPress = (callBacks) => {
  const downHandler = useCallback(
    (e: React.KeyboardEvent<HTMLElement>) => {
      if (typeof callBacks[e.key] === "function") {
        e.preventDefault();
        e.stopPropagation();
        callBacks[e.key]();
      }
    },
    [callBacks]
  );

  return {
    onKeyDown: (e) => {
      downHandler(e);
    },
  };
};

export default useKeyPress;
