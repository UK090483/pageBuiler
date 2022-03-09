import EventsList from "@components/Blocks/ListingBlock/Listings/Events/EventsList";
import Listing from "@components/Blocks/ListingBlock/Listings/Default/Listing";
import React from "react";
import PersonList from "./Listings/Persons/PersonList";
import TestimonialList from "./Listings/Testimonials/TestimonialList";
import { ListingBlogResult } from "./listingBlockQuery";

export interface ListingBlockProps extends ListingBlogResult {}

const ListingBlock: React.FC<ListingBlockProps> = (props) => {
  const {
    items,
    variant,
    title,
    contentType,
    filterItems,
    personItems,
    testimonialItems,
    showTitle,
    type,
    eventVariant,
  } = props;

  if (type !== "custom" && contentType === "testimonials") {
    return <TestimonialList items={testimonialItems || []} />;
  }

  if (type !== "custom" && contentType === "persons") {
    return (
      <PersonList title={showTitle ? title : null} items={personItems || []} />
    );
  }
  if (type !== "custom" && contentType === "event") {
    return (
      <EventsList
        title={showTitle ? title : null}
        filterItems={filterItems}
        items={items || []}
        accordion={!(eventVariant === "open")}
      />
    );
  }
  return (
    <Listing
      filterItems={contentType === "documentations" ? filterItems : undefined}
      title={showTitle ? title : null}
      variant={variant || "list"}
      items={type === "custom" ? items || [] : items || []}
    />
  );
};

export default ListingBlock;
