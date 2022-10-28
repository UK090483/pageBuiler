export type ListingItem = {
  title: string;
  name: string;
  variants?: { title: string; value: string }[];
};

type queryProps = {
  locale?: string;
  items: ListingItem[];
  slugQuery: string;
  imageQuery: string;
};

const query = ({ locale, items, slugQuery, imageQuery }: queryProps) => `
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
    'slug': ${slugQuery},
    'title': coalesce(title_${locale},title),
    'description': coalesce(description_${locale},description),
    'featuredImage':featuredImage{${imageQuery}}
},
`;

export default query;
