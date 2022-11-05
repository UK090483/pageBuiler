import { localizedQueryFn } from "../../helper/withLocalization";

type seoPluginQueryProps = {
  locale?: string;
};
export const seoQuery: localizedQueryFn = (locale) => `
  
  'seo':{
    'metaTitle':coalesce( seo.metaTitle_${locale} , seo.metaTitle, title_${locale} , title ,  *[_type == 'seoConfig'][0].seo.metaTitle),
    'shareTitle': coalesce( seo.shareTitle_${locale} , seo.shareTitle, title_${locale} , title , *[_type == 'seoConfig'][0].seo.metaTitle),
    'shareGraphic':coalesce(mainImage, *[_type == 'seoConfig'][0].seo.shareGraphic),
    'metaDesc':coalesce( seo.metaDesc_${locale} , seo.metaDesc,  description_${locale}, description, *[_type == 'seoConfig'][0].seo.metaDesc),
    'shareDesc': coalesce( seo.shareDesc_${locale} , seo.shareDesc,  description_${locale},description,*[_type == 'seoConfig'][0].seo.shareDesc),
  },
  `;

export type SeoQueryResult = {
  seo: {
    metaDesc?: string | null;
    metaTitle?: string | null;
    shareDesc?: string | null;
    shareTitle?: string | null;
    shareGraphic?: { asset: { _ref: string } } | null;
  };
};
