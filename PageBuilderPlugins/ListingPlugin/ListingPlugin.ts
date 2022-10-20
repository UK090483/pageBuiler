import { Config, SanityObjectDefinition } from "../../PageBuilder/types";

import { defaultEmptyArray } from "../../PageBuilder/helper";

type ListingPlugProps = {
  name: string;
};
function Conf(props?: ListingPlugProps): Config {
  const name = props?.name || "listing";
  return {
    hooks: {
      onCreateComponents: ({ config, result }) => {
        return [...result, createListingComponent(config, name)];
      },
    },
  };
}

export default Conf;

export function createListingComponent(
  config: Config,
  name: string
): SanityObjectDefinition {
  const contentTypesWithListing = defaultEmptyArray(config.contentTypes).filter(
    (i) =>
      i.listing && Array.isArray(i.listing)
        ? i.listing.includes(name)
        : i.listing === name
  );

  return {
    title: "Listing",
    name,
    type: "object",
    query: `
    contentType,
    'items':select(
     ${contentTypesWithListing
       .map((i) => `contentType == "${i.name}" => [...${i.name}Items[]->] `)
       .join(",")}
    )[]{_id, 'slug': slug.current , title,description,'featuredImage':featuredImage{${
      config.options?.image.query
    }} }

    `,
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
        type: "array",
        of: [{ type: "reference", to: [{ type: i.name }] }],
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
