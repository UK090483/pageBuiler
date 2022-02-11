import { Avatar, AvatarList } from "@components/organisms/Avaters/Avatar";
import { Carousel } from "@components/Blocks/ListingBlock/Listings/Carousel";
import { Section } from "@components/Section/Section";
import { NavOverview } from "@services/NavigationService/NavOverview";
import { NavItem as NavItemType } from "@services/NavigationService/types";
import React from "react";
import { Logo } from "../Logo";

import FooterContact from "./FooterContact";
import Quote from "./Quotes/Quote";

interface FooterProps {
  navItems: NavItemType[];
}

const Footer: React.FC<FooterProps> = ({ navItems }) => {
  return (
    <footer data-testid="footer" className="flex flex-col items-center ">
      <Section width="l" className="pt-12">
        <NavOverview
          items={navItems}
          className="w-full py-24 border-t-2 border-b-2"
        />
      </Section>
    </footer>
  );
};

export default Footer;
