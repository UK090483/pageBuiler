import * as React from "react";

import appConfig from "../app.config.json";
import Image from "next/image";

interface IStypeProps {}

const Page404: React.FunctionComponent<IStypeProps> = (props) => {
  return (
    <div className="relative h-screen flex w-full justify-center items-center ">
      <div className=" w-full  max-w-lg  ">
        <Image
          src="/images/404_Page.png"
          width={600}
          height={600}
          alt={"man on blackboard with 404 written on"}
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Page404;
