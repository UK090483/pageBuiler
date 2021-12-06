import {
  NavigationMegaMenuQuery,
  NavigationMegaMenuResult,
  navItemQuery,
  NavItemResult,
} from "@services/NavigationService/NavigationQuery";

import { seoQuery, SeoResult } from "@services/SeoService/SeoQuerys";

export const siteQuery = (locale: string = "") => `
'siteSettings': *[_id == 'siteConfig'][0]{
  'mainNav':mainNav[]{
    ...,
    ${navItemQuery(locale)},
    ${NavigationMegaMenuQuery(locale)} 
  },
},
'canonical': select( defined(pageType) => '/'+ pageType->slug.current +'/' +slug.current ,!defined(pageType) => '/' + slug.current),
${seoQuery(locale)}
`;

export interface SiteSettingResult {
  siteSettings: {
    mainNav?: (NavItemResult | NavigationMegaMenuResult)[];
    extraNav?: NavItemResult[];
  };
  canonical: string;
  seo: SeoResult;
}
