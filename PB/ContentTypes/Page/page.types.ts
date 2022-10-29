import { SeoQueryResult } from "../../Objects/Seo/Seo.query";
import { defaultRichTextQueryResult } from "../../RichText/defaultRichText.query";
import type { BaseContentTypeResult } from "../helper";

export type PageResult = BaseContentTypeResult &
  SeoQueryResult & {
    body: defaultRichTextQueryResult;
    slug: string;
  };
