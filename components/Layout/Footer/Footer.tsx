import React from "react";
import dynamic from "next/dynamic";
import Section from "@components/Section/Section";
import Typo from "@components/Typography/Typography";
import { Link } from "@components/Link";
import Social from "./SocialIcons";
import { PageResult } from "pages/[[...slug]]";
import Logos from "./Logos";

const Marque = dynamic(() => import("./Marque"));

interface FooterProps extends PageResult {}

const Footer: React.FC<FooterProps> = (props) => {
  const { footer } = props;

  return (
    <footer data-testid="footer" className="flex flex-col items-center ">
      <Marque />
      <Section width="full" className=" px-5 ">
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 my-12">
          <Logos items={footer.logos} />

          <div>
            <Typo variant="h1" as="p">
              Follow Us
            </Typo>

            <Social items={footer?.socialMedia || []} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-6 items-center justify-center mt-16 mb-12">
          <span>© 2021</span>
          {footer?.imprintPage?.href && footer?.imprintPage?.label && (
            <Link href={footer?.imprintPage?.href}>
              {footer?.imprintPage?.label}
            </Link>
          )}
          <Link href="/datenschutz">Datenschutz</Link>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
