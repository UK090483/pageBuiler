export const DEFAULT_SLUG_QUERY = `select( _type != 'page' => _type + '/' + slug.current, '/' + slug.current )`;
export const DEFAULT_LINK_QUERY = `...(internal->{ 'internal': select( _type != 'page' => _type + '/' + slug.current, '/' + slug.current ) })`;
export const DEFAULT_LINK_QUERY_LOCALIZED = (locale: string) =>
  `...(internal->{ 'internal': select( _type != 'page' => _type + '/' + slug.current, '/' + slug.current ) })`;
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
'height': asset->metadata.dimensions.height,`;
