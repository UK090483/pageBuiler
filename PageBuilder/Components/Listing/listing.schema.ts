import {
  buildVariantFields,
  buildFilterFields,
  buildReferenceListFields,
} from "../../lib/listingBuilder/buildSchema";
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
    ...buildVariantFields(items),
    ...buildFilterFields(items),
    ...buildReferenceListFields(items),
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
