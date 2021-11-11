import { defaultBockContent } from "../snippets";

export default {
  type: "document",
  name: "page",
  title: "Page",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    },

    {
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "pageType",
      type: "reference",
      to: [{ type: "pageType" }],
    },
    {
      name: "pageHeader",
      type: "pageHeader",
      title: "Header",
    },
    {
      name: "footer",
      description: "if empty it will use the default Footer",
      type: "reference",
      title: "Footer",
      to: [{ type: "footer" }],
    },
    defaultBockContent,

    {
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
    },
  ],
  preview: {
    select: {
      title: "slug.current",
      subtitle: "title",
    },
  },
};
