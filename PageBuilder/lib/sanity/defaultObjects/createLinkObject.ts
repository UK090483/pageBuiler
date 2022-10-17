import { defaultEmptyArray } from "../../../helper";
import { Config, SanityObjectDefinition } from "../../../types";

function createLinkObject(config: Config): SanityObjectDefinition {
  return {
    name: "link",
    title: "Link",
    type: "object",
    fields: [
      {
        name: "internal",
        title: "Internal Link",
        type: "reference",

        to: [
          ...defaultEmptyArray(config.contentTypes)
            .filter((c) => c.hasPage)
            .map((c) => ({ type: c.name })),
        ],
        options: {
          disableNew: true,
        },
        hidden: ({ parent }) => !!parent.href,
      },
      {
        name: "href",
        title: "External Link",
        type: "url",
        hidden: ({ parent }) => !!parent.internal,
      },
    ],
  };
}

export default createLinkObject;
