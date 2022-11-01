import { addComponentStyle } from "../componentStyle";
import { ObjectDefinition } from "../../types";

const sectionSchema: ObjectDefinition = {
  name: "section",
  title: "Section",
  type: "object",
  groups: [
    {
      name: "content",
      title: "Content",
      default: true,
    },
    {
      name: "style",
      title: "Style",
    },
    {
      name: "image",
      title: "Image",
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
    {
      title: "Image",
      name: "image",
      type: "defaultImage",
      group: "image",
    },
    {
      title: "Image Position",
      name: "imagePosition",
      type: "string",
      options: {
        list: [
          { title: "Left (default)", value: "l" },
          { title: "Right", value: "r" },
        ],
      },
      group: "image",
      hidden: (props: any) => !props?.parent?.image,
    },
  ],
};

export default addComponentStyle(sectionSchema);
