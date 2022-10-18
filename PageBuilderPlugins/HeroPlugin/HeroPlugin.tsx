import { Config } from "../../PageBuilder/types";

function Conf(): Config {
  return {
    components: [
      {
        name: "hero",
        title: "Hero",
        fields: [
          {
            title: "Title",
            name: "title",
            type: "string",
          },
          {
            title: "Image",
            name: "image",
            type: "image",
          },
          {
            title: "Text",
            name: "text",
            type: "array",
            of: [
              {
                type: "block",
                title: "Block",
                styles: [{ title: "Normal", value: "normal" }],
                lists: [],
                marks: {},
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
      },
    ],
  };
}
export default Conf;
