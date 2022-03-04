import { footerQuery, FooterQueryResult } from "./Footer/FooterQuery";

export const layoutQuery = (locale?: string) => `
'footer': {${footerQuery(locale)}},
'title':coalesce( title_${locale}, title),
'homeRoute':*[_id == 'siteConfig'][0].indexPage->{ 'slug':slug.current,'slug_en':slug_en.current,'slug_da':slug_da.current },
`;

export type layoutQueryResult = {
  footer: FooterQueryResult;
  title?: string | null;
  homeRoute?: { [k: string]: string };
};
