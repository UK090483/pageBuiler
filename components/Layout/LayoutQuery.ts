import { footerQuery, FooterQueryResult } from "./Footer/FooterQuery";

export const layoutQuery = (locale?: string) => `
'footer': {${footerQuery(locale)}},
'title':coalesce( title_${locale}, title),


`;

export type layoutQueryResult = {
  footer: FooterQueryResult;
};
