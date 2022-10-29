import {
  localizedQueryFn,
  localizeValue,
} from "../../../helper/withLocalization";

const galleryItemProjection: localizedQueryFn = (locale) => `
_key,
${localizeValue("name", locale)},
${localizeValue("text", locale)},
variant,
size,
`;

type galleryItemResult = {
  _key: string;
  title?: string;
  text?: string;
  variant?: "contain" | "cover";
};

export const galleryProjection: localizedQueryFn = (locale) => `
_type == 'imageGalleryPlug' => {
  _type,
  ${localizeValue("name", locale)},
  'items':items[]{${galleryItemProjection(locale)}},
  rows,
  rows_mobile,
  ratio,
  imageView,
  variant,
  lightBox,
},
`;

export type galleryResult = {
  _type: string;
  name?: string;
  items?: galleryItemResult[];
  rows?: number;
  rows_mobile?: number;
  ratio?: number;
  imageView?: "contain" | "cover";
  variant?: "grid" | "masonry";
  lightBox?: boolean;
};
