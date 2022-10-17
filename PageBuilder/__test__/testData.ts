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
        fields: [this.field.text, this.field.text],
      } as Omit<SanityObjectDefinition, "type">,
    };
  },

  get field() {
    return {
      text: { name: "text", title: "text", type: "string" },
    };
  },
};
