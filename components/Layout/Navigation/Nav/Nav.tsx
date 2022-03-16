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
import Image from "next/image";
import { useAppContext } from "@components/AppContext";
import SanityImage from "@lib/SanityImage";

interface NavProps {
  items: NavItem[];
  slugs?: LangSwitcherResult["langSwitchData"];
}

const Nav: React.FC<NavProps> = (props) => {
  const { items, slugs } = props;

  const [open, setOpen] = React.useState(false);

  const { data } = useAppContext();

  const mainLogo = data?.footer?.logos && data.footer.logos[0];

  return (
    <>
      <nav>
        <div className="flex items-center justify-between w-full  border-b-2 border-black ">
          <Link aria-label="Home" href="/">
            <Logo />
          </Link>

          <HeaderNavigation
            items={items}
            className="items-center justify-center hidden  menu:flex "
          />

          <div className="flex gap-4   flex-shrink-0 items-center">
            {mainLogo && (
              <div className="relative hidden sm:block  sm:w-[200px] h-11">
                <SanityImage
                  image={mainLogo.image}
                  layout={"fill"}
                  objectFit="contain"
                />
              </div>
            )}
            <LangSwitch className="hidden menu:flex" slugs={slugs} />
          </div>

          <button
            data-testid="menu-overlay-toggle "
            onClick={() => setOpen((s) => !s)}
            aria-label={"Open the menu"}
            aria-expanded={open}
            className="menu:hidden mr-2"
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
