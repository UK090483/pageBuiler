import Hero from "@components/organisms/Hero/Hero";
import React from "react";

import { Hero as HeroType } from "types";

export const heroBlockQuery = (locale: string) => `
_type == "hero" => {
  _type,
  _key,
  'title': coalesce(title_${locale}, title),
  'text': coalesce(text_${locale}, text)
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
