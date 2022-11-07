import { LinkProps, ConditionalLink } from "@components/Link";
import clsx from "clsx";
import * as React from "react";

interface ICardWrapProps extends LinkProps {
  variant?: "vertical" | "horizontal";
  noLink?: boolean;
}

const CardWrap: React.FunctionComponent<ICardWrapProps> = (props) => {
  const { variant = "vertical", children, noLink = false, ...rest } = props;
  return (
    <ConditionalLink
      condition={!noLink}
      className={clsx("flex flex-col gap-2", {
        " md:flex-row md:gap-8": variant === "horizontal",
      })}
      {...rest}
    >
      {children}
    </ConditionalLink>
  );
};

export default CardWrap;
