import React, { useRef } from "react";
import { useIsomorphicLayoutEffect } from "react-use";

type Sizes = Record<number, number>;
type MasonryProps = {
  columns: number;
  margin?: number;
  transition?: number;
  children: React.ReactElement[];
  sizes?: Sizes;
};

const Masonry: React.FC<MasonryProps> = (props) => {
  const { children, columns, margin = 0, transition = 1, sizes } = props;

  const root = useRef<HTMLUListElement>(null);

  useIsomorphicLayoutEffect(() => {
    let _columns = columns;
    const run = () => {
      if (!root.current) return;
      if (sizes) {
        const width = window.innerWidth;

        _columns = Object.entries(sizes).reduce((acc, item, index) => {
          if (index === 0) return parseInt(item[0]);
          if (width > item[1]) return parseInt(item[0]);
          return acc;
        }, _columns as number);
      }

      const gridItems = [].slice.call(root.current.children) as HTMLElement[];
      const getHeight = (item: HTMLElement) => {
        return item.getBoundingClientRect().height;
      };
      const cols = columnHandler(_columns);
      gridItems.forEach((item) => {
        const { nextIndex, currentHeight } = cols.getNext();
        cols.add(nextIndex, getHeight(item) + margin);
        const val = (nextIndex * 100) / _columns;
        const delta = margin / _columns;
        item.style.transition = ` left ${transition}s ,top ${transition}s `;
        item.style.width = `calc(${100 / _columns}% - ${margin + delta}px)`;
        item.style.left = `calc(${val}% + ${margin - nextIndex * delta}px)`;
        item.style.top = `${currentHeight + margin}px`;
      });
      root.current.style.height = cols.getHeight() + margin + "px";
    };

    run();

    window.addEventListener("resize", run);
    return () => {
      window.removeEventListener("resize", run);
    };
  }, [root, columns, children, margin, transition, sizes]);

  if (!children || !Array.isArray(children)) return null;

  return (
    <ul
      ref={root}
      style={{ transition: "height 1s" }}
      className="relative w-full "
    >
      {[...children].map((child) => {
        return React.cloneElement(
          child,
          {
            style: {
              ...child.props.style,
              width: `calc(${100 / columns}% - ${margin + margin / columns}px)`,
              opacity: 30,
              position: "absolute",
              top: 0,
              left: 0,
            },
          },
          [...child.props?.children]
        );
      })}
    </ul>
  );
};

export default Masonry;

const columnHandler = (columnCount: number) => {
  const array = new Array(columnCount).fill(0);
  return {
    getNext: () => {
      const min = Math.min(...array);
      array.indexOf(min);
      return { nextIndex: array.indexOf(min), currentHeight: min };
    },
    add: (col: number, height: number) => {
      array[col] += height;
    },
    getHeight: () => {
      return Math.max(...array);
    },
  };
};
