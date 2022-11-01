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
  featuredImage: ImageResult;
  slug?: string;
  description: string;
  variants?: { title: string; value: string }[];
};

type queryProps = {
  locale?: string;
};

const listingQuery: localizedQueryFn = (locale) => `
...,
contentType,
${items
  .filter((i) => !!i.variants)
  .reduce((acc, i) => acc + `${i.name}Variants,`, "")}

'items':select(
 ${items
   .map(
     (i) =>
       `contentType == "${i.name}" => [...${i.name}Items[]${
         i.reference ? "->" : ""
       }] `
   )
   .join(",")}
)[]{
    'key': coalesce(_id,_key),
    'slug': ${SLUG_PROJECTION(locale)},
    ${localizeValue("title", locale)},
    ${localizeValue("description", locale)},
    'featuredImage':featuredImage{${IMAG_PROJECTION}}
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
} & componentStyleResult;
