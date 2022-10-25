import React from "react";

import { ListingPluginResult } from "PageBuilderPlugins/ListingPlugin/types";
import SanityImage from "@lib/SanityImage";
import Typo from "@components/Typography/Typography";
import Section from "@components/Section/Section";
import Link from "@components/Link";

export interface ListingBlockProps extends ListingPluginResult {}
const ListingBlock: React.FC<ListingBlockProps> = (props) => {
  const { items } = props;

  return (
    <Section>
      <div className=" grid grid-cols-3 gap-8">
        {items?.map((i) => {
          return (
            <Link key={i._id} internal={i.slug || "/"}>
              <a className="w-full">
                {i.featuredImage && (
                  <div className="w-full h-60 relative">
                    <SanityImage image={i.featuredImage} objectFit="cover" />
                  </div>
                )}
                <Typo variant="h3">{i.title}</Typo>
                <Typo>{i.description}</Typo>
              </a>
            </Link>
          );
        })}
      </div>
    </Section>
  );
};
export default ListingBlock;
