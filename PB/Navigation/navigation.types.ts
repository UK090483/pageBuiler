type MenuItem<L extends unknown = unknown> = {
  label: string;
  items?: MenuItem<L>;
  link?: L;
};

export type LangSwitcherResult = {
  [key: string]: { title: string; link: string };
};

export type NavigationResult<
  L extends unknown = { internal?: string; href?: string }
> = {
  menu: {
    mainNav: MenuItem<L>[];
    bla: string;
    langSwitcher?: LangSwitcherResult;
  };
};
