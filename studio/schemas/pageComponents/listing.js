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
          { title: "Events", value: "event" },
          { title: "Documentations", value: "documentations" },
          { title: "Persons", value: "persons" },
          { title: "Testimonials", value: "testimonials" },
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
    {
      name: "personItems",
      type: "array",
      of: [{ type: "reference", to: [{ type: "person" }] }],
      hidden: ({ parent }) =>
        !(parent?.type === "contentType" && parent?.contentType === "persons"),
    },
    {
      name: "testimonialItems",
      type: "array",
      of: [{ type: "reference", to: [{ type: "testimonial" }] }],
      hidden: ({ parent }) =>
        !(
          parent?.type === "contentType" &&
          parent?.contentType === "testimonials"
        ),
    },
    {
      title: "Show Title",
      name: "showTitle",
      type: "boolean",
      hidden: ({ parent }) =>
        !(parent?.type === "custom" || parent?.contentType === "persons"),
    },
  ],
});
