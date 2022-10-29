import { localizedQueryFn } from "../../helper/withLocalization";

import { defaultRichTextQuery } from "../../RichText/defaultRichText.query";
import { ImageResult, IMAG_PROJECTION } from "../../constants";

export const sectionBlockQuery: localizedQueryFn = (locale) => `
_type == "section" => {
  _key,
  _type,
  title,
  type,
  topSpace,
  bottomSpace,
  imagePosition,
  'content':(coalesce(content_${locale},content))[]{${defaultRichTextQuery(
  locale
)}},
  },
`;

export interface SectionResult {
  title?: string;
  textDirection?: "left" | "center" | "right";
  backgroundColor?: "white" | "grey" | "black" | "primary" | "secondary";
  topSpace?: "s" | "m" | "l" | "xl" | "xxl";
  bottomSpace?: "s" | "m" | "l" | "xl" | "xxl" | "none";
  content?: null | any;
  bgImage?: ImageResult;
  imagePosition?: "l" | "r";
  image?: ImageResult;
  type?: "m" | "l" | "s";
  _key: string;
}

export default sectionBlockQuery;
