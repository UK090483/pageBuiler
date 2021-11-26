import { Link } from "@components/Link";
import Underline from "@components/Underline";
import React from "react";
import { NavigationModulItemBase } from "./NavigationItemBase";

export const NavigationModulLink: React.FC<{
  internalLink?: string;
  externalLink?: string;
  onClick?: () => void;
}> = ({ children, internalLink, externalLink, onClick }) => {
  return (
    <Link
      onClick={onClick}
      className="flex items-center leading-none text-center "
      href={internalLink || externalLink || "/"}
    >
      <Underline>
        <NavigationModulItemBase>{children}</NavigationModulItemBase>
      </Underline>
    </Link>
  );
};
