import { NavigationItem, Link, NavigationMegaMenu } from "types";

export const linkQuery = `
  'internalLink': select( 
                 defined(internalLink) && defined(internalLink->pageType)  => '/'+ internalLink->pageType->slug.current + '/' + internalLink->slug.current,
                 defined(internalLink) => '/'+ internalLink->slug.current  ),
  'externalLink': externalLink
`;

export interface LinkResult extends Omit<Link, "internalLink"> {
  internalLink?: string | null;
}

const navItemQuery = `
 _type == 'navigationItem' =>{
      ...,
    'link':link{
      ${linkQuery}
    }
  }
`;

export interface NavigationMegaMenuResult
  extends Omit<NavigationMegaMenu, "items"> {
  items: {
    label?: string;
    link?: LinkResult;
  }[];
}

export const NavigationMegaMenuQuery = `
 _type == 'navigationMegaMenu' =>{
      ...,
      'items':items[]{
       ...,
       'items':items[]{
         ...,
        'link':link{
          ${linkQuery}
        }
      }  
    }
  }
`;

interface NavItemResult extends Omit<NavigationItem, "link"> {
  link: LinkResult;
}

export const siteQuery = `
'siteSettings': *[_id == 'siteConfig'][0]{
  'mainNav':mainNav[]{
    ...,
    ${navItemQuery},
    ${NavigationMegaMenuQuery} 
  },
  'extraNav':extraNav[]{
    ${navItemQuery}
  }
}
`;

export interface SiteSettingResult {
  siteSettings: {
    mainNav: (NavItemResult | NavigationMegaMenuResult)[];
    extraNav: NavItemResult[];
  };
}
