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

export const seoQuery = (locale: string = "") => `
'seo':{
  'canonical': select( 
    defined(pageType) => coalesce('/${locale}/'+ pageType->slug_${locale}.current,'/'+ pageType->slug.current ) + coalesce('/'+slug_${locale}.current , slug.current),
    coalesce('/${locale}/'+slug_${locale}.current , slug.current)
    ),
  'shareGraphic':coalesce(featuredImage.asset->url, *[_id == 'siteConfig'][0].seo.shareGraphic.asset->url),
  'metaTitle':coalesce( title_${locale} , title , *[_id == 'siteConfig'][0].seo.metaTitle),
  'metaDesc':coalesce(description_${locale},*[_id == 'siteConfig'][0].seo.metaDesc),
  'shareTitle': coalesce( title_${locale} , title , *[_id == 'siteConfig'][0].seo.metaTitle),
  'shareDesc':coalesce(description_${locale},*[_id == 'siteConfig'][0].seo.metaDesc),
}
`;
