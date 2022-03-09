import { richTextQuery } from "@components/RichText/richtTextQuery";
import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";

const sectionBlockQuery = (locale: string) => `
_type == "section" => {
  _key,
  _type,
  title,
  bgColor,
  type,
  topSpace,
  bottomSpace,
  imagePosition,
  'content':coalesce(
      content_${locale}[]{${richTextQuery(locale)}},
      content[]{${richTextQuery(locale)}}
      ),
  bgImage{${imageMeta}},
  image{${imageMeta}}
}
`;

export interface SectionResult {
  title?: string;
  topSpace?: "s" | "m" | "l" | "xl" | "xxl";
  bottomSpace?: "s" | "m" | "l" | "xl" | "xxl";
  content: null | any;
  bgImage: ImageMetaResult;
  bgColor?: "black" | "white" | "primary" | "secondary" | "grey";
  imagePosition?: "l" | "r";
  image: ImageMetaResult;
  type?: "m" | "l" | "s";
  _key: string;
}

export default sectionBlockQuery;
