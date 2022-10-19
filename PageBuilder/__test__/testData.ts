import { SanityObjectDefinition } from "PageBuilder/types";

export const testData = {
  contentType: {
    one: { name: "contentType1_name", title: "contentType1_title" },
    two: { name: "contentType2_name", title: "contentType2_title" },
  },
  get object() {
    return {
      one: {
        name: "component1_name",
        title: "component1_title",
        fields: [this.field.text, this.field.string],
      } as Omit<SanityObjectDefinition, "type">,
      two: {
        name: "component2_name",
        title: "component2_title",
        fields: [this.field.text, this.field.string],
      } as Omit<SanityObjectDefinition, "type">,
    };
  },

  get field() {
    return {
      text: { name: "text", title: "text", type: "text" },
      string: { name: "string", title: "string", type: "string" },
      number: { name: "number", title: "number", type: "number" },
      boolean: { name: "boolean", title: "boolean", type: "boolean" },
      slug: { name: "slug", title: "slug", type: "slug" },
      link: { name: "link", title: "link", type: "link" },
      get array() {
        return { name: "array", title: "array", type: "array", of: [] };
      },
    };
  },
};
