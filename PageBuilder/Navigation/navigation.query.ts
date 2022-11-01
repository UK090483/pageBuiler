import { localizedQueryFn } from "PageBuilder/helper/withLocalization";
import { SLUG_PROJECTION, locale } from "../constants";

const locales = locale;
const items = [{ name: "mainNav" }];

export const navigationQuery: localizedQueryFn = (locale) => {
  const link = `
    href,
    ...(internal->{ 'internal':${SLUG_PROJECTION(locale)}})
    `;

  const langSwitcher = locales
    ? `
  'langSwitcher' : {
    ${Object.entries(locales)
      .map(([key, lang]) => {
        return `'${key}': { 'title':'${lang.title}', 'link':${SLUG_PROJECTION(
          key
        )} }`;
      })
      .join(",")}
  },
  `
    : ``;

  const label = locale ? `'label':coalesce(label_${locale},label)` : "label";

  const navigationItems = items.reduce((acc, { name }) => {
    const nav = `
    '${name}':${name}[]{
        ${label},
       'link':link{${link}},
       'items':items[]{
         ${label},
         'link':link{${link}},
       }
    },`;

    return acc + nav;
  }, "");

  const result = `'menu':{
    ...(*[ _type == 'menuConfig'][0]{
        ${navigationItems}
    }),
   ${langSwitcher}
},`;

  return result;
};

export default navigationQuery;
