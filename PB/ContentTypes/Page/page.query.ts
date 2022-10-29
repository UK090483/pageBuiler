import { defaultRichTextQuery } from "../../RichText/defaultRichText.query";
import { BaseContentTypeProjection } from "../helper";

export const pageQuery = (locale?: string) => `
${BaseContentTypeProjection(locale)}
${defaultRichTextQuery(locale)}
`;
