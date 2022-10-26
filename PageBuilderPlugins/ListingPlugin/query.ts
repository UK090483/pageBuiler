type queryProps = {
  locale?: string;
  items: { name: string }[];
  slugQuery: string;
  imageQuery: string;
};

const query = ({ locale, items, slugQuery, imageQuery }: queryProps) => `
contentType,
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
