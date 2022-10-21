import { Config, SanityObjectDefinition } from "../../PageBuilder/types";

import { defaultEmptyArray } from "../../PageBuilder/helper";
import { ProfilePageJsonLd } from "next-seo";

type ListingItem = {
  title: string;
  name: string;
};

type ListingPlugProps = {
  name?: string;
  items: ListingItem[];
};
function Conf(props: ListingPlugProps): Config {
  const name = props.name || "listing";
  return {
    hooks: {
      onCreateComponents: ({ config, result }) => {
        return [...result, createListingComponent(config, name, props.items)];
      },
    },
  };
}

export default Conf;

export function createListingComponent(
  config: Config,
  name: string,
  items: ListingItem[]
): SanityObjectDefinition {
  return {
    title: "Listing",
    name,
    type: "object",
    query: `
    contentType,
    'items':select(
     ${items
       .map((i) => `contentType == "${i.name}" => [...${i.name}Items[]->] `)
       .join(",")}
    )[]{_id, 'slug': ${config.options?.slug.query({
      locale: "",
    })} , title,description,'featuredImage':featuredImage{${
      config.options?.image.query
    }}}

    `,
    fields: [
      { name: "name", type: "string", title: "Name" },
      {
        title: "Content type",
        name: "contentType",
        type: "string",
        options: {
          list: [
            ...items.map((i) => ({
              title: i.title,
              value: i.name,
            })),
          ],
          layout: "radio",
        },
      },

      // Build Reference List
      ...items.map((i) => ({
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
