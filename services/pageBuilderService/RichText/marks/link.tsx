import React from "react";

import { Link } from "@components/Link";
import {
  linkQuery,
  LinkResult,
} from "@services/pageBuilderService/queries/snippets";
import { MarkProps } from "@services/pageBuilderService/lib/SanityBlock";

const InlineIcon = () => {
  return (
    <span className="inline-block   h-[1em] transform translate-y-[-0.2em] ">
      {/* <Icon icon="arrowRight" bgColor="grey" /> */} <span>LinkIcon</span>
    </span>
  );
};

export interface LinkMarkQueryResult {
  asButton?: boolean;
  link?: LinkResult;
}

export const linkMarkQuery = (locale: string = "") => `_type == "link" => {
  ..., 'link': link{${linkQuery(locale)}} ,
}`;

const LinkMark: React.FC<MarkProps<LinkMarkQueryResult>> = (props) => {
  const { mark } = props;
  const { link, asButton } = mark;

  return (
    <Link
      href={link?.href || "/"}
      external={link?.external}
      className="underline text-red"
    >
      {asButton ? <InlineIcon /> : props.children}
    </Link>
  );
};

export default LinkMark;

export {};
