import List from "./List";
import { ListItemResult } from "@services/pageBuilderService/Blocks/ListingsBlock";
import React from "react";
import { Card } from "./Card";
import { Carousel } from "./Carousel";

import { Grid } from "./Grid";
import { ListItem } from "./ListItem";

interface ListingProps {
  title?: string;
  items: ListItemResult[];
  variant: "grid" | "list" | "carousel";
}

const Listing: React.FC<ListingProps> = ({
  items,
  variant = "list",
  title,
}) => {
  if (variant === "grid") {
    return (
      <Grid>
        {items.map((i) => (
          <Card key={i._id} {...i} />
        ))}
      </Grid>
    );
  }

  if (variant === "list") {
    return (
      <List title={title}>
        {items.map((i, index) => (
          <ListItem
            key={i._id}
            position={index % 2 === 0 ? "left" : "right"}
            {...i}
          />
        ))}
      </List>
    );
  }

  if (variant === "carousel") {
    return <Carousel items={items} />;
  }

  return null;
};

export default Listing;
