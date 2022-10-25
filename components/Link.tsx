import React from "react";
import NextLink from "next/link";

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  className?: string;
  internal?: string | null;
  onClick?: () => void;
  locale?: string;
  scroll?: boolean;
  role?: string;
  ["data-testid"]?: string;
}

export const Link: React.FC<LinkProps> = (props) => {
  const {
    href,
    children,
    className,
    internal,
    locale,
    onClick,
    scroll,
    role,
    ...rest
  } = props;

  if (!internal) {
    return (
      <a
        {...rest}
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
    <NextLink href={internal} passHref locale={locale} scroll={scroll}>
      <a {...rest} onClick={onClick} role={role} className={className}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;

export const ConditionalLink: React.FC<LinkProps & { condition: boolean }> = ({
  condition,
  ...rest
}) => {
  if (condition) {
    return <Link {...rest} />;
  }

  return <div className={rest.className}>{rest.children}</div>;
};
