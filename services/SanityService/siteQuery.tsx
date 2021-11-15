import { NavigationItem, Link } from "types";

const linkQuery = `
  'internalLink': select( 
                 defined(internalLink) && defined(internalLink->pageType)  => '/'+ internalLink->pageType->slug.current + '/' + internalLink->slug.current,
                 defined(internalLink) => '/'+ internalLink->slug.current  ),
  'externalLink': externalLink
  
`;
interface LinkResult extends Omit<Link, "internalLink"> {
  internalLink?: string | null;
}

const navItemQuery = `
    label ,
    'link':link{
      ${linkQuery}
    }
`;
interface NavItemResult extends Omit<NavigationItem, "link"> {
  link: LinkResult;
}

export const siteQuery = `
'siteSettings': *[_id == 'siteConfig'][0]{
  'mainNav':mainNav[]{
    ${navItemQuery}
  },
  'extraNav':extraNav[]{
    ${navItemQuery}
  }
}
`;

export interface SiteSettingResult {
  siteSettings: {
    mainNav: NavItemResult[];
    extraNav: NavItemResult[];
  };
}
