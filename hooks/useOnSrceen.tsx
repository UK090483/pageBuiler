import React from "react";

type UseOnScreenProps = {
  rootMargin?: string;
  delay?: number;
};

const useOnScreen = ({ rootMargin = "0px", delay = 0 }: UseOnScreenProps) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const ref = React.useRef<HTMLElement | null>(null);
  const timeOutRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeOutRef.current = setTimeout(() => {
            setIsVisible(entry.isIntersecting);
          }, delay);

          return;
        }

        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin,
      }
    );

    const currentElement = ref.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [rootMargin]);

  return { isVisible, ref };
};

export default useOnScreen;
