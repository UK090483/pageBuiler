import { ImageResult, IMAG_PROJECTION } from "../../constants";

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
