import React from "react";
import Hero from "./Hero";
import { HeroBlogResult } from "./HeroBlockQuery";

export interface HeroBlockProps extends HeroBlogResult {}

const HeroBlock: React.FC<HeroBlockProps> = (props) => {
  console.log(props);

  return <Hero {...props} />;
};

export default HeroBlock;