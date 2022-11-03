import clsx from "clsx";
import * as React from "react";
import { CarouselContextProvider } from "./CarouselContext";
import CarouselItemWrap from "./CarouselItemWrap";
import Dots from "./Dots";
import Navigation from "./Navigation";

interface ICarouselProps {
  children: React.ReactElement[];
  items: any[];
}

// function Carousel(props: ICarouselProps) {
//   const { children, items } = props;

//   return (
//     <CarouselContextProvider items={items}>
//       <Navigation>
//         <CarouselItemWrap>
//           {(props) => {
//             const { activeItem } = props;
//             return children.map((i, index) => {
//               const isActive = activeItem === index;

//               return React.cloneElement(i, {
//                 className: clsx(
//                   i.props?.className,
//                   "w-full col-start-1 col-span-1 row-start-1 row-span-1  transition-opacity flex justify-center items-center",
//                   { " opacity-100 ": isActive, " opacity-0 ": !isActive }
//                 ),
//               });
//             });
//           }}
//         </CarouselItemWrap>
//       </Navigation>
//       <Dots />
//     </CarouselContextProvider>
//   );
// }

function Carousel(props: ICarouselProps) {
  const { children, items } = props;
  const ref = React.useRef<HTMLDivElement>(null);

  const [captured, setCaptured] = React.useState(false);

  const handleMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
    if (captured) {
      console.log("handleMove", e.movementX);
    }
  };

  const handleStart: React.MouseEventHandler<HTMLDivElement> = (e) => {
    console.log("handleStart", e);
    setCaptured(true);
  };

  const handleEnd: React.MouseEventHandler<HTMLDivElement> = (e) => {
    console.log("handleEnd", e);
    setCaptured(false);
  };

  return (
    <CarouselContextProvider items={items}>
      <Navigation>
        <div
          ref={ref}
          onMouseDown={handleStart}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
          onMouseMove={handleMove}
          className=" w-full snap-x snap-mandatory flex overflow-scroll"
        >
          {children.map((i, index) => {
            return React.cloneElement(i, {
              className: clsx(
                i.props?.className,
                " snap-center flex-shrink-0 w-full border-red border-2   w-screen"
              ),
            });
          })}
        </div>
      </Navigation>
      <Dots />
    </CarouselContextProvider>
  );
}

export default Carousel;
