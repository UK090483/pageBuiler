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
  // const { start, stop } = useInterval(next, 5000);
  // useInViewport(ref, {
  //   onChange: (inViewport) => (inViewport ? start() : stop()),
  // });

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
        // onClick={next}
        // onFocus={stop}
        // onBlur={start}
        // onMouseEnter={stop}
        // onMouseLeave={start}
        className="flex w-full overflow-hidden  border-t-2 border-b-2  border-black mb-9 md:mb-0 "
      >
        {items?.map((i, index) => (
          <TestimonialListItem active={index === count} key={i._id} {...i}>
            <Navigation
              onNext={next}
              onPrev={prev}
              className=" md:hidden  border-b-2 border-black"
            >
              <Dots
                count={items.length}
                active={count}
                onChange={(n) => {
                  setCount(n);
                }}
              />
            </Navigation>
          </TestimonialListItem>
        ))}
      </div>
      <Navigation
        onNext={next}
        onPrev={prev}
        className=" hidden md:flex mb-9 md:mb-20"
      >
        <Dots
          count={items.length}
          active={count}
          onChange={(n) => {
            setCount(n);
          }}
        />
      </Navigation>
    </>
  );
};

export default TestimonialList;

type DotsProps = {
  count: number;
  active: number;
  onChange: (number: number) => void;
  className?: string;
};

const Dots: React.FC<DotsProps> = (props) => {
  const { count = 0, active = 0, onChange, className } = props;
  if (count < 2) return <></>;
  return (
    <div className={` flex justify-center items-center py-4  ${className}`}>
      {new Array(count).fill("a").map((i, index) => (
        <div
          onClick={() => onChange(index)}
          key={index}
          className={`w-3 h-3 mx-0.5 rounded-full  border-[0.5px] transition-colors border-black ${
            active === index ? "bg-black" : " bg-white"
          }`}
        />
      ))}
    </div>
  );
};

type NavigationProps = {
  onNext?: () => void;
  onPrev?: () => void;
  className?: string;
};

const Navigation: React.FC<NavigationProps> = (props) => {
  const { children, onNext = () => {}, onPrev = () => {}, className } = props;
  return (
    <div className={` w-full flex  justify-between  ${className}`}>
      <button
        className=" m-2 w-8 h-8 rounded-full border-black border-2 "
        onClick={onPrev}
      >
        {"<"}
      </button>
      {children}
      <button
        className=" m-2 w-8 h-8 rounded-full border-black border-2 "
        onClick={onNext}
      >
        {">"}
      </button>
    </div>
  );
};
