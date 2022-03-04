import { imageMeta } from "@lib/SanityImage/query";

const marksQuery = `
markDefs[]{
  ...,
  _type == "image" => {
    ${imageMeta}
  }
}`;

export const heroBlockQuery = (locale: string) => `
_type == "hero" => {
  _type,
  _key, 
  'text': coalesce(text_${locale}[]{..., ${marksQuery} }, text[]{..., ${marksQuery}})
}
`;

export interface HeroBlogResult {
  _key: string;
  title?: string | null;
  text?: any;
}
