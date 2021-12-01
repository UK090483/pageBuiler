/* eslint-disable @next/next/no-img-element */

import { Section } from "@components/Section";
import useBreakpoints from "@hooks/useBreakingPoints";
import { HeroBlockProps } from "@services/pageBuilderService/Blocks/HeroBlock";
import BlockContent, { Serializers } from "@sanity/block-content-to-react";

import React from "react";

interface HeroProps extends HeroBlockProps {}

const fontSizes: { [key: string]: number } = {
  sm: 300,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

const InlineImage = () => {
  return (
    <span className="relative inline-block">
      <img
        style={{ height: "0.705em" }}
        height="0.8em"
        src="https://picsum.photos/id/222/600/400"
        alt="image"
      />
    </span>
  );
};

const serializer: Serializers = {
  marks: {
    image: InlineImage,
  },
};

const Hero: React.FC<HeroProps> = (props) => {
  const { text, title } = props;
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
        width="responsive"
        className=" h-screen  min-h-[600px]  flex flex-col justify-center  pt-28"
      >
        {rendert && (
          <>
            {title && <div className="font-bold ">{title}</div>}
            <h1
              className="font-bold whitespace-pre-wrap "
              style={{ fontSize, lineHeight: "1.1em", marginLeft: "-0.05em" }}
            >
              {text && <BlockContent blocks={text} serializers={serializer} />}
            </h1>
          </>
        )}
      </Section>
    </>
  );
};

export default Hero;
