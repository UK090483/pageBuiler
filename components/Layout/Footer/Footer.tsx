import React from "react";
import { Section } from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import { NavItem as NavItemType } from "@services/NavigationService/types";
import SanityImage from "lib/SanityImage";
import Marque from "./Marque";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { Link } from "@components/Link";

interface FooterProps {
  navItems: NavItemType[];
}

const Footer: React.FC<FooterProps> = ({ navItems }) => {
  return (
    <footer data-testid="footer" className="flex flex-col items-center ">
      <Marque />
      <Section width="l">
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 my-12">
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
            <div className="relative  min-h-[200px]">
              <SanityImage objectFit="contain" />
            </div>
            <div className="relative  min-h-[200px]">
              <SanityImage objectFit="contain" />
            </div>
          </div>
          <div>
            <Typo variant="h1" as="p">
              Follow Us
            </Typo>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12  place-content-center">
              <BsFacebook size={82} className=" mx-auto " />
              <BsInstagram size={82} className=" mx-auto " />
              <BsTwitter size={82} className=" mx-auto " />
              <BsYoutube size={82} className=" mx-auto " />
            </div>
          </div>
        </div>
        <div className="flex gap-6 items-center justify-center mt-16 mb-12">
          <span>© 2021</span>
          <Link href="/">Impressum</Link>
          <Link href="/">Datenschutz</Link>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
