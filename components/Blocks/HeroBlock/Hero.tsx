/* eslint-disable @next/next/no-img-element */

import SanityImage from "@lib/SanityImage";
import useSanityImage from "@lib/SanityImage/useSanityImage";
import BlockContent, { Serializers } from "@sanity/block-content-to-react";
import React from "react";
import { Textfit } from "react-textfit";
import { HeroBlogResult } from "./HeroBlockQuery";

interface HeroProps extends HeroBlogResult {}

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
          alt=""
        />
      )}
    </span>
  );
};
//@ts-ignore
const BlockRenderer = (props) => {
  return React.createElement("span", { className: " block " }, props.children);
};

const serializer: Serializers = {
  types: { block: BlockRenderer },
  marks: {
    image: InlineImage,
    brake: ({ children }) => {
      return <>&shy;{children}</>;
    },
    unbreakable: ({ children }) => {
      return <span className="whitespace-nowrap">{children}</span>;
    },
  },
  container: (props: any) => {
    return <h1>{props?.children}</h1>;
  },
};

const Hero: React.FC<HeroProps> = (props) => {
  const { text, logo } = props;
  const [ready, setReady] = React.useState(false);
  const withLogo = logo && logo?.image?.url;

  return (
    <div className="flex flex-col lg:flex-row ">
      {text && (
        <Textfit
          max={200}
          className={`w-full  h-hero-mobile  sm:h-hero   px-5 container mx-auto ${
            withLogo ? "" : ""
          } font-header  flex items-center leading-[1.2em] transition-opacity duration-1000 overflow-hidden  ${
            ready ? "opacity-100" : "opacity-0"
          }`}
          mode="multi"
          onReady={() => {
            !ready && setReady(true);
          }}
        >
          <BlockContent
            renderContainerOnSingleChild={true}
            blocks={text}
            serializers={serializer}
          />
        </Textfit>
      )}
      {withLogo && (
        <div className="w-full lg:w-fit flex items-center flex-col justify-center mr-12 p-5 ">
          {logo?.text && (
            <div className=" text-sm pb-4  w-[400px]">{logo.text}</div>
          )}

          <SanityImage image={logo.image} width={400} />
        </div>
      )}
    </div>
  );
};

export default Hero;
