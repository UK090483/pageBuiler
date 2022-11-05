import { ImageResult, IMAG_PROJECTION, SLUG_PROJECTION } from "../../constants";
import { localizedQueryFn, localizeValue } from "../../helper/withLocalization";
import {
  componentStyleProjection,
  componentStyleResult,
} from "../componentStyle";
import { items } from "./listing.items";

export type ListingItem = {
  key: string;
  title: string;
  name: string;
  mainImage: ImageResult;
  slug?: string;
  description: string;
};

type queryProps = {
  locale?: string;
};

const variants = items
  .filter((i) => !!i.variants)
  .reduce((acc, i) => acc + `${i.name}Variants,`, "");

const getFilterQuery = (item: typeof items[0]) => {
  if (!item.filter) return "";
  return item.filter.reduce((acc, filter) => {
    return (
      acc +
      `contentType == "${item.name}" && ${item.name}Filter == "${filter.value}"  => *[_type == "${item.name}" ${filter.queryFilter}],`
    );
  }, "");
};
const getReferenceQuery = (item: typeof items[0]) => {
  return `contentType == "${item.name}" => [...${item.name}Items[]${
    item.reference ? "->" : ""
  }]`;
};

const listingQuery: localizedQueryFn = (locale) => `
...,
contentType,
${variants}
'items':select(
 ${items.reduce(
   (acc, i) => acc + getFilterQuery(i) + getReferenceQuery(i) + ",",
   ""
 )}
)[]{
    'key': coalesce(_id,_key),
    'slug': ${SLUG_PROJECTION(locale)},
    ${localizeValue("title", locale)},
    ${localizeValue("description", locale)},
    'mainImage':mainImage{${IMAG_PROJECTION}}
},
`;

export const listProjection: localizedQueryFn = (locale) => `
_type == 'listing'=>{
${listingQuery(locale)}
${componentStyleProjection}
},
`;

export type listingQueryResult = {
  _type: "listing";
  _key: string;
  contentType: string;
  items: ListingItem[];
  variant: string;
} & componentStyleResult;
