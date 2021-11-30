import { Link } from "@components/Link";
import Underline from "@components/Underline";
import React from "react";
import { NavItem } from "../types";
import { NavigationModulItemBase } from "./NavigationItemBase";

type NavigationLinkProps = NavItem["link"] & { onClick?: () => void };

export const NavigationModulLink: React.FC<NavigationLinkProps> = (props) => {
  const { children, external, onClick, href } = props;

  return (
    <Link
      onClick={onClick}
      className="flex items-center leading-none text-center "
      href={href || "/"}
      external={external}
    >
      {/* <Underline on="hover"> */}
      <NavigationModulItemBase>{children}</NavigationModulItemBase>
      {/* </Underline> */}
    </Link>
  );
};
