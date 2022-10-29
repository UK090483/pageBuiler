import { SeoQueryResult } from "PB/Objects/Seo/Seo.query";
import { defaultRichTextQueryResult } from "PB/RichText/defaultRichText.query";
import type { BaseContentTypeResult } from "../helper";

export type PageResult = BaseContentTypeResult &
  SeoQueryResult & {
    body: defaultRichTextQueryResult;
    slug: string;
  };
