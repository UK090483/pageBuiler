import { ImageDefinition } from "PageBuilder/types";

const defaultImage: ImageDefinition = {
  name: "defaultImage",
  type: "image",
  options: {
    hotspot: true,
  },
  fields: [
    {
      name: "alt",
      title: "alt",
      type: "string",

      description: "Important for SEO and accessibility.",
      options: {
        isHighlighted: true,
      },
      validation: (Rule) => {
        return Rule.custom((field, context) => {
          //@ts-ignore
          return "asset" in context.parent && field === undefined
            ? "Required! (think about non-visual readers)"
            : true;
        });
      },
    },
  ],
};

export default defaultImage;
