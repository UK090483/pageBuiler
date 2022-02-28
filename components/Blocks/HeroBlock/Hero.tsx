/* eslint-disable @next/next/no-img-element */

import { Section } from "@components/Section/Section";
import useBreakpoints from "@hooks/useBreakingPoints";
import { HeroBlockProps } from "@components/Blocks/HeroBlock/HeroBlock";
import BlockContent, { Serializers } from "@sanity/block-content-to-react";

import React from "react";
import useSanityImage from "lib/SanityImage/useSanityImage";

interface HeroProps extends HeroBlockProps {}

const maxFontsize = 180;

const fontSizes: { [key: string]: number } = {
  _: 600,
  sm: 1000,
  md: 1200,
  lg: 1500,
  xl: 1880,
  "2xl": 2036,
};

//@ts-ignore
const InlineImage = (props) => {
  //@ts-ignore
  const { src } = useSanityImage(props.mark);

  return (
    <span style={{ height: "0.705em" }} className="relative inline-block ">
      {src && (
        <img
          style={{ height: "0.705em" }}
          height="0.8em"
          src={src + "&w=150"}
          alt="image"
        />
      )}
    </span>
  );
};

const serializer: Serializers = {
  marks: {
    image: InlineImage,
    brake: ({ children }) => {
      return <>&shy;{children}</>;
    },
  },
};

const Hero: React.FC<HeroProps> = (props) => {
  const { text, title } = props;
  const [b, size] = useBreakpoints();
  const [rendered, setRendered] = React.useState(true);

  //@ts-ignore
  const letterCount = getLongestWord(text);

  React.useEffect(() => {
    setRendered(true);
  }, []);

  let fontSize = fontSizes[b] * (1.1 / letterCount);
  fontSize = Math.min(fontSize, maxFontsize);

  return (
    <>
      <Section
        style={{ hyphens: "manual" }}
        width="responsive"
        className="antialiased w-full h-screen min-h-[600px] flex flex-col justify-center animate-fadeIn overflow-hidden font-bold font-header "
      >
        <div
          className="font-bold whitespace-pre-wrap break-words"
          style={{ fontSize, lineHeight: "1.1em", marginLeft: "-0.05em" }}
        >
          {text && <BlockContent blocks={text} serializers={serializer} />}
        </div>
      </Section>
    </>
  );
};

export default Hero;

type getLongestWordProps = { children: { text: string }[] }[];

const getLongestWord = (text: getLongestWordProps) => {
  let res = 0;
  text.forEach((t) => {
    t.children.forEach((c) => {
      c.text.split(" ").forEach((st) => {
        if (st.length > res) {
          res = st.length;
        }
      });
    });
  });
  return res;
};
