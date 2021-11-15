import React from "react";

import Link from "next/link";

// import Icon from "@components/Icon";
// import { buildInternalLink } from "@src/services/pageBuilder/buildInternalLink";

const InlineIcon = () => {
  return (
    <span className="inline-block   h-[1em] transform translate-y-[-0.2em] ">
      {/* <Icon icon="arrowRight" bgColor="grey" /> */} <span>LinkIcon</span>
    </span>
  );
};

type LinkMarkPros = {
  internalLink?: { type: string; slug: string };
  link?: string;
  asButton?: boolean;
};

export const linkMarkQuery = `
_type == "link" => {

    'internalLink': link.internalLink->{'type':_type, 'slug':slug.current},
    'link':link.link,
    asButton,
  }`;

const LinkMark: React.FC<LinkMarkPros> = (props) => {
  const { link, internalLink, asButton } = props;

  //   const _internalLink = internalLink && buildInternalLink(internalLink);

  const _internalLink = "blaaa";

  if (_internalLink) {
    return (
      <Link href={_internalLink} passHref>
        <a className="underline text-frida-red">
          {asButton ? <InlineIcon /> : props.children}
        </a>
      </Link>
    );
  }

  return (
    <a
      target="_blank"
      rel="noreferrer"
      href={link || "/"}
      className="underline text-frida-red"
    >
      {asButton ? <InlineIcon /> : props.children}
    </a>
  );
};

export default LinkMark;

export {};
