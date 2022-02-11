import { Link } from "@components/Link";
import React from "react";

type ButtonProps = {
  onClick?: () => void;
  internalLink?: string | null;
  externalLink?: string;
  href?: string | null;
  external?: boolean;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick = () => {}, internalLink, href, external } = props;

  if (href) {
    return (
      <Link
        className="inline-block px-12 py-2 rounded-full text-base border-2 border-black hover:text-white whitespace-nowrap hover:bg-black"
        href={href}
        external={external}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className="px-12 py-2 text-base border-2 border-black whitespace-nowrap rounded-full"
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
