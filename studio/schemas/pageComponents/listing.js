import { withLocalization } from "../Localizer";

export default withLocalization({
  title: "Listing",
  name: "listing",
  type: "object",
  fields: [
    { name: "title", type: "string", title: "Title", localize: true },
    {
      title: "Variant",
      name: "variant",
      type: "string",
      options: {
        list: [
          { title: "Grid", value: "grid" },
          { title: "List", value: "list" },
          { title: "Carousel", value: "carousel" },
        ],
      },
    },
    {
      title: "Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Content Type", value: "contentType" },
          { title: "Custom", value: "custom" },
        ],
        layout: "radio",
      },
    },
    {
      name: "contentType",
      type: "string",
      options: {
        list: [
          { title: "Page", value: "page" },
          { title: "Post", value: "post" },
          { title: "Projects", value: "project" },
        ],
        layout: "radio",
      },
      hidden: ({ parent }) => parent?.type !== "contentType",
    },
    {
      name: "customItems",
      type: "array",
      of: [{ type: "reference", to: [{ type: "page" }] }],
      hidden: ({ parent }) => parent?.type !== "custom",
    },
  ],
});
