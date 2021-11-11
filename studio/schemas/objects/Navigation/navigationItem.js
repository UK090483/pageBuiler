export default {
  title: "Navigation Item",
  name: "navigationItem",
  type: "object",
  fields: [
    { name: "label", type: "string", title: "Label" },
    {
      title: "Internal link",
      description: "Use this to link between pages on the website",
      name: "internalLink",
      type: "reference",
      weak: false,
      to: [{ type: "page" }],
    },
    {
      title: "External link",
      name: "link",
      type: "url",
    },
  ],
};
