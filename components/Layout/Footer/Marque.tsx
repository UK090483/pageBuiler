import Typo from "@components/Typography/Typography";
import * as React from "react";

interface IMarqueProps {}

const Marque: React.FunctionComponent<IMarqueProps> = (props) => {
  return (
    <div className="overflow-x-hidden border-t-2 border-b-2  border-black w-full">
      <div className="py-2 animate-marquee whitespace-nowrap font-bold text-xl md:text-5xl">
        <span className="mx-4  ">#PERSPECTIVREGION</span>
        <span className="mx-4 ">#PERSPECTIVREGION</span>
        <span className="mx-4 ">#PERSPECTIVREGION</span>
        <span className="mx-4 ">#PERSPECTIVREGION</span>
        <span className="mx-4 ">#PERSPECTIVREGION</span>
        <span className="mx-4 ">#PERSPECTIVREGION</span>
        <span className="mx-4 ">#PERSPECTIVREGION</span>
        <span className="mx-4 ">#PERSPECTIVREGION</span>
        <span className="mx-4 ">#PERSPECTIVREGION</span>
        <span className="mx-4 ">#PERSPECTIVREGION</span>
        <span className="mx-4 ">#PERSPECTIVREGION</span>
        <span className="mx-4 ">#PERSPECTIVREGION</span>
      </div>
    </div>
  );
};

export default Marque;
