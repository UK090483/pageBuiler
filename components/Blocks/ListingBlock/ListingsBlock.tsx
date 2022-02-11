import EventsList from "@components/Blocks/ListingBlock/Listings/Events/EventsList";
import Listing from "@components/Blocks/ListingBlock/Listings/Listing";
import { ImageMetaResult, imageMeta } from "lib/SanityImage/query";
import React from "react";
import { DateString } from "../../../services/pageBuilderService/queries/snippets";

export const listItemQuery = (locale: string) => `
...,
_id,
'updatedAt':_updatedAt,
'title':coalesce(title_${locale},title),
'description':coalesce(description_${locale},description),
'slug':coalesce(slug_${locale}.current,slug.current),
'featuredImage':featuredImage{${imageMeta}}
`;

export interface ListItemResult {
  title?: null | string;
  description?: null | string;
  slug?: null | string;
  featuredImage?: null | ImageMetaResult;
  _id: string;
  updatedAt?: DateString;
}

export const listingBlockQuery = (locale: string) => `
_type == "listing" => {

  _type,
  _key,
  contentType,
  variant,
  'filterItems':*[_type == "tag"]{'label':coalesce(name_${locale},name),'value':_id},
  'title':coalesce(title_${locale},title),
  'items': 
    select(
      contentType in ['event']=> *[_type == ^.contentType][]{${listItemQuery(
        locale
      )}},
      contentType in ['documentations']=> *[ pageType._ref == "88e611ea-581e-48c4-b63c-13e1084acf4f" ][]{${listItemQuery(
        locale
      )}},
      type == 'contentType' => *[_type == ^.contentType ][]{${listItemQuery(
        locale
      )}},
      type == 'custom' => customItems[]->{${listItemQuery(locale)}}
      )
}
`;

export interface ListingBlogResult {
  _type: "listing";
  _key: string;
  items?: ListItemResult[];
  contentType?: "event" | "documentations";
  variant?: "grid" | "list" | "carousel";
  name?: string;
  filterItems?: { label: string; value: string }[];
}

export interface ListingBlockProps extends ListingBlogResult {}

const ListingBlock: React.FC<ListingBlockProps> = (props) => {
  const { items, variant, name, contentType, filterItems } = props;

  if (contentType === "event") {
    return <EventsList filterItems={filterItems} items={items || []} />;
  }

  return (
    <Listing
      filterItems={contentType === "documentations" ? filterItems : undefined}
      title={name}
      variant={variant || "list"}
      items={items || []}
    />
  );
};

export default ListingBlock;
