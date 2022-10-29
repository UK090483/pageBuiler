export const SLUG_PROJECTION = (locale?: string) =>
  locale
    ? `select(_id == *[ _type == 'siteConfig'][0].indexPage._ref => '/', _type != 'page' => _type + '/' + coalesce(slug_${locale},slug).current, '/' + coalesce(slug_${locale},slug).current, )`
    : `select(_id == *[ _type == 'siteConfig'][0].indexPage._ref => '/', _type != 'page' => _type + '/' + slug.current, '/' + slug.current )`;

export type SlugResult = string;

export const IMAG_PROJECTION = `
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

export type ImageResult = {
  alt: string | null;
  url?: string | null;
  hotspot?: { x: number; y: number } | null;
  crop?: { bottom: number; top: number; right: number; left: number } | null;
  id: string;
  type: string;
  aspectRatio: number;
  width: number;
  height: number;
  lqip: string;
};

export const locale = {
  de: { title: "Deutsch", isDefault: true, flag: "🇩🇪" },
  en: { title: "Englisch", flag: "🇺🇸" },
};
