import React from "react";

import Typo from "@components/Typography";
import { Image } from "@components/Image";
import { Link } from "@components/Link";

interface CardProps {}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <Link
      className="mx-[3%] overflow-hidden bg-white rounded-3xl"
      href={"/test"}
    >
      <div className="relative w-full aspect-w-16 aspect-h-10 ">
        <Image />
      </div>
      <div className="p-8 ">
        <Typo className="pb-2" variant="body1">
          13.07.2021
        </Typo>
        <Typo className="pb-3 " bold={false} variant="h4">
          Hier steht eine tolle Headline. Hier steht eine tolle Headline.
        </Typo>
        <Typo>
          Die Partnerschaft zwischen UNICEF und H&M gibt es schon länger.
        </Typo>
      </div>
    </Link>
  );
};
