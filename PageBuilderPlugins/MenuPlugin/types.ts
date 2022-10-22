type MenuItem<L extends unknown = unknown> = {
  label: string;
  items?: MenuItem<L>;
  link?: L;
};

export type LangSwitcherResult = {
  [key: string]: { title: string; link: string };
};

export type MenuPluginResult<
  T extends string = "mainNav",
  L extends unknown = { internal?: string; href?: string }
> = {
  menu: {
    mainNav: MenuItem<L>[];

    langSwitcher?: LangSwitcherResult;
  };
};

const link = (slugQuery: string) => `
href,
...(internal->{ 'internal':${slugQuery} })`;

const getQuery =
  (slugQuery: (locale?: string) => string) => (locale?: string) =>
    `'menu':{
  ...(*[ _type == 'menuConfig'][0]{
       'mainNav':mainNav[]{
           label,
          'link':link{${link(slugQuery(locale))}},
          'items':items[]{
            label,
            'link':link{${link(slugQuery(locale))}},
          }
       }
  })
},`;
