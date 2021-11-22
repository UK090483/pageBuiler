export default {
  name: "siteConfig",
  title: "Site config",
  type: "document",
  fields: [
    {
      name: "indexPage",
      title: "Home Page",
      type: "reference",
      to: [{ type: "page" }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "mainNav",
      type: "array",
      title: "Main Navigation",
      of: [
        { type: "navigationItem" },
        { type: "navigationDropdown" },
        { type: "navigationMegaMenu" },
      ],
      validation: (Rule) => Rule.required(),
    },
    {
      name: "extraNav",
      type: "array",
      title: "Extra Navigation",
      of: [{ type: "navigationItem" }, { type: "navigationDropdown" }],
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Default / Seo",
      name: "seo",
      type: "seo",
    },
  ],
};
