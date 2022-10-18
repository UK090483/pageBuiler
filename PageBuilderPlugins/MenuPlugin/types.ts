type MenuItem<L extends unknown = unknown> = {
  label: string;
  items?: MenuItem<L>;
  link?: L;
};

export type MenuPluginResult<
  T extends string = "mainNav",
  L extends unknown = { internal?: string; href?: string }
> = {
  menu: {
    [K in T]: MenuItem<L>[];
  };
};
