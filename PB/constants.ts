export const DEFAULT_SLUG_QUERY = (locale?: string) =>
  locale
    ? `select(_id == *[ _type == 'siteConfig'][0].indexPage._ref => '/', _type != 'page' => _type + '/' + coalesce(slug_${locale},slug).current, '/' + coalesce(slug_${locale},slug).current, )`
    : `select(_id == *[ _type == 'siteConfig'][0].indexPage._ref => '/', _type != 'page' => _type + '/' + slug.current, '/' + slug.current )`;

export const DEFAULT_LINK_QUERY = (locale?: string) =>
  `...(internal->{ 'internal': ${DEFAULT_SLUG_QUERY(locale)} })`;

export const DEFAULT_IMAG_QUERY = `
  alt,  
  crop,
  hotspot,
  'url':asset->url,
  "id": asset->assetId,
  "type": asset->mimeType,
  "aspectRatio": asset->metadata.dimensions.aspectRatio,
  "lqip": asset->metadata.lqip,
  'width': asset->metadata.dimensions.width,
  'height': asset->metadata.dimensions.height,
`;
