import React from "react";

import { ListingPluginResult } from "PageBuilderPlugins/ListingPlugin/types";
import SanityImage from "@lib/SanityImage";
import Typo from "@components/Typography/Typography";
import Section from "@components/Section/Section";

export interface ListingBlockProps extends ListingPluginResult {}
const ListingBlock: React.FC<ListingBlockProps> = (props) => {
  const { items } = props;

  return (
    <Section>
      <div className=" grid grid-cols-3 gap-8">
        {items?.map((i) => {
          return (
            <div key={i._id} className="w-full">
              {i.featuredImage && (
                <div className="w-full h-60 relative">
                  <SanityImage image={i.featuredImage} objectFit="cover" />
                </div>
              )}
              <Typo variant="h3">{i.title}</Typo>
              <Typo>{i.description}</Typo>
            </div>
          );
        })}
      </div>
    </Section>
  );
};
export default ListingBlock;
