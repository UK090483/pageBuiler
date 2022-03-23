import * as React from "react";
import { TestimonialItemResult } from "./testimonialQuery";
import TestimonialListItem from "./TestimonialListItem";
import useInterval from "@hooks/useInterval";
import useInViewport from "@hooks/useInViewport";
import useKeyPress from "@hooks/useKeyPress";
import useCounter from "@hooks/useCounter";

interface ITestimonialListProps {
  items: TestimonialItemResult[];
}

const TestimonialList: React.FunctionComponent<ITestimonialListProps> = (
  props
) => {
  const { items = [] } = props;
  const ref = React.useRef(null);
  const { count, next, prev, setCount } = useCounter(items.length);
  const { start, stop } = useInterval(next, 5000);
  useInViewport(ref, {
    onChange: (inViewport) => (inViewport ? start() : stop()),
  });

  const keyPressHandler = useKeyPress({
    ArrowUp: next,
    ArrowRight: next,
    ArrowDown: prev,
    ArrowLeft: prev,
  });

  return (
    <>
      <div
        aria-label=" Testimonials "
        tabIndex={0}
        {...keyPressHandler}
        ref={ref}
        onClick={next}
        onFocus={stop}
        onBlur={start}
        onMouseEnter={stop}
        onMouseLeave={start}
        className="flex w-full overflow-hidden  border-t-2 border-b-2  border-black"
      >
        {items?.map((i, index) => (
          <TestimonialListItem active={index === count} key={i._id} {...i} />
        ))}
      </div>
      <Navigation
        count={items.length}
        active={count}
        onChange={(n) => {
          setCount(n);
        }}
      />
    </>
  );
};

export default TestimonialList;

type NavigationProps = {
  count: number;
  active: number;
  onChange: (number: number) => void;
};

const Navigation: React.FC<NavigationProps> = (props) => {
  const { count = 0, active = 0, onChange } = props;
  if (count < 2) return <></>;
  return (
    <div className=" flex justify-center items-center py-4 pb-9 md:pb-20">
      {new Array(count).fill("a").map((i, index) => (
        <div
          onClick={() => onChange(index)}
          key={index}
          className={` w-3 h-3 mx-0.5 rounded-full  border-[0.5px] transition-colors border-black ${
            active === index ? "bg-black" : " bg-white"
          }`}
        />
      ))}
    </div>
  );
};
