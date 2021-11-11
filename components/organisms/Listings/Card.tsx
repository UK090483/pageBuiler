import React from "react";

import Typo from "@components/Typography";
import { Image } from "@components/Image";
import { Link } from "@components/Link";

interface CardProps {}

export const Card: React.FC<CardProps> = ({ children }) => {
  return (
    <Link className="pb-16" href={"/test"}>
      <div className="relative w-full aspect-w-1 aspect-h-1 ">
        <Image />
      </div>
      <Typo className="pt-4 pb-2" variant="body1">
        Kinderrechte
      </Typo>
      <Typo className="pb-3 " variant="h3">
        UNICEF und H&M – Wichtige Partner*innen, gestern, heute und morgen
      </Typo>
      <Typo>
        Die Partnerschaft zwischen UNICEF und H&M gibt es schon länger.
      </Typo>
    </Link>
  );
};
