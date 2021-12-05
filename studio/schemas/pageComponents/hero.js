import { withLocalization } from "../Localizer";

export default withLocalization({
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      localize: true,
    },
    {
      title: "Text",
      name: "text",
      type: "array",
      localize: true,
      of: [
        {
          type: "block",
          title: "Block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
          marks: {
            decorators: [],
            annotations: [{ name: "image", type: "image", title: "Image" }],
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title",
    },
    prepare({ title }) {
      return {
        title: title,
      };
    },
  },
});
