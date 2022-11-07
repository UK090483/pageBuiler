import * as React from "react";

interface ICardDescriptionProps {}
export const CardDescription: React.FunctionComponent<ICardDescriptionProps> = (
  props
) => {
  const { children } = props;
  return <p className="line-clamp-3 ">{children}</p>;
};
