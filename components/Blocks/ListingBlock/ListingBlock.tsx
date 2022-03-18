import dynamic from "next/dynamic";
const EventsList = dynamic(
  () => import("@components/Blocks/ListingBlock/Listings/Events/EventsList")
);
const PersonList = dynamic(() => import("./Listings/Persons/PersonList"));
const TestimonialList = dynamic(
  () => import("./Listings/Testimonials/TestimonialList")
);
import Listing from "@components/Blocks/ListingBlock/Listings/Default/Listing";
import React from "react";

import { ListingBlogResult } from "./listingBlockQuery";

export interface ListingBlockProps extends ListingBlogResult {}
const ListingBlock: React.FC<ListingBlockProps> = (props) => {
  const {
    variant,
    title,
    contentType,
    filterItems,
    personItems,
    testimonialItems,
    showTitle,
    type,
    eventVariant,
    eventItems,
    hideDoneEvents,
    listItems,
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
        hideDoneEvents={hideDoneEvents}
        title={showTitle ? title : null}
        filterItems={filterItems}
        items={eventItems || []}
        accordion={!(eventVariant === "open")}
      />
    );
  }
  return (
    <Listing
      filterItems={
        ["documentations", "art"].includes(contentType || "")
          ? filterItems
          : undefined
      }
      title={showTitle ? title : null}
      variant={variant || "list"}
      items={type === "custom" ? listItems || [] : listItems || []}
    />
  );
};

export default ListingBlock;
