/* eslint-disable @next/next/no-img-element */
import React from "react";

interface UnderlineProps {}

const Underline: React.FC<UnderlineProps> = ({ children }) => {
  return (
    <span className="relative text-5xl ">
      {children}
      <img
        style={{ width: "100%" }}
        className="absolute h-6"
        src="/underline/underline.svg"
        alt=""
      />
    </span>
  );
};

export default Underline;
