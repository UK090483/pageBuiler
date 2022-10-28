/* eslint-disable @next/next/no-img-element */

import SanityImage from "@components/SanityImage";
import BlockContent, { Serializers } from "@sanity/block-content-to-react";
import { usePageBuilderContext } from "PageBuilder/PageBuilderContext";
import RichText from "PageBuilderPlugins/RichText/frontend/RichText";
import React from "react";
import { HeroBlogResult } from "./HeroBlockQuery";

interface HeroProps extends HeroBlogResult {}

const Hero: React.FC<HeroProps> = (props) => {
  const { text, image } = props;

  const { data } = usePageBuilderContext();

  const _image = image || data?.featuredImage;

  const content = props.content ? (
    <RichText content={props.content} />
  ) : (
    <h1>{data?.title}</h1>
  );

  return (
    <div
      data-testid="heroBlock"
      className=" flex flex-col h-hero-mobile  sm:h-hero pt-11 lg:pt-16 relative justify-center items-center "
    >
      <SanityImage fill className=" object-cover " src={_image} />
      <div className=" px-sides  flex flex-col items-center text-center justify-center prose prose-base lg:prose-2xl mx-auto  absolute inset-0 prose-invert">
        {content}
      </div>
    </div>
  );
};

export default Hero;
