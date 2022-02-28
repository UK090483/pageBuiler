const useIsReducedMotion = () => {
  const mediaQuery =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)");
  return mediaQuery && mediaQuery.matches;
};

export default useIsReducedMotion;
