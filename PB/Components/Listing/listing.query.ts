import { IMAG_PROJECTION, SLUG_PROJECTION } from "../../constants";
import { localizedQueryFn } from "../../helper/withLocalization";
import { items } from "./listing.schema";

export type ListingItem = {
  title: string;
  name: string;
  variants?: { title: string; value: string }[];
};

type queryProps = {
  locale?: string;
  items: ListingItem[];
};

const listingQuery = ({ locale, items }: queryProps) => `
...,
contentType,
${items
  .filter((i) => !!i.variants)
  .reduce((acc, i) => acc + `${i.name}Variants,`, "")}

'items':select(
 ${items
   .map((i) => `contentType == "${i.name}" => [...${i.name}Items[]->] `)
   .join(",")}
)[]{
    _id,
    'slug': ${SLUG_PROJECTION(locale)},
    'title': coalesce(title_${locale},title),
    'description': coalesce(description_${locale},description),
    'featuredImage':featuredImage{${IMAG_PROJECTION}}
},
`;

export const listProjection: localizedQueryFn = (locale) => `
_type == 'listing'=>{
${listingQuery({ locale, items })}
},
`;
