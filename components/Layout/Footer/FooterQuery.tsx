export const footerQuery = (locale?: string) => `
'imprintPage': *[_id == 'siteConfig'][0].imprintPage->{ 'href': coalesce('/'+slug_${locale}.current,'/' + slug.current), 'label':coalesce(title_${locale},title) },
'privacyPolicyPage': *[_id == 'siteConfig'][0].privacyPolicyPage->{ 'href': coalesce('/'+slug_${locale}.current,'/' + slug.current), 'label':coalesce(title_${locale},title) }

`;

export type FooterQueryResult = {
  imprintPage?: { href?: string; label?: string };
  privacyPolicyPage?: { href?: string; label?: string };
};
