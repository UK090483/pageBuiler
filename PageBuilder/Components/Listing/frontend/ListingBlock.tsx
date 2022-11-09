import React from "react";
import { listingQueryResult } from "../listing.query";
import Section from "@components/Section/Section";
import { componentStyleResult } from "../../componentStyle";
import List from "@components/Lists/ListWrap";
import Card from "@components/Card/Card";

const presetMap: Record<
  string,
  {
    columns: number;
    listVariant: React.ComponentProps<typeof List.wrap>["variant"];
    imageVariant: React.ComponentProps<typeof Card.Image>["variant"];
    cardVariant: React.ComponentProps<typeof Card.Wrap>["variant"];
    infoAlign: React.ComponentProps<typeof Card.Info>["center"];
    cardWrapProps?: React.ComponentProps<typeof Card.Wrap>;
  }
> = {
  default: {
    listVariant: "grid",
    imageVariant: "aspect",
    columns: 3,
    cardVariant: "vertical",
    infoAlign: false,
  },
  person: {
    listVariant: "grid",
    imageVariant: "round",
    columns: 3,
    cardVariant: "vertical",
    infoAlign: true,
  },
  post: {
    listVariant: "grid",
    imageVariant: "square",
    columns: 1,
    cardVariant: "horizontal",
    infoAlign: false,
  },
};

const presetList = (type: string) => {
  return presetMap[type] ? presetMap[type] : presetMap.default;
};

const ListingBlock: React.FC<listingQueryResult & componentStyleResult> = (
  props
) => {
  const { items, backgroundColor, contentType, ...rest } = props;

  const { columns, imageVariant, cardVariant, infoAlign, listVariant } =
    presetList(contentType);

  return (
    <Section bg={backgroundColor} {...rest} noProse>
      <List.wrap
        columns={columns}
        items={items}
        variant={listVariant}
        useKey="key"
      >
        {({ mainImage, slug, title, description }) => (
          <Card.Wrap noLink internal={slug || "/"} variant={cardVariant}>
            <Card.Image variant={imageVariant} src={mainImage} />
            <Card.Info center={infoAlign}>
              <Card.Title>{title}</Card.Title>
              <Card.Description>{description}</Card.Description>
              <Card.Link internal={slug || "/"} />
            </Card.Info>
          </Card.Wrap>
        )}
      </List.wrap>
    </Section>
  );
};
export default ListingBlock;
