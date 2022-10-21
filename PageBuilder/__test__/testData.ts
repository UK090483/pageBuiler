import { SanityObjectDefinition } from "PageBuilder/types";

export const testData = {
  contentType: {
    one: { name: "contentType1_name", title: "contentType1_title" },
    two: { name: "contentType2_name", title: "contentType2_title" },
  },
  linkQuery: "'internal':internal->slug.current ,href, ",
  linkQueryEn:
    "...(internal->{ 'internal': coalesce(slug_en,slug).current }) ,href, ",
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

  finalConfig: {
    options: {
      link: { query: () => "testLinkQuery" },
      image: { query: () => "testImageQuery" },
      slug: { query: () => "testSlugQuery" },
    },
  },

  get field() {
    return {
      text: { name: "text", title: "text", type: "text" },
      string: { name: "string", title: "string", type: "string" },
      number: { name: "number", title: "number", type: "number" },
      boolean: { name: "boolean", title: "boolean", type: "boolean" },
      slug: { name: "slug", title: "slug", type: "slug" },
      link: { name: "link", title: "link", type: "link" },
      date: { name: "date", title: "date", type: "date" },
      datetime: { name: "datetime", title: "datetime", type: "datetime" },
      array: { name: "array", title: "array", type: "array" },
    };
  },
};
