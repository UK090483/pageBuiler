import { addComponentStyle } from "../componentHelper";
import { ObjectDefinition } from "../../types";

const sectionSchema: ObjectDefinition = {
  name: "section",
  title: "Section",
  type: "object",
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
      type: "defaultRichText",
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
};

export default addComponentStyle(sectionSchema);
