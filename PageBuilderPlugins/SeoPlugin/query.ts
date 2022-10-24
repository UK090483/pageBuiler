type seoPluginQueryProps = {
  locale?: string;
};
const seoPluginQuery = ({ locale }: seoPluginQueryProps) => `

'seo':{
    ...(*[_type == 'seoConfig'][0].seo{...}),
    'metaTitle': title,
    'metaDesc': description,
    'shareTitle':title,
    'shareDesc':description,
    ...(seo)
}
`;

export default seoPluginQuery;

export type SeoQueryResult = {
  seo: {
    metaDesc?: string | null;
    metaTitle?: string | null;
    shareDesc?: string | null;
    shareTitle?: string | null;
    shareGraphic?: { asset: { _ref: string } } | null;
  };
};
