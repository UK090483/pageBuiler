import { Config } from "../../PageBuilder/types";
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

const group = {
  name: "style",
  title: "Style",
};

const style = [
  {
    title: "Top Space",
    name: "topSpace",
    type: "string",
    group: "style",
    options: {
      list: [...sizesList()],
    },
  },
  {
    title: "Bottom Space",
    name: "bottomSpace",
    type: "string",
    group: "style",
    options: {
      list: [...sizesList()],
    },
  },
  {
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
  },
];

function Conf(): Config {
  return {
    hooks: {
      onCreateComponents: ({ config, result }) => {
        result.map((component) => {
          component.groups = [
            ...(component.groups ? component.groups : []),
            group,
          ];
          //@ts-ignore
          component.fields = [
            ...(component.fields ? component.fields : []),
            ...style,
          ];
          return component;
        });

        return result;
      },
    },
  };
}
export default Conf;
