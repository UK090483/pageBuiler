/* eslint-disable @next/next/no-img-element */

import SanityImage from "@components/SanityImage";
import { usePageBuilderContext } from "PageBuilder/lib/PageBuilderContext";
import RichText from "PageBuilder/RichText/frontend/RichText";
import React from "react";
import { heroResult } from "../hero.query";

const Hero: React.FC<heroResult> = (props) => {
  const { image, content } = props;

  const { data } = usePageBuilderContext();

  const _image = image && image.url ? image : data?.featuredImage;

  const _content = content ? (
    <RichText content={content} />
  ) : (
    <h1>{data?.title}</h1>
  );

  return (
    <div
      data-testid="heroBlock"
      className=" flex flex-col h-hero-mobile  sm:h-hero pt-11 lg:pt-16 relative justify-center items-center "
    >
      {_image && <SanityImage fill className=" object-cover " src={_image} />}
      <div className="typo typo-invert max-w-3xl px-sides  flex flex-col items-center text-center justify-center  mx-auto  absolute inset-0 ">
        {_content}
      </div>
    </div>
  );
};

export default Hero;
