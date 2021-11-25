import React from "react";

import NextLink from "next/link";
interface LinkProps {
  href: string;
  className?: string;
  external?: boolean;
  onClick?: () => void;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  external,
  onClick,
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
      <a onClick={onClick} className={className}>
        {children}
      </a>
    </NextLink>
  );
};
