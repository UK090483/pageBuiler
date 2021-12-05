import { defaultBockContent } from "../snippets";
import { withLocalization } from "../Localizer";

export default withLocalization({
  type: "document",
  name: "page",
  title: "Page",

  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
      localize: true,
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      localize: true,
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => Rule.required(),
      localize: true,
    },
    {
      name: "pageType",
      type: "reference",
      to: [{ type: "pageType" }],
    },
    {
      name: "featuredImage",
      type: "defaultImage",
    },

    defaultBockContent,

    {
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
      options: {
        collapsible: true,
      },
    },
  ],
  preview: {
    select: {
      title: "slug.current",
      subtitle: "title",
    },
  },
});
