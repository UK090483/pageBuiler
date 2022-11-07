import Button from "@components/Button/Button";
import * as React from "react";
import { LinkProps } from "components/Link";

interface ICardLinkProps extends LinkProps {}

const CardLink: React.FunctionComponent<ICardLinkProps> = (props) => {
  const { internal } = props;
  return <Button internal={internal || undefined}>Read More</Button>;
};

export default CardLink;
