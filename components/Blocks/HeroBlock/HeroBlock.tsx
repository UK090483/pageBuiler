import Hero from "@components/Blocks/HeroBlock/Hero";
import { imageMeta } from "lib/SanityImage/query";
import React from "react";

import { Hero as HeroType } from "types";

const marksQuery = `
markDefs[]{
  ...,
  _type == "image" => {
    ${imageMeta}
  }
}`;

export const heroBlockQuery = (locale: string) => `
_type == "hero" => {
  _type,
  _key, 
  'text': coalesce(text_${locale}[]{..., ${marksQuery} }, text[]{..., ${marksQuery}})
}
`;

export interface HeroBlogResult extends HeroType {
  _key: string;
}

export interface HeroBlockProps extends HeroBlogResult {}

const HeroBlock: React.FC<HeroBlockProps> = (props) => {
  return <Hero {...props} />;
};

export default HeroBlock;
