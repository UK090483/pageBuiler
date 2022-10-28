import { Config, SanityObjectDefinition } from "../../PageBuilder/types";
import query from "./query";

export type ListingItem = {
  title: string;
  name: string;
  variants?: { title: string; value: string }[];
};

type ListingPlugProps = {
  name?: string;
  items: ListingItem[];
  onCreateQuery?: (props: { query: string }) => string;
};
function Conf(props: ListingPlugProps): Config {
  const name = props.name || "listing";
  return {
    hooks: {
      onCreateComponents: ({ config, result }) => {
        return [
          ...result,
          createListingComponent(
            config,
            name,
            props.items,
            props.onCreateQuery
          ),
        ];
      },
    },
  };
}

export default Conf;

export function createListingComponent(
  config: Config,
  name: string,
  items: ListingItem[],
  onCreateQuery?: (props: { query: string }) => string
): SanityObjectDefinition {
  return {
    title: "Listing",
    name,
    type: "object",
    query: ({ locale }) => {
      const res = query({
        locale,
        items,
        slugQuery: config.options ? config.options.slug.query({ locale }) : "",
        imageQuery:
          config.options && typeof config.options.image.query === "string"
            ? config.options.image.query
            : "",
      });
      return onCreateQuery ? onCreateQuery({ query: res }) : res;
    },

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
      // Build variants List
      ...items
        .filter((i) => !!i.variants)
        .map((i) => ({
          title: `Variants`,
          name: `${i.name}Variants`,
          type: "string",
          options: {
            list: [
              ...[...(i.variants ? i.variants : [])].map((i) => ({
                title: i.title,
                value: i.value,
              })),
            ],
          },
          hidden: (props: any) => props?.parent?.contentType !== i.name,
        })),
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
