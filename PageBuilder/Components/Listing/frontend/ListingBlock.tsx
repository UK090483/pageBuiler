import React from "react";
import { listingQueryResult } from "../listing.query";
import Section from "@components/Section/Section";
import { componentStyleResult } from "../../componentStyle";
import List from "@components/Lists/ListWrap";
import Card from "@components/Card/Card";

const ListingBlock: React.FC<listingQueryResult & componentStyleResult> = (
  props
) => {
  const { items, backgroundColor, contentType, ...rest } = props;

  return (
    <Section bg={backgroundColor} {...rest} noProse>
      <List.wrap columns={3} items={items} key="key">
        {({ featuredImage, slug, title, description }) => (
          <Card.Wrap internal={slug || "/"}>
            <Card.Image
              variant={contentType === "person" ? "round" : "aspect"}
              src={featuredImage}
            />
            <Card.Info center={contentType === "person"}>
              <Card.Title>{title}</Card.Title>
              <Card.Description>{description}</Card.Description>
            </Card.Info>
          </Card.Wrap>
        )}
      </List.wrap>
    </Section>
  );
};
export default ListingBlock;
