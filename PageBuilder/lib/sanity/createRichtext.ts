import { Config, RichText } from "PageBuilder/types";

const createRichtext = (config: Config) => {
  return config.richText
    ? config.richText.map((i) => resolveRichtextItem(config, i))
    : [];
};

const resolveRichtextItem = (config: Config, item: RichText) => {
  const { name, styles, marks, plugs, ...rest } = item;

  const annotations = marks?.annotations || [];
  const decorators = marks?.decorators || [];

  return {
    name,
    type: "array",
    of: [
      {
        type: "block",
        title: "Block",
        ...rest,
        marks: {
          annotations: [...annotations],
          decorators: [
            { title: "Strong", value: "strong" },
            { title: "Emphasis", value: "em" },
            { title: "Code", value: "code" },
            { title: "Underline", value: "underline" },
            { title: "Strike", value: "strike-through" },
            ...decorators,
          ],
        },
      },
      ...plugs.map((i) => ({ type: i })),
    ],
  };
};

export default createRichtext;
