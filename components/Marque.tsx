import useInViewport from "@hooks/useInViewport";

import React from "react";

interface IMarqueProps<T extends unknown> {
  items: T[];
  children: (item: T, index: number) => React.ReactElement;
}

function Marque<T>(props: IMarqueProps<T>) {
  const { items, children } = props;
  const ref = React.useRef<HTMLDivElement>(null);
  const inViewport = useInViewport(ref);

  const getParts = React.useMemo(
    () => items.map((item, index) => children(item, index)),
    [children, items]
  );

  return (
    <div
      aria-hidden={true}
      ref={ref}
      className="flex overflow-x-hidden border-t-2 border-b-2  border-black w-full  font-header font-bold text-xl md:text-5xl py-0 whitespace-nowrap"
    >
      <div
        className={`${
          inViewport ? "motion-reduce:animate-none  animate-marquee" : ""
        } `}
      >
        {getParts}
      </div>
      <div
        className={`${
          inViewport ? "motion-reduce:animate-none  animate-marquee" : ""
        } `}
      >
        {getParts}
      </div>
    </div>
  );
}

export default Marque;
