import { IMAG_PROJECTION, ImageResult } from "PageBuilder/constants";

export const footerQuery = (locale?: string) => `
'imprintPage': *[_id == 'siteConfig'][0].imprintPage->{ 'href': coalesce('/'+slug_${locale}.current,'/' + slug.current), 'label':coalesce(title_${locale},title) },
'privacyPolicyPage': *[_id == 'siteConfig'][0].privacyPolicyPage->{ 'href': coalesce('/'+slug_${locale}.current,'/' + slug.current), 'label':coalesce(title_${locale},title) },
'socialMedia': *[_id == 'siteConfig'].socialMedia[]{icon,url,_key},
'logos': *[_id == 'siteConfig'].logos[]{'image':image{${IMAG_PROJECTION}},'text':coalesce(text_${locale},text), _key},
`;

export type FooterQueryResult = {
  imprintPage?: { href?: string; label?: string };
  privacyPolicyPage?: { href?: string; label?: string };
  socialMedia?: { icon?: string | null; url?: string | null; _key: string }[];
  logos?: {
    image?: ImageResult | null;
    text?: string | null;
    _key: string;
  }[];
};
