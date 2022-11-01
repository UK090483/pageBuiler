import { ObjectDefinition, ArrayOfType } from "../../types";
import { addComponentStyle } from "../componentStyle";
import { items } from "./listing.items";

const listingSchema: ObjectDefinition = {
  title: "Listing",
  name: "listing",
  type: "object",
  groups: [{ name: "content", title: "Content", default: true }],

  fields: [
    { name: "name", type: "string", title: "Name", group: "content" },
    {
      group: "content",
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
        group: "content",
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
    ...items
      .filter((i) => !!i.items)
      .map((i) => ({
        group: "content",
        title: `${i.title} Items`,
        name: `${i.name}Items`,
        type: "array",
        of: [...(i.items ? i.items : [])],
        hidden: (props: any) => props?.parent?.contentType !== i.name,
      })),
    // Build item List
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

export default addComponentStyle(listingSchema);
