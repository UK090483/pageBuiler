import * as React from "react";
import { Textfit } from "react-textfit";
interface IStypeProps {}

const Style: React.FunctionComponent<IStypeProps> = (props) => {
  return (
    <div className=" mt-40  break-words w-full h-[200px] bg-gray-400 px-16 ">
      <svg viewBox="0 0 500 500" className=" bg-red w-full">
        <text x="0" y="1.5em" fontSize="30px">
          GETEILTE VERGANGENHEIT
          {/* <tspan x="-30" dy="1.5em">
              GETEILTE VERGANGENHEIT{" "}
            </tspan>
            <tspan x="0" dy="1.5em">
              - GEMEINSAME ZUKUNFT?
            </tspan> */}
        </text>
      </svg>
    </div>
  );
};

export default Style;
