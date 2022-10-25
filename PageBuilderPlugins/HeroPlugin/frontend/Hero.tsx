/* eslint-disable @next/next/no-img-element */

import SanityImage from "@lib/SanityImage";
import useSanityImage from "@lib/SanityImage/useSanityImage";
import BlockContent, { Serializers } from "@sanity/block-content-to-react";
import RichText from "PageBuilderPlugins/RichText/frontend/RichText";
import React from "react";
import { HeroBlogResult } from "./HeroBlockQuery";

interface HeroProps extends HeroBlogResult {}

const Hero: React.FC<HeroProps> = (props) => {
  const { text, image } = props;

  return (
    <div
      data-testid="heroBlock"
      className=" flex flex-col h-hero-mobile  sm:h-hero pt-11 lg:pt-16 relative justify-center items-center "
    >
      <SanityImage image={image} objectFit="cover" />
      <div className=" px-sides  flex flex-col items-center text-center justify-center prose prose-base lg:prose-2xl mx-auto  absolute inset-0 prose-invert">
        {props.content && <RichText content={props.content} />}
      </div>
    </div>
  );
};

export default Hero;
