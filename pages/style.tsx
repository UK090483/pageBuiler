/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Masonry from "PageBuilderPlugins/GalleryPlug/frontend/masonry/Masonry";
import * as React from "react";
import useBreakpoint from "use-breakpoint";
interface IStypeProps {}
const BREAKPOINTS = { 2: 0, 3: 768, 4: 1280 };
const sizes = new Array(10)
  .fill(0)
  .map(() => Math.round(Math.random() * 400 + 80));
const Style: React.FunctionComponent<IStypeProps> = (props) => {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 2);

  return (
    <div className=" mt-52 ">
      <Masonry
        margin={8}
        columns={parseInt(breakpoint ? breakpoint + "" : "2")}
      >
        {sizes.map((size, index) => {
          return (
            <button
              style={{ height: size }}
              className=" item  flex justify-center items-center"
              key={index}
            >
              <img
                className=" absolute w-full h-full inset-0 object-cover"
                src={`https://picsum.photos/300/${size}`}
                alt=""
              />
              {"index:" + index + " /// "}
              {"size:" + size}
            </button>
          );
        })}
      </Masonry>
    </div>
  );
};

export default Style;
