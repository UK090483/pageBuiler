/* eslint-disable @next/next/no-img-element */
import Svg from "@components/Svg";
import React from "react";

import { Link } from "@components/Link";

import useMenu from "@services/StoreService/hooks/useMenu";
import MegaNav, { NavItemMegaNavProps } from "../MegaNav/MegaNav";
import MegaNavMobile from "../MegaNav/MegaNavMobile";
import { Logo } from "@components/Layout/Logo";
import NavItem, { NavItemProps } from "../NavItem/NavItem";
import { Dropdown } from "../Dropdown/Dropdown";

interface NavProps {
  items: (Omit<NavItemProps, "divider"> | NavItemMegaNavProps)[];
}

const Nav: React.FC<NavProps> = ({ items }) => {
  const { toggleMenu } = useMenu();

  const handleNavClick = () => {
    toggleMenu();
  };
  return (
    <>
      <nav>
        <div className="relative flex items-center justify-between w-full p-3 pl-24 text-xl font-bold">
          <Link href="/">
            <Logo />
          </Link>
          <div className="items-center justify-center hidden w-full lg:flex">
            {items &&
              items.map((navItem, index) => {
                if (navItem._type === "navigationItem") {
                  return (
                    <NavItem
                      key={navItem.label}
                      {...navItem}
                      divider={index !== items.length - 1}
                    />
                  );
                }
                if (navItem._type === "navigationMegaMenu") {
                  //@ts-ignore
                  return <MegaNav key={navItem.label} {...navItem} />;
                }
              })}
          </div>
          <button
            data-testid="menu-overlay-toggle"
            onClick={handleNavClick}
            className="lg:hidden"
          >
            <Svg className="w-[30px]" icon="hamburger" />
          </button>
        </div>
      </nav>
      <Dropdown>
        <div
          data-testid="menu-overlay"
          className="flex flex-col items-center justify-center h-screen bg-blue-200"
        >
          {items &&
            items.map((navItem, index) => {
              if (navItem._type === "navigationItem") {
                return (
                  <NavItem
                    key={navItem.label}
                    {...navItem}
                    divider={index !== items.length - 1}
                  />
                );
              }
              if (navItem._type === "navigationMegaMenu") {
                //@ts-ignore
                return <MegaNavMobile key={navItem.label} {...navItem} />;
              }
            })}
        </div>
      </Dropdown>
    </>
  );
};

export default Nav;
