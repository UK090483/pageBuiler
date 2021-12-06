import { Link } from "@components/Link";
import React from "react";
import { NavItem } from "../types";
import { NavigationModulItemBase } from "./NavigationItemBase";

type NavigationLinkProps = NavItem["link"] & { onClick?: () => void };

const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
  const { children, external, onClick, href } = props;

  return (
    <li role="none">
      <Link
        role="menuitem"
        onClick={onClick}
        className="flex items-center leading-none text-center "
        href={href || "/"}
        external={external}
      >
        <NavigationModulItemBase>{children}</NavigationModulItemBase>
      </Link>
    </li>
  );
};

export default NavigationLink;
