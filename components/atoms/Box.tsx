import clsx from "clsx";
import React from "react";

export type BaseProps =
  | ({ as: "div" } & JSX.IntrinsicElements["div"])
  | ({ as: "a" } & JSX.IntrinsicElements["a"])
  | ({ as: "button" } & JSX.IntrinsicElements["button"]);

const Box: React.FC<BaseProps> = ({
  children,
  as: Component = "div",
  className,
  ...rest
}) => {
  const boxClass = clsx(" bg-red-400 px-28");

  return React.createElement(
    Component,
    {
      className: `${boxClass} ${className}`,
      ...rest,
    },
    children
  );
};

export default Box;
