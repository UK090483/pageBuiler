import { Section } from "@components/Section/Section";
import { ListItemResult } from "@components/Blocks/ListingBlock/ListingsBlock";

import React from "react";
import { Card } from "./Card";

interface CarouselProps {
  items: ListItemResult[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [current, setCurrent] = React.useState(1);

  const interval = React.useRef<null | NodeJS.Timer>(null);

  React.useEffect(() => {
    interval.current = setInterval(() => {
      setCurrent((c) => (c + 1) % items.length);
    }, 4000);

    return () => {
      if (interval.current) {
        clearInterval(interval.current);
      }
    };
  }, []);

  return (
    <Section bg="grey" width="full" className="overflow-hidden">
      <ul
        style={{ transform: `translateX(-${current * 100}%)` }}
        className="flex py-12 transition-transform duration-700 justify-items-start"
      >
        {items &&
          items.map((c) => (
            <li key={c._id} className="flex-shrink-0 w-full px-10">
              <Card {...c} className="" />
            </li>
          ))}
      </ul>
    </Section>
  );
};
