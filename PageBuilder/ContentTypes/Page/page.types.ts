import { NavigationResult } from "../../Navigation/navigation.types";
import { SeoQueryResult } from "../../Objects/Seo/Seo.query";
import { defaultRichTextQueryResult } from "../../RichText/defaultRichText.query";
import { EditorResult } from "../Base/Editor/editor.query";
import type { BaseContentTypeResult } from "../helper";

export type PageResult = BaseContentTypeResult &
  NavigationResult &
  SeoQueryResult & {
    body: EditorResult;
    slug: string;
  };
