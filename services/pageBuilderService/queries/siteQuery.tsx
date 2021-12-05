import {
  linkQuery,
  LinkResult,
} from "@services/pageBuilderService/queries/snippets";
import { NavigationItem, NavigationMegaMenu } from "types";

const navItemQuery = (locale: string = "") => `
 _type == 'navigationItem' =>{
    'label': coalesce(label_${locale}, label),
    'link':link{
      ${linkQuery(locale)}
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

export const NavigationMegaMenuQuery = (locale: string = "") => `
 _type == 'navigationMegaMenu' =>{
      'items':items[]{
       ...,
       
       'link':link{
        ${linkQuery(locale)}
      },
       'items':items[]{
         ...,
        'link':link{
          ${linkQuery(locale)}
        }
      }  
    }
  }
`;

interface NavItemResult extends Omit<NavigationItem, "link"> {
  link: LinkResult;
}

export const siteQuery = (locale: string = "") => `
'siteSettings': *[_id == 'siteConfig'][0]{
  'mainNav':mainNav[]{
    ...,
    ${navItemQuery(locale)},
    ${NavigationMegaMenuQuery(locale)} 
  },
}
`;

export interface SiteSettingResult {
  siteSettings: {
    mainNav?: (NavItemResult | NavigationMegaMenuResult)[];
    extraNav?: NavItemResult[];
  };
}
