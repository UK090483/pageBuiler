/* eslint-disable @next/next/no-img-element */
import Svg from "@components/Svg";
import React from "react";
import { Link } from "@components/Link";
import useMenu from "@services/StoreService/hooks/useMenu";
import { Logo } from "@components/Layout/Logo";
import type { NavItem } from "@services/NavigationService/types";
import { NavigationModul } from "@services/NavigationService/NavigationModul";
import NavigationMobile from "@services/NavigationService/NavigationMobile";
import {
  LangSwitch,
  LangSwitchProps,
} from "@services/LangSwitcherService/LangSwitch";
import { LangSwitcherResult } from "@services/LangSwitcherService/LangSwitcherQuery";
import UserWidget from "@services/AuthService/AuthWidged";
import { HeaderNavigation } from "lib/Navigation";

interface NavProps {
  items: NavItem[];
  slugs?: LangSwitcherResult["langSwitchData"];
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
        <div className="flex items-center justify-between w-full  border-b-2 border-black ">
          <Link href="/">
            <Logo />
          </Link>

          <div className="items-center justify-center hidden w-full lg:flex">
            <HeaderNavigation items={items} />
          </div>

          <LangSwitch className="hidden lg:flex" slugs={slugs} />

          <button
            data-testid="menu-overlay-toggle"
            onClick={handleNavClick}
            className="lg:hidden"
          >
            <Svg className="w-[30px] h-[30px]" icon="hamburger" />
          </button>
        </div>
      </nav>
      <NavigationMobile items={items} open={menuOpen} closeMenu={closeMenu} />
    </>
  );
};

export default Nav;
