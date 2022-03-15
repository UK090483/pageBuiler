import { withLocalization } from "../Localizer";
import { AiOutlineOrderedList } from "react-icons/ai";

export default withLocalization({
  title: "Listing",
  name: "listing",
  type: "object",
  icon: AiOutlineOrderedList,
  fields: [
    { name: "title", type: "string", title: "Title", localize: true },

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
      hidden: ({ parent }) => !(parent?.type === "contentType"),
    },
    {
      name: "customItems",
      type: "array",
      of: [{ type: "reference", to: [{ type: "page" }] }],
      hidden: ({ parent }) => !(parent?.type === "custom"),
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
      name: "eventIncludeTags",
      type: "array",
      description: "shows all Events if left empty",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
          options: { disableNew: true },
        },
      ],
      hidden: ({ parent }) =>
        !(parent?.type === "contentType" && parent?.contentType === "event"),
    },
    {
      name: "documentationsIncludeTags",
      type: "array",
      description: "shows all Documentations if left empty",
      of: [
        {
          type: "reference",
          to: [{ type: "tag" }],
          options: { disableNew: true },
        },
      ],
      hidden: ({ parent }) =>
        !(
          parent?.type === "contentType" &&
          parent?.contentType === "documentations"
        ),
    },
    {
      title: "Variant",
      name: "eventVariant",
      type: "string",
      options: {
        list: [
          { title: "Accordion (default)", value: "accordion" },
          { title: "Open", value: "open" },
        ],
      },
      hidden: ({ parent }) =>
        !(parent?.type === "contentType" && parent?.contentType === "event"),
    },
    {
      title: "hide done Events",
      name: "hideDoneEvents",
      type: "boolean",
      hidden: ({ parent }) =>
        !(parent?.type === "contentType" && parent?.contentType === "event"),
    },
    {
      title: "Show Title",
      name: "showTitle",
      type: "boolean",
      hidden: ({ parent }) =>
        !(
          parent?.type === "custom" ||
          parent?.contentType === "persons" ||
          parent?.contentType === "event" ||
          parent?.contentType === "documentations"
        ),
    },
  ],
  preview: {
    select: {
      title: "title",
      contentType: "contentType",
      image: "image",
    },
    prepare(selection) {
      const { contentType, title } = selection;

      return {
        title: title,
        subtitle: `Section : ${contentType ? contentType : ""}`,
      };
    },
  },
});
