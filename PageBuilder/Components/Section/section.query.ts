import { localizedQueryFn } from "../../helper/withLocalization";

import { defaultRichTextQuery } from "../../RichText/defaultRichText.query";
import { ImageResult, IMAG_PROJECTION } from "../../constants";
import {
  componentStyleProjection,
  componentStyleResult,
} from "../componentStyle";

export const sectionBlockQuery: localizedQueryFn = (locale) => `
_type == "section" => {
  _key,
  _type,
  title,
  type,
  imagePosition,
  textDirection,
  'image':image{${IMAG_PROJECTION}},
  'content':(coalesce(content_${locale},content))[]{${defaultRichTextQuery(
  locale
)}},
 ${componentStyleProjection}
  },
`;

export type SectionResult = {
  title?: string;
  textDirection?: "left" | "center" | "right";
  content?: null | any;
  bgImage?: ImageResult;
  imagePosition?: "l" | "r" | null;
  image?: ImageResult;
  type?: "m" | "l" | "s";
  _key: string;
} & componentStyleResult;

export default sectionBlockQuery;
