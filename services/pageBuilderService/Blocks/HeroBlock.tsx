import Hero from "@components/organisms/Hero/Hero";
import React from "react";

import { AppLocations, Hero as HeroType } from "types";
import { imageMeta, ImageMetaResult } from "../queries/snippets";

export const heroBlockQuery = `
_type == "hero" => {
  ...
}
`;

export interface HeroBlogResult extends HeroType {}

export interface HeroBlockProps extends HeroBlogResult {
  lang: AppLocations;
}

const HeroBlock: React.FC<HeroBlockProps> = (props) => {
  return <Hero {...props} />;
};

export default HeroBlock;
