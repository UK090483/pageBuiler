import React from "react";
import Link from "@components/Link";
import { NavItem } from "../../types";

export type NavigationLinkProps = NavItem["link"] & {
  onClick?: () => void;
  focus?: boolean;
};

const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
  const { children, onClick, href, focus, internal } = props;

  return (
    <Link
      onClick={onClick}
      className={`flex items-center leading-none text-center ${
        focus ? "" : ""
      }`}
      href={href || "/"}
      internal={internal}
    >
      {children}
    </Link>
  );
};

export default NavigationLink;
