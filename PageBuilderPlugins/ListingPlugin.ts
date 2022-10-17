import { Config, SanityObjectDefinition } from "../PageBuilder/types";

import { defaultEmptyArray } from "../PageBuilder/helper";
function Conf(): Config {
  return {
    hooks: {
      onCreateComponents: ({ config, result }) => {
        return [...result, createListingComponent(config)];
      },
    },
  };
}

export default Conf;

export function createListingComponent(config: Config): SanityObjectDefinition {
  const contentTypesWithListing = defaultEmptyArray(config.contentTypes).filter(
    (i) => i.hasListing
  );

  return {
    title: "Listing",
    name: "listing",
    type: "object",
    fields: [
      { name: "name", type: "string", title: "Name" },
      {
        title: "Content type",
        name: "contentType",
        type: "string",
        options: {
          list: [
            ...contentTypesWithListing.map((i) => ({
              title: i.title,
              value: i.name,
            })),
          ],
          layout: "radio",
        },
      },
      ...contentTypesWithListing.map((i) => ({
        title: `${i.title} Items`,
        name: `${i.name}Items`,
        type: "reference",
        to: [{ type: i.name }],
        hidden: (props: any) => props?.parent?.contentType !== i.name,
      })),
    ],
    preview: {
      select: {
        name: "name",
        contentType: "contentType",
      },
      prepare({ name, contentType }: any) {
        return {
          title: name ? name : contentType,
          subtitle: `Listing: ${contentType ? " - " + contentType : ""}`,
        };
      },
    },
  };
}
