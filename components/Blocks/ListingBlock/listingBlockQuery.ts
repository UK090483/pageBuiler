import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";
import { EventsListItemQuery } from "./Listings/Events/EventsListQuery";
import {
  personItemQuery,
  PersonItemResult,
} from "./Listings/Persons/PersonListQuery";
import {
  TestimonialItemResult,
  testimonialItemQuery,
} from "./Listings/Testimonials/testimonialQuery";

export const listItemQuery = (locale: string) => {
  return `
  _id,
  'tags': tags._ref,
  'title':coalesce(title_${locale},title),
  'subTitle':coalesce(subTitle_${locale},subTitle),
  'description':coalesce(description_${locale},description),
  'slug':select(
    defined(pageType) && defined(pageType->slug_${locale}.current)  => pageType->slug_${locale}.current + '/' + coalesce(slug_${locale}.current,slug.current),
    defined(pageType) => pageType->slug.current + '/' +  coalesce(slug_${locale}.current,slug.current),
    coalesce(slug_${locale}.current,slug.current)
    ),
  'featuredImage':featuredImage{${imageMeta}}
  `;
};

const isDocumentation =
  'pageType._ref == "88e611ea-581e-48c4-b63c-13e1084acf4f"';

const listingBlockQuery = (locale: string = "") => `
_type == "listing" => {
  hideDoneEvents,
  eventVariant,
  _type,
  _key,
  contentType,
  showTitle,
  variant,
  'filterItems': select( contentType == 'event' || (contentType  == 'documentations' && !defined(documentationsIncludeTags) )  => *[_type == "tag"]{'label':coalesce(name_${locale},name),'value':_id},null ),
  'title':coalesce(title_${locale},title),
  'personItems': personItems[]->{${personItemQuery(locale)}},
  'testimonialItems': testimonialItems[]->{${testimonialItemQuery(locale)}},
  'listItems':(select(
    type == 'custom' => [ ...customItems[]->] ,
    contentType  == 'pages' => [...pagesItems[]->],
    contentType  == 'documentations' && count(documentationsIncludeTags) > 0 => *[ ${isDocumentation} && references(^.documentationsIncludeTags[]._ref ) ],
    contentType  == 'documentations' => *[ ${isDocumentation} ]
  ))[]{${listItemQuery(locale)}},
  'eventItems':(select(
    contentType == 'event' && count(eventIncludeTags) > 0 => *[ _type == 'event' && references(^.eventIncludeTags[]._ref ) ]| order(date asc),
    contentType == 'event' => *[ _type == 'event']| order(date asc)
  ))[]{${EventsListItemQuery(locale)}},
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
  eventItems?: ListItemResult[];
  listItems?: ListItemResult[];
  contentType?:
    | "event"
    | "documentations"
    | "persons"
    | "testimonials"
    | "pages";
  variant?: "grid" | "list" | "carousel";
  title?: string;
  filterItems?: { label: string; value: string }[];
  personItems?: PersonItemResult[] | null;
  testimonialItems?: TestimonialItemResult[] | null;
  customItems?: ListItemResult[];
  showTitle?: boolean;
  eventVariant?: "open" | "accordion" | null;
  hideDoneEvents?: boolean | null;
}

export default listingBlockQuery;
