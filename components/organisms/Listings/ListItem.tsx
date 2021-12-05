import React from "react";

import Typo from "@components/Typography";
import { Image } from "@components/Image";
import { Link } from "@components/Link";
import { ListItemResult } from "@services/pageBuilderService/Blocks/ListingsBlock";
import { DateString } from "@services/pageBuilderService/queries/snippets";
import useDateString from "./useDateString";

interface ListItemProps extends ListItemResult {
  className?: string;
  position?: "left" | "right";
}

export const ListItem: React.FC<ListItemProps> = ({
  slug,
  title,
  description,
  updatedAt,
  className,
  position = "left",
  featuredImage,
}) => {
  // const date = useDateString(updatedAt);
  return (
    <li className="list-none ">
      <Link
        className={` grid grid-cols-3 bg-white mx-auto w-full  ${className}`}
        href={`/${slug}` || "/"}
      >
        {featuredImage && position === "left" && (
          <div className="relative w-full aspect-w-16 aspect-h-10 ">
            <Image image={featuredImage} alt="bla" />
          </div>
        )}
        <div className={`px-3 ${featuredImage ? "col-span-2" : "col-span-3"}`}>
          {/* <Typo space={false} className="pb-2 leading-none " variant="body">
            {date}
          </Typo> */}
          <Typo
            as={"h2"}
            space={false}
            className="pb-3 leading-none"
            variant="h2"
          >
            {title}
          </Typo>
          <Typo className="w-full overflow-hidden whitespace-pre-line ">
            {description}
          </Typo>
        </div>
        {featuredImage && position === "right" && (
          <div className="relative w-full aspect-w-16 aspect-h-10 ">
            <Image image={featuredImage} alt="bla" />
          </div>
        )}
      </Link>
    </li>
  );
};
