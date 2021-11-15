import React from "react";

import NextLink from "next/link";
interface LinkProps {
  href: string;
  className?: string;
  external?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  external,
}) => {
  if (external) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} passHref>
      <a className={className}>{children}</a>
    </NextLink>
  );
};
