import { Config, SanityObjectDefinition } from "../../PageBuilder/types";

function Conf(): Config {
  return {
    hooks: {
      onCreateComponents: ({ config, result }) => {
        return [...result, getHero(config)];
      },
    },
  };
}
export default Conf;

function getHero(config: Config) {
  return {
    name: "hero",
    title: "Hero",
    type: "object",
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
        title: "Content",
        name: "content",
        type: "heroRichtext",
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
  } as SanityObjectDefinition;
}
