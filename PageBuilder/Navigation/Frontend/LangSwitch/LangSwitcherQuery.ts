import { PageBuilderLocales } from "PageBuilder/types";

const LangSwitcherQuery = (locales: PageBuilderLocales) => {
  const query = Object.entries(locales).reduce((acc, [key, value]) => {
    return value.isDefault
      ? `${acc} 'href': select( 
          defined(pageType) => '/'+ pageType->slug.current +'/'+  slug.current,
          !defined(pageType) => '/'+  slug.current
      
      ),`
      : `${acc} 'href_${key}': select(
            defined(pageType) => '/'+ pageType->slug_${key}.current +'/'+  slug_${key}.current,
            !defined(pageType) => '/'+  slug_${key}.current
      ),`;
  }, "");
  return `
  'langSwitchData': {
      ${query}
  }
  `;
};
export type LangSwitcherResult = {
  langSwitchData?: { [k: string]: string };
};

export default LangSwitcherQuery;
