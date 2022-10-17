export type MenuPluginResult<
  T extends string = "mainNav",
  L extends unknown = { internal?: string; href?: string }
> = {
  [K in T]: MenuItem<L>[];
};

type MenuItemLink<L extends unknown = unknown> = {
  label: string;
  link: L;
};
type MenuItemList<L extends unknown = unknown> = {
  label: string;
  items: MenuItem<L>;
};

export type MenuItem<L extends unknown = unknown> =
  | MenuItemLink<L>
  | MenuItemList<L>;
