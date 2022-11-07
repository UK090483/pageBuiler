import * as React from "react";

export interface ICardTitleProps {}
export const CardTitle: React.FunctionComponent<ICardTitleProps> = (props) => {
  const { children } = props;
  return <h3 className="line-clamp-2 ">{children}</h3>;
};
