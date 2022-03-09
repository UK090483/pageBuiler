import React from "react";
import dynamic from "next/dynamic";
import Section from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import { Link } from "@components/Link";
import Image from "next/image";
import Sozial from "./SozialIcons";
import { NavItem } from "@lib/Navigation/types";
import { PageResult } from "pages/[[...slug]]";

const Marque = dynamic(() => import("./Marque"));

interface FooterProps extends PageResult {}

const Footer: React.FC<FooterProps> = (props) => {
  const { footer } = props;

  return (
    <footer data-testid="footer" className="flex flex-col items-center ">
      {/* <Marque /> */}
      <Section width="full" className=" px-5 ">
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 my-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="relative  min-h-[200px]">
              <div className=" text-sm pb-4 ">
                Dieses Projekt wird gefördert durch Interreg Deutschland-
                Danmark mit Mitteln des Europäischen Fonds für regionale
                Entwicklung. Erfahren Sie mehr über Interreg Deutschland-
                Danmark unter www.interreg5a.eu
              </div>
              <Image
                src={`/images/logo_interreg_logo.png`}
                alt="me"
                width={500}
                height={86}
              />
            </div>
            <div className="relative  min-h-[200px]">
              <div className=" text-sm pb-7 ">Weitere Förderer </div>
              <Image
                src={`/images/kiel_marke_logo.png`}
                alt="me"
                width={301}
                height={108}
              />
            </div>
          </div>
          <div>
            <Typo variant="h1" as="p">
              Follow Us
            </Typo>

            <Sozial />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-6 items-center justify-center mt-16 mb-12">
          <span>© 2021</span>
          {footer.imprintPage?.href && footer.imprintPage.label && (
            <Link href={footer.imprintPage.href}>
              {footer.imprintPage.label}
            </Link>
          )}
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
