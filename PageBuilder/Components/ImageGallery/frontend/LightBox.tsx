import Typo from "@components/Typography/Typography";
import useCounter from "@hooks/useCounter";
import useFocusTrap from "@hooks/useFocustrap";
import useKeyPress from "@hooks/useKeyPress";
import SanityImage from "@components/SanityImage";

import * as React from "react";
import { useLockBodyScroll, useWindowSize } from "react-use";
import { ImageGalleryPlugItem } from "../imageGallery.query";

export type LightBoxProps = {
  onClose: () => void;
  initialIndex: number;
  items?: ImageGalleryPlugItem[];
};

export const LightBox: React.FC<LightBoxProps> = (props) => {
  const { onClose, items, initialIndex } = props;
  useLockBodyScroll();
  const { count, next, prev } = useCounter(items?.length || 6, initialIndex);

  const ref = useFocusTrap();

  useKeyPress(
    {
      all: (e) => {
        ["ArrowRight", "ArrowUp"].includes(e.key) && next();
        ["ArrowLeft", "ArrowDown"].includes(e.key) && prev();
        "Escape" === e.key && onClose();
      },
    },
    { useDocument: true }
  );

  const { width } = useWindowSize();

  return (
    <div
      ref={ref}
      id="portal"
      className=" z-[999999]  fixed inset-0 bg-black bg-opacity-80  flex  justify-center items-center text-white  "
    >
      <button
        className=" border-2 rounded-full  z-10 w-10 h-10 absolute top-4 right-4"
        onClick={onClose}
      >
        X
      </button>

      <button
        className=" absolute bottom-0 md:top-1/2  left-0 z-10  border-2 rounded-full  w-10 h-10 shrink-0  m-6"
        onClick={prev}
      >
        {"<"}
      </button>
      <div className="flex  overflow-hidden h-[70vh] pointer-events-none ">
        <div
          className="flex transition-transform "
          style={{ transform: `translateX(-${width * count}px)` }}
        >
          {items?.map((i) => {
            return (
              <div
                key={i._key}
                className="flex flex-col flex-shrink-0 w-screen"
              >
                <div className="relative h-full ">
                  <SanityImage
                    sizes="60vw"
                    src={i.image}
                    fill
                    className={"object-contain"}
                  />
                </div>

                <div className="w-full max-w-lg mx-auto text-center pt-2 break-words px-3">
                  {i.title && (
                    <Typo space={false} variant="h4">
                      {i.title}
                    </Typo>
                  )}
                  {i.text && <Typo space={false}>{i.text}</Typo>}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        className=" absolute bottom-0 md:top-1/2  z-10 right-0  border-2 rounded-full  w-10 h-10 shrink-0 m-6"
        onClick={next}
      >
        {">"}
      </button>
    </div>
  );
};
