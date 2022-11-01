import Link, { LinkProps } from "@components/Link";
import clsx from "clsx";
import * as React from "react";

interface ICardWrapProps extends LinkProps {
  variant?: "vertical" | "horizontal";
}

const CardWrap: React.FunctionComponent<ICardWrapProps> = (props) => {
  const { variant = "vertical", children, ...rest } = props;
  return (
    <Link
      className={clsx("flex flex-col gap-2 ", {
        "flex-row gap-8": variant === "horizontal",
      })}
      {...rest}
    >
      {children}
    </Link>
  );
};

export default CardWrap;
