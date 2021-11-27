/* eslint-disable @next/next/no-img-element */
import clsx from "clsx";
import React from "react";

interface UnderlineProps {
  color?: "white" | "black" | "primary" | "secondary";
}

const Underline: React.FC<UnderlineProps> = ({ children, color }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <span
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative inline-block "
    >
      {children}

      <svg
        style={{ fill: "transparent", height: "0.5rem" }}
        preserveAspectRatio="none"
        className="absolute bottom-0 w-full fill-current stroke-current -right-1 -left-1 "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 488 25"
      >
        <path
          style={{
            strokeDasharray: 488,
            strokeDashoffset: isHovered ? 0 : 488,
            transition: "stroke-dashoffset 0.3s",
          }}
          className={clsx("stroke-current", {
            "text-black": color === "black",
            "text-white": color === "white",
            "text-primary": color === "primary",
            "text-secondary": color === "secondary",
          })}
          // stroke="red"
          d="M3 18.9998C24.3674 17.6849 45.6112 12.5894 67 10.6665C130.052 4.9979 193.492 1.36044 256.778 4.72203C333.009 8.77124 408.671 19.0641 485 21.9998"
          strokeWidth="16"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export default Underline;
