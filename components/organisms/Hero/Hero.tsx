import { Image } from "@components/Image";
import { Section } from "@components/Section";
import Typo from "@components/Typography";
import Underline from "@components/Underline";

import React from "react";

interface HeroProps {
  variant?: "overlapping" | "sideBySide";
}
const Hero: React.FC<HeroProps> = ({ variant = "overlapping" }) => {
  return (
    <Section width="full" className="relative h-screen">
      <Image src="1900/800" />

      <div className="absolute inset-0 flex items-center mx-auto text-white  ml-[10%] ">
        <Typo hand variant="h1">
          Grundlagen <br /> Lernförderung <br />
          <Underline color="primary"> & Lerntherapie</Underline>
        </Typo>
      </div>
    </Section>
  );
};

export default Hero;
