/* eslint-disable @next/next/no-img-element */

import { HeroBlockProps } from "@components/Blocks/HeroBlock/HeroBlock";
import BlockContent, { Serializers } from "@sanity/block-content-to-react";
import { Textfit } from "react-textfit";

import React from "react";
import useSanityImage from "@lib/SanityImage/useSanityImage";

interface HeroProps extends HeroBlockProps {}

const maxFontsize = 380;

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
  //@ts-ignore
  container: ({ children }) => {
    return <>{children}</>;
  },
};

const Hero: React.FC<HeroProps> = (props) => {
  const { text, title } = props;
  const [ready, setReady] = React.useState(false);

  return (
    <>
      {text && (
        <Textfit
          max={200}
          className={`w-full hero  px-5 container mx-auto font-header  flex items-center leading-[1.2em] transition-opacity duration-1000 overflow-hidden  ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          mode="multi"
          onReady={() => {
            !ready && setReady(true);
          }}
        >
          <BlockContent
            renderContainerOnSingleChild={false}
            blocks={text}
            serializers={serializer}
          />
        </Textfit>
      )}
    </>
  );
};

export default Hero;
