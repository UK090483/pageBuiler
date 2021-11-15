/* eslint-disable @next/next/no-img-element */
import Svg from "@components/Svg";
import React from "react";
import NavItem, { NavItemProps } from "@components/Layout/NavItem";
import { Link } from "@components/Link";
import { Logo } from "../Logo";
import { Dropdown } from "../Dropdown";
import useMenu from "@services/StoreService/hooks/useMenu";

interface NavProps {
  items: Omit<NavItemProps, "divider">[];
}

const Nav: React.FC<NavProps> = ({ items }) => {
  const { toggleMenu } = useMenu();

  const handleNavClick = () => {
    toggleMenu();
  };
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-20 bg-grey-light">
        <div className="flex items-center justify-between px-4 text-white h-14 bg-red">
          <div>kostenlose Beratung: 040 38 61 23 71</div>
        </div>
        <div className="flex items-center justify-between w-full p-3 text-xl font-bold">
          <Link href="/">
            <Logo />
          </Link>
          {items &&
            items.map((navItem, index) => (
              <NavItem
                key={navItem.label}
                {...navItem}
                divider={index !== items.length - 1}
              />
            ))}
          <button data-testid="menu-overlay-toggle" onClick={handleNavClick}>
            <Svg className="w-[30px]" icon="hamburger" />
          </button>
        </div>
      </nav>
      <Dropdown>
        <div
          data-testid="menu-overlay"
          className="flex flex-col items-center justify-center "
        >
          {items &&
            items.map((navItem) => (
              <NavItem
                className="mb-8"
                size="l"
                key={navItem.label}
                {...navItem}
                divider={false}
              />
            ))}
        </div>
      </Dropdown>
    </>
  );
};

export default Nav;
