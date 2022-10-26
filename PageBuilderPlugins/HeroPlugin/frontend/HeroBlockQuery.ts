import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";

const heroBlockQuery = (locale: string = "") => `
_type == "hero" => {
  _type,
  _key,
 
}
`;

export interface HeroBlogResult {
  _key: string;
  title?: string | null;
  text?: any;
  image: ImageMetaResult;
  content: any;
}

export default heroBlockQuery;
