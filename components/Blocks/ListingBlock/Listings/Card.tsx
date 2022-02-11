import React from "react";

import Typo from "@components/Typography";
import { Image } from "@components/Image";
import { Link } from "@components/Link";
import { ListItemResult } from "@components/Blocks/ListingBlock/ListingsBlock";
import { DateString } from "@services/pageBuilderService/queries/snippets";

interface CardProps extends ListItemResult {
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  slug,
  title,
  description,
  updatedAt,
  className,
}) => {
  const date = useDateString(updatedAt);
  return (
    <li>
      <Link
        className={` block overflow-hidden bg-white mx-auto w-80 shadow-2xl ${className}`}
        href={slug || "/"}
      >
        <div className="relative w-full aspect-w-16 aspect-h-10 ">
          <Image src="id/343/500/500" alt="bla" />
        </div>
        <div className="p-3 ">
          <Typo className="pb-2" variant="body">
            {date}
          </Typo>
          <Typo className="pb-3 " bold={false} variant="h4">
            {title}
          </Typo>
          <Typo className="w-full h-20 overflow-hidden whitespace-pre-line ">
            {description}
          </Typo>
        </div>
      </Link>
    </li>
  );
};

const useDateString = (date?: DateString | null) => {
  let result;
  if (date) {
    try {
      result = new Date(date).toLocaleDateString();
    } catch (error) {
      console.error(`somthing wrong with date conversion. input was ${date}`);
    }
  }

  return result;
};
