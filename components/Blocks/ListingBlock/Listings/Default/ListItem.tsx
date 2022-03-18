import React from "react";

import Typo from "@components/Typography";

import Link from "@components/Link";

import SanityImage from "@lib/SanityImage";
import Button from "@components/Button/Button";
import { ListItemResult } from "../../listingBlockQuery";
import { readMore } from "@constants/translations";

interface ListItemProps extends ListItemResult {
  className?: string;
  position?: "left" | "right";
  locale?: string;
}

const readMoreMap: { [k: string]: string } = {
  de: "Mehr erfahren",
  da: "Læs mere",
  en: "read more",
};

export const ListItem: React.FC<ListItemProps> = (props) => {
  const {
    slug,
    title,
    description,
    className,
    position = "left",
    featuredImage,
    subTitle,
    locale,
  } = props;

  return (
    <li className="list-none">
      <Link
        className={`flex flex-wrap md:flex-nowrap bg-white mx-auto w-full  ${className}`}
        href={`/${slug}` || "/"}
      >
        {featuredImage && (
          <div
            className={`relative w-full  h-80   ${
              position === "left" ? "" : "md:order-2"
            }`}
          >
            <SanityImage image={featuredImage} objectFit="contain" />
          </div>
        )}
        <div className={`px-3 w-full`}>
          {subTitle && (
            <Typo bold space={false} className=" pb-3 " variant="body-l">
              {subTitle.toUpperCase()}
            </Typo>
          )}
          <Typo as={"h2"} variant="h2">
            {title}
          </Typo>
          <Typo className="w-full overflow-hidden whitespace-pre-line mb-4 ">
            {description}
          </Typo>
          <Button tabIndex={-1}>{readMore[locale || "de"]}</Button>
        </div>
      </Link>
    </li>
  );
};
