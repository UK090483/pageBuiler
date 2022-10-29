import { richTextQuery } from "@components/RichText/richTextQuery";
import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";

const sectionBlockQuery = (locale: string = "") => `
_type == "section" => {
  _key,
  _type,
  title,
  type,
  topSpace,
  bottomSpace,
  imagePosition,
  'content':(coalesce(content_${locale},content))[]{${richTextQuery(locale)}},
  image{${imageMeta}}
}
`;

export interface SectionResult {
  title?: string;
  textDirection?: "left" | "center" | "right";
  backgroundColor?: "white" | "grey" | "black" | "primary" | "secondary";
  topSpace?: "s" | "m" | "l" | "xl" | "xxl";
  bottomSpace?: "s" | "m" | "l" | "xl" | "xxl" | "none";
  content?: null | any;
  bgImage?: ImageMetaResult;
  imagePosition?: "l" | "r";
  image?: ImageMetaResult;
  type?: "m" | "l" | "s";
  _key: string;
}

export default sectionBlockQuery;
