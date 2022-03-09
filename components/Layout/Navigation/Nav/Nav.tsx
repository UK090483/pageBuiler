/* eslint-disable @next/next/no-img-element */
import Svg from "@components/Svg";
import React from "react";
import { Link } from "@components/Link";

import { Logo } from "@components/Layout/Logo";

import {
  LangSwitch,
  LangSwitchProps,
} from "@lib/LangSwitcherService/LangSwitch";
import { LangSwitcherResult } from "@lib/LangSwitcherService/LangSwitcherQuery";

import { HeaderNavigation } from "@lib/Navigation";
import NavigationMobile from "@lib/Navigation/NavigationMobile";
import { NavItem } from "@lib/Navigation/types";
import Burger from "./Burger";

interface NavProps {
  items: NavItem[];
  slugs?: LangSwitcherResult["langSwitchData"];
}

const Nav: React.FC<NavProps> = (props) => {
  const { items, slugs } = props;

  const [open, setOpen] = React.useState(false);

  return (
    <>
      <nav>
        <div className="flex items-center justify-between w-full  border-b-2 border-black ">
          <Link href="/">
            <Logo />
          </Link>

          <HeaderNavigation
            items={items}
            className="items-center justify-center hidden lg:flex  "
          />

          <LangSwitch className="hidden lg:flex" slugs={slugs} />

          <button
            data-testid="menu-overlay-toggle "
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden mr-2"
          >
            <Svg className="w-[30px] h-[30px]" icon="hamburger" />
          </button>
        </div>
      </nav>
      <NavigationMobile
        items={items}
        open={open}
        closeMenu={() => {
          setOpen(false);
        }}
      >
        <LangSwitch
          slugs={slugs}
          onClick={() => {
            setOpen(false);
          }}
        />
      </NavigationMobile>
    </>
  );
};

export default Nav;
