import Image from "next/image";
import * as React from "react";

import TestImage from "../public/images/testImage.jpg";

interface IStypeProps {}

const Style: React.FunctionComponent<IStypeProps> = (props) => {
  console.log(TestImage);

  return (
    <div
    //  className="relative w-36  h-36"
    >
      <Image alt="jo" src={TestImage} layout="responsive" sizes="50vw" />
    </div>
  );
};

export default Style;
