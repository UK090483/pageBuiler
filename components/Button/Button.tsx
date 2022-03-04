import { Link } from "@components/Link";
import React from "react";

type ButtonProps = {
  onClick?: () => void;
  href?: string | null;
  external?: boolean;
  tabIndex?: -1 | 0;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick = () => {}, href, external, tabIndex = 0 } = props;

  if (href) {
    return (
      <Link
        className="inline-block px-12 py-2 rounded-full text-base border-2 border-black  whitespace-nowrap "
        href={href}
        external={external}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      tabIndex={tabIndex}
      onClick={onClick}
      className="px-12 py-2 text-base border-2 border-black whitespace-nowrap rounded-full hover:text-white hover:bg-black"
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
