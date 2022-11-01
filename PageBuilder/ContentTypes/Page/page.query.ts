import { seoQuery } from "../../Objects/Seo/Seo.query";
import navigationQuery from "../../Navigation/navigation.query";

import { BaseContentTypeProjection } from "../helper";
import { editorQuery } from "../Base/Editor/editor.query";

export const pageQuery = (locale?: string) => `
${BaseContentTypeProjection(locale)}
${navigationQuery(locale)}
'body':body[]{${editorQuery(locale)}},
${seoQuery(locale)}
`;
