import { ImageResult, IMAG_PROJECTION } from "PB/constants";

export const imageGalleryPlugQuery = `
_type == "imageGalleryPlug" => {
   ...,
  _type,
  _key,
  'items':items[]{
    ...,
    'image': image{${IMAG_PROJECTION}},
  },
  rows,
  rows_mobile,
  ratio,
  lightBox
}
`;

type imageView = "cover" | "contain";
type variant = "grid" | "masonry";

export interface ImageGalleryPlugItem {
  _type: "imageGalleryItem";
  title?: string | null;
  text?: string | null;
  size?: "2w" | "2h" | "2wh";
  image?: ImageResult;
  variant?: imageView;

  // link?: LinkResult;
  contain?: boolean;
  _key: string;
}

export interface ImageGalleryPlugResult {
  _type: "imageGalleryPlug";
  variant?: variant | null;
  imageView?: imageView | null;
  name?: string;
  rows?: number;
  rows_mobile?: number;
  ratio?: "1:1" | "16:9" | "2:3" | "3:2";
  items: ImageGalleryPlugItem[];
  lightBox?: boolean | null;
}
