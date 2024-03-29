import { Logo } from "@components/Layout/Logo";
import Link from "@components/Link";
import Svg from "@components/Svg";
import { useScrollThreshold } from "@hooks/useScrollThreshold";
import { LangSwitch } from "PageBuilder/Navigation/Frontend/LangSwitch/LangSwitch";
import { HeaderNavigation } from "PageBuilder/Navigation/Frontend/Navigation/HeaderNavigation";
import NavigationMobile from "PageBuilder/Navigation/Frontend/Navigation/NavigationMobile";
import { usePageBuilderContext } from "PageBuilder/lib/PageBuilderContext";
import React from "react";
import clsx from "clsx";

const Nav: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const { data } = usePageBuilderContext();
  const navItems = data?.menu.mainNav;
  const langSwitchData = data?.menu.langSwitcher;
  const scrolled = useScrollThreshold(300);

  return (
    <>
      <nav
        className={clsx(
          "flex justify-between w-full text-white transition-colors ",
          {
            "bg-transparent ": !scrolled,
          },
          {
            "bg-white text-black": scrolled,
          }
        )}
      >
        <Link aria-label="Home" internal="/">
          <Logo />
        </Link>

        <HeaderNavigation
          //@ts-ignore
          items={navItems || []}
          className="items-center justify-center hidden  menu:flex "
        />

        <div className="flex gap-4   flex-shrink-0 items-center">
          <LangSwitch
            className="hidden menu:flex"
            LangSwitcherResult={langSwitchData}
          />
        </div>

        <button
          data-testid="menu-overlay-toggle "
          onClick={() => setOpen((s) => !s)}
          aria-label={"Open the menu"}
          aria-expanded={open}
          className="menu:hidden mr-2"
        >
          <Svg className="w-[30px] h-[30px] fill-current" icon="hamburger" />
        </button>

        {/* {mainLogo && (
          <div
            className={`
            transition-transform
            ${
              !scrolled ? "" : "translate-x-full"
            } absolute top-14 -translate-y-0.5 right-0 border-t-0 border-r-0 bg-white  border-2 border-black p-2`}
          >
            <div className="relative w-[200px] h-11 lg:w-[360px] lg:h-16">
              <SanityImage
                image={mainLogo.image}
                layout={"fill"}
                objectFit="contain"
              />
            </div>
          </div>
        )} */}
      </nav>
      <NavigationMobile
        //@ts-ignore
        items={navItems}
        open={open}
        closeMenu={() => {
          setOpen(false);
        }}
      >
        <LangSwitch
          LangSwitcherResult={langSwitchData}
          onClick={() => {
            setOpen(false);
          }}
        />
      </NavigationMobile>
    </>
  );
};

export default Nav;
