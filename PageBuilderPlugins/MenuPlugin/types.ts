type MenuItem<L extends unknown = {}> = {
  label: string;
  items?: MenuItem<L>;
  link?: L;
};

export type LangSwitcherResult = {
  [key: string]: { title: string; link: string };
};

export type navigationResult = {
  mainNav: MenuItem[];
  langSwitcher?: LangSwitcherResult;
};
