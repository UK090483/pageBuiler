import { ImageMetaResult } from "lib/SanityImage/query";

export interface TestimonialItemResult {
  name?: null | string;
  position?: null | string;
  description?: null | string;
  text?: null | string;
  avatar?: null | ImageMetaResult;
  _id: string;
}
