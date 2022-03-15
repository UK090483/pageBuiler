import React, { useState, useEffect } from "react";

type useInViewportOptions = {
  callBack?: (entry: IntersectionObserverEntry) => boolean;
};

const useInViewport = (
  ref: React.RefObject<HTMLDivElement>,
  options?: useInViewportOptions
) => {
  const [intersecting, setIntersecting] = useState<boolean>(false);

  useEffect(() => {
    if (ref.current && typeof IntersectionObserver === "function") {
      const handler = (entries: IntersectionObserverEntry[]) => {
        const isIntersecting = options?.callBack
          ? options.callBack(entries[0])
          : !(entries[0].intersectionRatio < 1);
        if (intersecting !== isIntersecting) {
          setIntersecting(isIntersecting);
        }
      };
      const observer = new IntersectionObserver(handler, {
        root: null,
        rootMargin: "100px",
        threshold: 1,
      });
      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
    return () => {};
  }, [ref, options, intersecting]);

  return intersecting;
};

export default useInViewport;
