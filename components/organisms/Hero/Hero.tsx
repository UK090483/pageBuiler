import { Image } from "@components/Image";
import { Section } from "@components/Section";
import Typo from "@components/Typography";
import Underline from "@components/Underline";
import useBreakpoints from "@hooks/useBreakingPoints";

import React from "react";

interface HeroProps {
  variant?: "overlapping" | "sideBySide";
}

const fontSizes: { [key: string]: number } = {
  sm: 300,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const Hero: React.FC<HeroProps> = ({ variant = "overlapping" }) => {
  const b = useBreakpoints();
  const [rendert, setRendered] = React.useState(false);

  React.useEffect(() => {
    setRendered(true);
  }, []);

  const fontSize = fontSizes[b] * 0.12;
  const fontSizeSmall = fontSizes[b] * 0.03;

  return (
    <>
      <Section
        width="full"
        className="relative flex items-center justify-center h-screen  min-h-[600px] px-4"
      >
        {rendert && (
          <div
            className="container pt-12 mx-auto overflow-hidden font-bold"
            style={{ fontSize, lineHeight: "1em" }}
          >
            <div className="flex items-center pb-8 ">
              <div className="pb-8 ">DISCOVER</div>{" "}
              <div
                style={{ fontSize: fontSizeSmall, lineHeight: "1.3em" }}
                className="pl-10 font-medium "
              >
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
              </div>
            </div>
            <div className="flex items-center pb-8 ">
              <div
                style={{ height: "1em", width: "2em" }}
                className="relative inline-block mr-12"
              >
                <Image src="id/40/200/200" />
              </div>
              <div className="inline-block ">NEW</div>
            </div>

            <div>PERSPECTIVES.</div>
          </div>
        )}
      </Section>
    </>
  );
};

export default Hero;
