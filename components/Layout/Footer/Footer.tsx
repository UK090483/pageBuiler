import React from "react";
import Section from "@components/Section/Section";
import Typo from "@components/Typography/Typography";

const Footer: React.FC = () => {
  const year = React.useMemo(() => new Date().getFullYear(), []);

  return (
    <footer data-testid="footer" className="flex flex-col items-center ">
      <Section width="full" className=" px-5 ">
        <div className="pt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 my-12">
          <div>
            <Typo variant="h1" as="p">
              Follow Us
            </Typo>
          </div>
        </div>
        <div className="flex flex-col md:flex-row  gap-6 items-center justify-center mt-16 mb-12">
          <span>© {year}</span>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
