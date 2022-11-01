import { ImageResult, IMAG_PROJECTION } from "../../../constants";

export const videoPlugQuery = `
_type == "videoPlug" => {
  _type,
  'urls':urls[]{
    _key,
    title,
    url,
    'image': image{${IMAG_PROJECTION}}
  }
},
`;

export type videoPlugResult = {
  _type: "videoPlug";
  url?: string | null;
  urls: {
    _key: string;
    title: string | null;
    url: string | null;
    image?: ImageResult | null;
  }[];
};
