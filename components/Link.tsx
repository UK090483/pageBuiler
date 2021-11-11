import React from "react";

import NextLink from "next/link";
interface LinkProps {
  href: string;
  className?: string;
}

export const Link: React.FC<LinkProps> = ({ href, children, className }) => {
  return (
    <NextLink href={href} passHref>
      <a className={className}>{children}</a>
    </NextLink>
  );
};
