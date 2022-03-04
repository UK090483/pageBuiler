import React from "react";
import NextLink from "next/link";
import { useHomeRoute } from "./Layout/LayoutContext";

interface LinkProps {
  href: string;
  className?: string;
  external?: boolean;
  onClick?: () => void;
  locale?: string;
  scroll?: boolean;
  role?: string;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className,
  external,
  locale,
  onClick,
  scroll,
  role,
}) => {
  const { parseRoute } = useHomeRoute();

  if (external) {
    return (
      <a
        href={href}
        role={role}
        className={className}
        target="_blank"
        rel="noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={parseRoute(href)} passHref locale={locale} scroll={scroll}>
      <a onClick={onClick} role={role} className={className}>
        {children}
      </a>
    </NextLink>
  );
};

export const ConditionalLink: React.FC<LinkProps & { condition: boolean }> = ({
  condition,
  ...rest
}) => {
  if (condition) {
    return <Link {...rest} />;
  }

  return <div className={rest.className}>{rest.children}</div>;
};
