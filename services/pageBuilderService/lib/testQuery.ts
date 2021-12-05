import { groq } from "next-sanity";

export const testQuery = groq`*[_id == *[_id == 'siteConfig'][0].indexPage._ref][0]{
    content[]{
_type == "hero" => {
  _type,
  _key,
  'title': coalesce(title_de, title),
  'text': coalesce(text_de, text)
}
 , 
_type == "section" => {
  _key,
  _type,
  title,
  bgColor,
  type,
  topSpace,
  bottomSpace,
  imagePosition,
  'content':coalesce(
      content_de[]{
  ...,
  
markDefs[]{
  ...,
  _type == "link" => {
  ..., 'link': link{
   ...,
  'internalLink': select(
                 defined(internalLink) && defined(internalLink->pageType)  => '/'+ internalLink->pageType->slug.current + '/' + internalLink->slug.current,
                 defined(internalLink) => '/'+ internalLink->slug.current  
                 ),
 'href': select(
            defined(externalLink) && !!defined(internalLink) => externalLink,
            defined(internalLink) && defined(internalLink->pageType)  => '/'+ internalLink->pageType->slug.current + '/' + coalesce(internalLink->slug_de.current ,internalLink->slug.current),
            defined(internalLink) => '/'+  coalesce(internalLink->slug_de.current ,internalLink->slug.current), 
          ),
  'external': select(defined(externalLink)=>true,defined(internalLink)=>false) 
} ,
},
}
,
  
_type == "button" => {
  _type,
  _key,
    label,
    inline,
    'link':link{
      
   ...,
  'internalLink': select(
                 defined(internalLink) && defined(internalLink->pageType)  => '/'+ internalLink->pageType->slug.current + '/' + internalLink->slug.current,
                 defined(internalLink) => '/'+ internalLink->slug.current  
                 ),
 'href': select(
            defined(externalLink) && !!defined(internalLink) => externalLink,
            defined(internalLink) && defined(internalLink->pageType)  => '/'+ internalLink->pageType->slug.current + '/' + coalesce(internalLink->slug_de.current ,internalLink->slug.current),
            defined(internalLink) => '/'+  coalesce(internalLink->slug_de.current ,internalLink->slug.current), 
          ),
  'external': select(defined(externalLink)=>true,defined(internalLink)=>false) 

    }
}
,
  
_type == "spacer" => {
    _type,
    space
}
,
  
_type == "imageGalleryPlug" => {
  ...,
  _type,
  _key,
  'items':items[]{..., 'image': image{
    alt,
    asset,
    crop,
    customRatio,
    hotspot,
    "id": asset->assetId,
    "type": asset->mimeType,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "lqip": asset->metadata.lqip
} ,'link':link{
    
   ...,
  'internalLink': select(
                 defined(internalLink) && defined(internalLink->pageType)  => '/'+ internalLink->pageType->slug.current + '/' + internalLink->slug.current,
                 defined(internalLink) => '/'+ internalLink->slug.current  
                 ),
 'href': select(
            defined(externalLink) && !!defined(internalLink) => externalLink,
            defined(internalLink) && defined(internalLink->pageType)  => '/'+ internalLink->pageType->slug.current + '/' + coalesce(internalLink->slug_de.current ,internalLink->slug.current),
            defined(internalLink) => '/'+  coalesce(internalLink->slug_de.current ,internalLink->slug.current), 
          ),
  'external': select(defined(externalLink)=>true,defined(internalLink)=>false) 

  }  },
  rows,
  rows_mobile,
  ratio,
}
,
},
      content[]{
  ...,
  
markDefs[]{
  ...,
  _type == "link" => {
  ..., 'link': link{
   ...,
  'internalLink': select(
                 defined(internalLink) && defined(internalLink->pageType)  => '/'+ internalLink->pageType->slug.current + '/' + internalLink->slug.current,
                 defined(internalLink) => '/'+ internalLink->slug.current  
                 ),
 'href': select(
            defined(externalLink) && !!defined(internalLink) => externalLink,
            defined(internalLink) && defined(internalLink->pageType)  => '/'+ internalLink->pageType->slug.current + '/' + coalesce(internalLink->slug_de.current ,internalLink->slug.current),
            defined(internalLink) => '/'+  coalesce(internalLink->slug_de.current ,internalLink->slug.current), 
          ),
  'external': select(defined(externalLink)=>true,defined(internalLink)=>false) 
} ,
},
}
,
  
_type == "button" => {
  _type,
  _key,
    label,
    inline,
    'link':link{
      
   ...,
  'internalLink': select(
                 defined(internalLink) && defined(internalLink->pageType)  => '/'+ internalLink->pageType->slug.current + '/' + internalLink->slug.current,
                 defined(internalLink) => '/'+ internalLink->slug.current  
                 ),
 'href': select(
            defined(externalLink) && !!defined(internalLink) => externalLink,
            defined(internalLink) && defined(internalLink->pageType)  => '/'+ internalLink->pageType->slug.current + '/' + coalesce(internalLink->slug_de.current ,internalLink->slug.current),
            defined(internalLink) => '/'+  coalesce(internalLink->slug_de.current ,internalLink->slug.current), 
          ),
  'external': select(defined(externalLink)=>true,defined(internalLink)=>false) 

    }
}
,
  
_type == "spacer" => {
    _type,
    space
}
,
  
_type == "imageGalleryPlug" => {
  ...,
  _type,
  _key,
  'items':items[]{..., 'image': image{
    alt,
    asset,
    crop,
    customRatio,
    hotspot,
    "id": asset->assetId,
    "type": asset->mimeType,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "lqip": asset->metadata.lqip
} ,'link':link{
    
   ...,
  'internalLink': select(
                 defined(internalLink) && defined(internalLink->pageType)  => '/'+ internalLink->pageType->slug.current + '/' + internalLink->slug.current,
                 defined(internalLink) => '/'+ internalLink->slug.current  
                 ),
 'href': select(
            defined(externalLink) && !!defined(internalLink) => externalLink,
            defined(internalLink) && defined(internalLink->pageType)  => '/'+ internalLink->pageType->slug.current + '/' + coalesce(internalLink->slug_de.current ,internalLink->slug.current),
            defined(internalLink) => '/'+  coalesce(internalLink->slug_de.current ,internalLink->slug.current), 
          ),
  'external': select(defined(externalLink)=>true,defined(internalLink)=>false) 

  }  },
  rows,
  rows_mobile,
  ratio,
}
,
}
      ),
  bgImage{
    alt,
    asset,
    crop,
    customRatio,
    hotspot,
    "id": asset->assetId,
    "type": asset->mimeType,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "lqip": asset->metadata.lqip
},
  image{
    alt,
    asset,
    crop,
    customRatio,
    hotspot,
    "id": asset->assetId,
    "type": asset->mimeType,
    "aspectRatio": asset->metadata.dimensions.aspectRatio,
    "lqip": asset->metadata.lqip
}
}
},
  }`;
