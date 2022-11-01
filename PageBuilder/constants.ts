export const SLUG_PROJECTION = (locale?: string) =>
  locale
    ? `select(_id == *[ _type == 'menuConfig'][0].indexPage._ref => '/', _type != 'page' => _type + '/' + coalesce(slug_${locale},slug).current, '/' + coalesce(slug_${locale},slug).current, )`
    : `select(_id == *[ _type == 'menuConfig'][0].indexPage._ref => '/', _type != 'page' => _type + '/' + slug.current, '/' + slug.current, )`;

export type SlugResult = string;

export const REMOTE_URL = "https://remoteUrl.com/";

export const IMAG_PROJECTION = `
crop,
hotspot,
asset,
...(asset->{
    'alt':altText, 
    url,
    'aspectRatio':metadata.dimensions.aspectRatio,
    "lqip":metadata.lqip,
    'width':metadata.dimensions.width,
    'height':metadata.dimensions.height  
  }),
  alt
`;

export type ImageResult = {
  alt?: string | null;
  url?: string;
  hotspot?: { x: number; y: number } | null;
  crop?: { bottom: number; top: number; right: number; left: number } | null;
  aspectRatio: number;
  width: number;
  height: number;
  lqip: string;
};

export const locale = {
  de: { title: "Deutsch", isDefault: true, flag: "🇩🇪" },
  en: { title: "Englisch", flag: "🇺🇸" },
};
