import { PageBuilderLocales } from "PageBuilder/types";

type navigationQueryProps = {
  locales?: PageBuilderLocales;
  locale?: string;
  slugQuery: (props: { locale?: string }) => string;
  items?: { name: string }[];
};

const navigationQuery = (props: navigationQueryProps) => {
  const { slugQuery, locales, locale, items = [{ name: "mainNav" }] } = props;

  const link = `
    href,
    ...(internal->{ 'internal':${slugQuery({ locale })}})
    `;

  const langSwitcher = locales
    ? `
  'langSwitcher' : {
    ${Object.entries(locales)
      .map(([key, lang]) => {
        return `'${key}': { 'title':'${lang.title}', 'link':${slugQuery({
          locale: key,
        })} }`;
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
