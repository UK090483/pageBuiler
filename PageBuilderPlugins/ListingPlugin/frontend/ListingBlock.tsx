import React from "react";

import { ListingPluginResult } from "PageBuilderPlugins/ListingPlugin/types";
import SanityImage from "@components/SanityImage";
import Typo from "@components/Typography/Typography";
import Section from "@components/Section/Section";
import Link from "@components/Link";

export interface ListingBlockProps extends ListingPluginResult {}
const ListingBlock: React.FC<ListingBlockProps> = (props) => {
  const { items } = props;

  return (
    <Section width="l" topSpace="m" bottomSpace="m">
      <div className=" grid grid-cols-1  md:grid-cols-3 gap-8 not-prose ">
        {items?.map((i) => {
          return (
            <Link className="w-full" key={i._id} internal={i.slug || "/"}>
              {i.featuredImage && (
                <div className="w-full rounded-[0.1rem] overflow-hidden  aspect-w-3 aspect-h-2 relative">
                  <SanityImage
                    src={i.featuredImage}
                    fill
                    className=" object-cover "
                    sizes="200px"
                  />
                </div>
              )}
              <Typo className=" mt-3 text-xl font-bold " variant="h2">
                {i.title}
              </Typo>
              <Typo>{i.description}</Typo>
            </Link>
          );
        })}
      </div>
    </Section>
  );
};
export default ListingBlock;
