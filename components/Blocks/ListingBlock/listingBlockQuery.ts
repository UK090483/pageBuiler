import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";
import { EventsListItemQuery } from "./Listings/Events/EventsListQuery";
import {
  personItemQuery,
  PersonItemResult,
} from "./Listings/Persons/PersonListQuery";
import {
  TestimonialItemResult,
  testimonialQuery,
} from "./Listings/Testimonials/testimonialQuery";

export const listItemQuery = (locale: string) => {
  return `
  ...,
  _id,
  'tags': tags._ref,
  'title':coalesce(title_${locale},title),
  'subTitle':coalesce(subTitle_${locale},subTitle),
  'description':coalesce(description_${locale},description),
  'slug':select(
    defined(pageType) && defined(pageType->slug_${locale}.current)  => pageType->slug_${locale}.current + '/' + coalesce(slug_${locale}.current,slug.current),
    defined(pageType) => pageType->slug.current + '/' +  coalesce(slug_${locale}.current,slug.current),
    slug.current
    ),
  'featuredImage':featuredImage{${imageMeta}}
  `;
};

const listingBlockQuery = (locale: string) => `
_type == "listing" => {
  ...,
  eventVariant,
  'personItems': personItems[]->{${personItemQuery(locale)}},
  ${testimonialQuery(locale)},
  _type,
  _key,
  contentType,
  showTitle,
  variant,
  'filterItems':*[_type == "tag"]{'label':coalesce(name_${locale},name),'value':_id},
  'title':coalesce(title_${locale},title),
  'items': 
    select(
      type == 'custom' => customItems[]->{${listItemQuery(locale)}},
      contentType == 'event' && count(eventIncludeTags) > 0 => *[ _type == 'event' && references(^.eventIncludeTags[]._ref ) ][]{${EventsListItemQuery(
        locale
      )}},
      contentType == 'event' => *[ _type == 'event'][]{${EventsListItemQuery(
        locale
      )}},
      contentType  == 'documentations' => *[ pageType._ref == "88e611ea-581e-48c4-b63c-13e1084acf4f" ][]{${listItemQuery(
        locale
      )}},
      type == 'contentType' => *[_type == ^.contentType ][]{${listItemQuery(
        locale
      )}}
      )
}
`;

export interface ListItemResult {
  title?: null | string;
  description?: null | string;
  subTitle?: null | string;
  slug?: null | string;
  featuredImage?: null | ImageMetaResult;
  _id: string;
  _updatedAt?: string;
}

export interface ListingBlogResult {
  _type: "listing";
  _key: string;
  items?: ListItemResult[];
  contentType?: "event" | "documentations" | "persons" | "testimonials";
  variant?: "grid" | "list" | "carousel";
  title?: string;
  filterItems?: { label: string; value: string }[];
  personItems?: PersonItemResult[] | null;
  testimonialItems?: TestimonialItemResult[] | null;
  customItems?: ListItemResult[];
  showTitle?: boolean;
  type?: "custom";
  eventVariant?: "open" | "accordion" | null;
}

export default listingBlockQuery;
