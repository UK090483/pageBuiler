import * as React from "react";
import CardImage from "./CardImage";
import CardWrap from "./CardWrap";
import clsx from "clsx";

interface ICardTitleProps {}

const CardTitle: React.FunctionComponent<ICardTitleProps> = (props) => {
  const { children } = props;
  return <h3 className="line-clamp-2 ">{children}</h3>;
};

const CardDescription: React.FunctionComponent<ICardTitleProps> = (props) => {
  const { children } = props;
  return <p className="line-clamp-3 ">{children}</p>;
};

interface ICardInfoProps {
  center?: boolean;
}

const CardInfo: React.FunctionComponent<ICardInfoProps> = (props) => {
  const { center, children } = props;
  return (
    <div
      className={clsx("w-full flex flex-col gap-2", {
        "text-center": center,
      })}
    >
      {children}
    </div>
  );
};

const Card = {
  Info: CardInfo,
  Title: CardTitle,
  Wrap: CardWrap,
  Image: CardImage,
  Description: CardDescription,
};
export default Card;
