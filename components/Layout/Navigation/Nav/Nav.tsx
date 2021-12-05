/* eslint-disable @next/next/no-img-element */
import Svg from "@components/Svg";
import React from "react";

import { Link } from "@components/Link";

import useMenu from "@services/StoreService/hooks/useMenu";
import MegaNav, { NavItemMegaNavProps } from "../MegaNav/MegaNav";
import MegaNavMobile from "../MegaNav/MegaNavMobile";
import { Logo } from "@components/Layout/Logo";
import NavItem, { NavItemProps } from "../NavItem/NavItem";

import { NavigationModul } from "@services/NavigationService/NavigationModul";
import NavigationMobile from "@services/NavigationService/NavigationMobile";
import { LangSwitch } from "../LangSwitch/LangSwitch";

interface NavProps {
  items: (Omit<NavItemProps, "divider"> | NavItemMegaNavProps)[];

  slugs: { [k: string]: any };
}

const Nav: React.FC<NavProps> = (props) => {
  const { items, slugs } = props;
  const { toggleMenu, menuOpen, closeMenu } = useMenu();

  const handleNavClick = () => {
    toggleMenu();
  };
  return (
    <>
      <nav>
        <div className="flex items-center justify-between w-full px-2 py-2 border-b-2 border-black ">
          <Link href="/">
            <Logo />
          </Link>

          <div className="items-center justify-center hidden w-full lg:flex">
            <NavigationModul items={items} />
          </div>

          <LangSwitch className="hidden lg:flex" slugs={slugs} />

          <button
            data-testid="menu-overlay-toggle"
            onClick={handleNavClick}
            className="lg:hidden"
          >
            <Svg className="w-[30px]" icon="hamburger" />
          </button>
        </div>
      </nav>
      <NavigationMobile items={items} open={menuOpen} closeMenu={closeMenu} />
    </>
  );
};

export default Nav;
