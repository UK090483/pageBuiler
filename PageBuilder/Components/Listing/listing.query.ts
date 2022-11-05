import buildQuery from "../../lib/listingBuilder/buildQuery";
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

const listingQuery: localizedQueryFn = (locale) =>
  buildQuery(
    items,
    ` 
    'key': coalesce(_id,_key),
    'slug': ${SLUG_PROJECTION(locale)},
    ${localizeValue("title", locale)},
    ${localizeValue("description", locale)},
    'mainImage':mainImage{${IMAG_PROJECTION}}
  `
  );

export const listProjection: localizedQueryFn = (locale) => `
_type == 'listing'=>{
  _type,
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
