export type SpaceStyle = "s" | "m" | "l" | "xl" | "xxl" | "none";
export type color = "primary" | "secondary" | "grey" | "dark-grey";

export type ComponentStyle = {
  backgroundColor?: color;
  bottomSpace?: SpaceStyle;
  topSpace?: SpaceStyle;
};
