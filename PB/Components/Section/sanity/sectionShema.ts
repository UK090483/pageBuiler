import { addComponentStyle } from "PB/Components/componentHelper";

export const sectionSchema = addComponentStyle({
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
});
