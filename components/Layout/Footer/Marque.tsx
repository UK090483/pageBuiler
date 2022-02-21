import Image from "next/image";
import * as React from "react";

interface IMarqueProps {}

const images = [
  "bubble.png",
  "denmark.png",
  "german.png",
  "passport.png",
  "pig.png",
  "shakehands.png",
];

const Marque: React.FunctionComponent<IMarqueProps> = (props) => {
  return (
    <div className="overflow-x-hidden border-t-2 border-b-2  border-black w-full">
      <div className="py-2 animate-marquee whitespace-nowrap font-header font-bold text-xl md:text-5xl">
        {[...images, ...images, ...images].map((i) => {
          return (
            <span key={i} className="mx-4">
              #PERSPECTIVREGION
              <span className="relative inline-block w-[1em] h-[1em] translate-y-[0.15em]">
                <Image src={`/images/${i}`} alt="me" layout="fill" />
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Marque;
