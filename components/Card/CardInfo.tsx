import * as React from "react";
import clsx from "clsx";

interface ICardInfoProps {
  center?: boolean;
}
export const CardInfo: React.FunctionComponent<ICardInfoProps> = (props) => {
  const { center, children } = props;
  return (
    <div
      className={clsx("w-full  flex flex-col gap-2", {
        "text-center": center,
      })}
    >
      {children}
    </div>
  );
};
