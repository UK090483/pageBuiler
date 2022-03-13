import * as React from "react";
import { TestimonialItemResult } from "./testimonialQuery";
import TestimonialListItem from "./TestimonialListItem";

interface ITestimonialListProps {
  items: TestimonialItemResult[];
}

const TestimonialList: React.FunctionComponent<ITestimonialListProps> = (
  props
) => {
  const { items = [] } = props;

  const timeout = React.useRef<NodeJS.Timeout | null>(null);
  const [active, setActive] = React.useState(0);

  const setNext = () => {
    setActive((active + 1) % items.length);
  };

  React.useEffect(() => {
    timeout.current = setTimeout(() => {
      setActive((active + 1) % items.length);
    }, 5000);

    return () => {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [active, timeout, setActive, items.length]);

  return (
    <>
      <div
        onClick={setNext}
        className="flex w-full overflow-hidden  border-t-2 border-b-2  border-black"
      >
        {items?.map((i, index) => (
          <TestimonialListItem active={index === active} key={i._id} {...i} />
        ))}
      </div>
      <Navigation
        count={items.length}
        active={active}
        onChange={(n) => {
          setActive(n);
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
    <div className=" flex justify-center items-center py-4">
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
