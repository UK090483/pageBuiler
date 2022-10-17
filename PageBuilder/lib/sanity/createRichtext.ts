import { Config, RichText } from "PageBuilder/types";
import createLinkObject from "./defaultObjects/createLinkObject";

const createRichtext = (config: Config) => {
  return config.richText
    ? config.richText.map((i) => resolveRichtextItem(config, i))
    : [];
};

const resolveRichtextItem = (config: Config, item: RichText) => {
  const {
    name,
    title,
    styles,
    marks: { annotations, decorators },
    plugs,
  } = item;
  return {
    name,
    title,
    type: "array",
    of: [
      {
        type: "block",
        title: "Block",
        styles,
        marks: {
          annotations: [...annotations, createLinkObject(config)],
          decorators,
        },
      },
      ...plugs.map((i) => ({ type: i })),
    ],
  };
};

export default createRichtext;
