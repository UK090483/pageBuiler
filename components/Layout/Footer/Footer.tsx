import { Carousel } from "@components/organisms/Listings/Carousel";
import React from "react";
import { Logo } from "../Logo";
import NavItem, { NavItemProps } from "../Navigation/NavItem/NavItem";
import FooterContact from "./FooterContact";
import Quote from "./Quotes/Quote";

interface FooterProps {
  navItems: NavItemProps[];
}

const Footer: React.FC<FooterProps> = ({ navItems }) => {
  return (
    <footer
      data-testid="footer"
      className="flex flex-col items-center bg-yellow "
    >
      <Carousel />
      <Quote />
      <FooterContact />
      <div
        style={{ maxWidth: 1200 }}
        className="flex flex-col items-center justify-center w-full pb-12 border-b border-black border-opacity-20 "
      ></div>

      <div className="flex items-center justify-between w-full max-w-6xl px-8 ">
        <NavItem size="s" href="/" label="Kreisel e.V." />
        <div className="flex ">
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
