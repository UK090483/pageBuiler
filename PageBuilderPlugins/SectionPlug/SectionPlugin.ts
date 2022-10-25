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

function Conf(): Config {
  return {
    components: [
      {
        name: "section",
        title: "Section",
        groups: [
          {
            name: "content",
            title: "Content",
          },
          {
            name: "style",
            title: "Style",
          },
        ],
        fields: [
          {
            name: "title",
            type: "string",
            title: "Title",
            localize: true,
            group: "content",
          },
          {
            name: "content",
            type: "defaultRichtext",
            title: "Content",
            localize: true,
            group: "content",
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
              ],
            },
          },
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
        ],
      },
    ],
  };
}
export default Conf;
