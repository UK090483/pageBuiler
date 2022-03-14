import { imageMeta, ImageMetaResult } from "@lib/SanityImage/query";

const marksQuery = `
markDefs[]{
  ...,
  _type == "image" => {
    ${imageMeta}
  }
}`;

const heroBlockQuery = (locale: string) => `
_type == "hero" => {
 
  'logo':{ 'image':logo.image{${imageMeta} },'text':coalesce(logo.text_${locale}, logo.text) },
  _type,
  _key, 
  'text': coalesce(text_${locale}[]{..., ${marksQuery} }, text[]{..., ${marksQuery}}),
}
`;

export interface HeroBlogResult {
  _key: string;
  title?: string | null;
  text?: any;
  logo?: null | { image: ImageMetaResult; text?: null | string };
}

export default heroBlockQuery;
