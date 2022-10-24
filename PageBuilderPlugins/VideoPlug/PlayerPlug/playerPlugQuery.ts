import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";
import PlayerPlug from "./PlayerPlug";

export const playerPlugQuery = `
_type == "playerPlug" => {
  ...,
  'urls':urls[]{
    _key,
    title,
    url,
    'image': image{${imageMeta}}
  }
}
`;

export type PlayerPlugResult = {
  url?: string | null;
  urls: {
    _key: string;
    title: string | null;
    url: string | null;
    image?: ImageMetaResult | null;
  }[];
};
