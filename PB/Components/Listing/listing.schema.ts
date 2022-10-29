import { ObjectDefinition } from "../../types";

const items = [
  { name: "page", title: "Page" },
  {
    name: "post",
    title: "Post",
    variants: [
      { value: "grid", title: "Grid" },
      { value: "list", title: "List" },
    ],
  },
];

const listingSchema: ObjectDefinition = {
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

export default listingSchema;
