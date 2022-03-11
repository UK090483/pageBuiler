import { useCallback } from "react";

type useKeyPressCallbacks = { [k: string]: () => void };
const useKeyPress = (callBacks: useKeyPressCallbacks) => {
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

  const res: {
    onKeyDown: React.KeyboardEventHandler<HTMLElement>;
    onFocus: React.FocusEventHandler<HTMLElement>;
    onBlur: React.FocusEventHandler<HTMLElement>;
  } = {
    onFocus: () => {},
    onBlur: () => {},
    onKeyDown: (e) => {
      downHandler(e);
    },
  };

  return res;
};

export default useKeyPress;
