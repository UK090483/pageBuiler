export interface SeoType {
  canonical?: string;
  metaTitle?: string;
  metaDesc?: string;
  shareTitle?: string;
  shareDesc?: string;
  pageUrl?: string;
  shareGraphic?: string | null;
}

export interface SeoResult {
  seo: SeoType;
}

const localeValue = (val: string, locale: string) => {
  return locale ? `${val}_${locale}, ${val}` : val;
};

export const seoQuery = (locale: string = "") => `
'seo':{
  'canonical': select( 
    defined(pageType) => coalesce('/${locale}/'+ pageType->slug_${locale}.current,'/'+ pageType->slug.current ) + coalesce('/'+slug_${locale}.current , slug.current),
    coalesce('/${locale}/'+slug_${locale}.current , slug.current)
    ),
  'shareGraphic':coalesce(featuredImage.asset->url, *[_id == 'siteConfig'][0].seo.shareGraphic.asset->url),
  'metaTitle':coalesce(${localeValue(
    "title",
    locale
  )},*[_id == 'siteConfig'][0].seo.metaTitle),

  'metaDesc':coalesce(${localeValue(
    "description",
    locale
  )},*[_id == 'siteConfig'][0].seo.metaDesc),
  
  'shareTitle': coalesce(${localeValue(
    "title",
    locale
  )},*[_id == 'siteConfig'][0].seo.metaTitle),

  'shareDesc':coalesce(${localeValue(
    "description",
    locale
  )},*[_id == 'siteConfig'][0].seo.shareDesc),
}
`;
