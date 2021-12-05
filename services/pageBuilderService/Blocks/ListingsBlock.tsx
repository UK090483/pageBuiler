import Listing from "@components/organisms/Listings/Listing";
import React from "react";
import { AppLocales, Listing as ListingType } from "types";
import { DateString, imageMeta, ImageMetaResult } from "../queries/snippets";

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
  variant,
  'title':coalesce(title_${locale},title),
  'items': 
    select(
      type == 'contentType' => *[_type == ^.contentType ][]{${listItemQuery(
        locale
      )}},
      type == 'custom' => customItems[]->{${listItemQuery(locale)}}
      )
}
`;

export interface ListingBlogResult extends ListingType {
  _type: "listing";
  _key: string;
  items?: ListItemResult[];
}

export interface ListingBlockProps extends ListingBlogResult {}

const ListingBlock: React.FC<ListingBlockProps> = (props) => {
  const { items, variant, name } = props;

  return (
    <Listing title={name} variant={variant || "grid"} items={items || []} />
  );
};

export default ListingBlock;

export {};
