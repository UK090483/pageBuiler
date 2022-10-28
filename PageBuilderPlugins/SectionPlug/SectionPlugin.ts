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
            title: "Text Direction",
            name: "textDirection",
            type: "string",
            group: "style",
            options: {
              list: [
                { title: "Left (default)", value: "left" },
                { title: "Center", value: "center" },
                { title: "Right", value: "right" },
              ],
            },
          },
        ],
      },
    ],
  };
}
export default Conf;
