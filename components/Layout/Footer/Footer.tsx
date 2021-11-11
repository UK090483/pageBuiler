import React from "react";
import { Logo } from "../Logo";
import NavItem, { NavItemProps } from "@components/Layout/NavItem";

interface FooterProps {
  navItems: NavItemProps[];
}

const Footer: React.FC<FooterProps> = ({ navItems }) => {
  return (
    <footer
      data-testid="footer"
      className="flex flex-col items-center px-8 pt-20 bg-grey pb-36"
    >
      <Logo />

      <div
        style={{ maxWidth: 1200 }}
        className="flex flex-col items-center justify-center w-full pb-12 border-b border-black border-opacity-20 "
      >
        <div className="max-w-xl py-8 text-center">
          {navItems &&
            navItems.map((navItem, index) => (
              <NavItem
                size="s"
                key={navItem.label}
                {...navItem}
                divider={index !== navItems.length - 1}
              />
            ))}
        </div>

        <div>
          <NavItem size="s" href="/impressum" label="Impressum" />
          <NavItem
            size="s"
            href="/datenschutz"
            label="Datenschutz"
            divider={false}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
