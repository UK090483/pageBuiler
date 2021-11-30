import { defaultBockContent } from "../snippets";
import { widthLocalization } from "../Localizer";

export default widthLocalization({
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
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => Rule.required(),
      localize: true,
    },
    // {
    //   name: "pageType",
    //   type: "reference",
    //   to: [{ type: "pageType" }],
    // },
    // {
    //   name: "pageHeader",
    //   type: "pageHeader",
    //   title: "Header",
    // },

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
