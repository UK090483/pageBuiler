import { ObjectDefinition } from "../types";

export function sizesList(skip?: string | string[]) {
  const list = [
    { title: "s", value: "s" },
    { title: "m", value: "m" },
    { title: "l", value: "l" },
    { title: "xl", value: "xl" },
    { title: "xxl", value: "xxl" },
    { title: "no space", value: "none" },
  ];
  if (!Array.isArray(skip)) return list;
  return list.filter((listItem) => !skip.includes(listItem.value));
}
export function colorList(skip?: string | string[]) {
  const list = [
    { title: "Primary", value: "primary" },
    { title: "Secondary", value: "secondary" },
    { title: "Grey", value: "grey" },
    { title: "Dark-Grey", value: "dark-grey" },
  ];
  if (!Array.isArray(skip)) return list;
  return list.filter((listItem) => !skip.includes(listItem.value));
}

type colorResult = "primary" | "secondary" | "grey" | "dark-grey";
type spaceResult = "s" | "m" | "l" | "xl" | "xxl" | "none";

const group = {
  name: "style",
  title: "Style",
};

const topSpace = {
  title: "Top Space",
  name: "topSpace",
  type: "string",
  group: "style",
  options: {
    list: [...sizesList()],
  },
};

export const topSpaceProjection = `topSpace,`;
export type topSpaceResult = { topSpace?: spaceResult };

const bottomSpace = {
  title: "Bottom Space",
  name: "bottomSpace",
  type: "string",
  group: "style",
  options: {
    list: [...sizesList()],
  },
};

export const bottomSpaceProjection = `bottomSpace,`;
export type bottomSpaceResult = { bottomSpace?: spaceResult };

const backgroundColor = {
  title: "Background Color",
  name: "backgroundColor",
  type: "string",
  group: "style",
  options: {
    list: [
      { title: "Primary", value: "primary" },
      { title: "Secondary", value: "secondary" },
      { title: "Grey", value: "grey" },
      { title: "Dark-Grey", value: "dark-grey" },
    ],
  },
};

export const backgroundColorProjection = `backgroundColor,`;
export type backgroundColorResult = {
  backgroundColor?: colorResult;
};

const style = [topSpace, bottomSpace, backgroundColor];

export const componentStyleProjection = `
${topSpaceProjection}
${bottomSpaceProjection}
${backgroundColorProjection}
`;

export type componentStyleResult = topSpaceResult &
  bottomSpaceResult &
  backgroundColorResult;

export function addComponentStyle(
  component: ObjectDefinition
): ObjectDefinition {
  component.groups = [...(component.groups ? component.groups : []), group];
  component.fields = [...(component.fields ? component.fields : []), ...style];

  return component;
}
