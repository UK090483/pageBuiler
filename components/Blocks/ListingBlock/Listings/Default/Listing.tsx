import List from "./List";

import React, { useReducer } from "react";
import { Card } from "./Card";
import { Carousel } from "./Carousel";

import { Grid } from "./Grid";
import { ListItem } from "./ListItem";
import Filter from "./Filter";
import { ListItemResult } from "../../listingBlockQuery";
import useFilter from "../useFilter";
import { useRouter } from "next/router";

interface ListingProps {
  title?: string | null;
  items: ListItemResult[];
  variant: "grid" | "list" | "carousel";
  filterItems?: { label: string; value: string }[];
}

const Listing: React.FC<ListingProps> = (props) => {
  const { items, variant = "list", title, filterItems } = props;

  console.log(props);

  const { locale } = useRouter();

  const { filter, setFilter, filteredItems } = useFilter({
    items,
    filterFn: (item, currentFilter) => item?.tags === currentFilter,
  });

  const handleFilterChange = (i: { label: string; value: string }) => {
    setFilter(i.value);
  };

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
        {filterItems && (
          <Filter
            active={filter}
            onChange={handleFilterChange}
            items={filterItems}
          />
        )}
        {filteredItems.map((i, index) => (
          <ListItem
            locale={locale}
            key={i._id}
            position={index % 2 === 0 ? "right" : "left"}
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
