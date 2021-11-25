import { Link } from "@components/Link";
import React from "react";

type ButtonProps = {
  onClick?: () => void;
  internalLink?: string | null;
  externalLink?: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick = () => {}, internalLink } = props;

  if (internalLink) {
    return (
      <Link
        className="inline-block px-12 py-2 text-base rounded-full bg-yellow whitespace-nowrap"
        href={internalLink}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className="px-12 py-2 text-base rounded-full bg-yellow whitespace-nowrap"
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
