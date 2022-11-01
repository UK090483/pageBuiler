import { ArrayOfType } from "PageBuilder/types";

const customItem: ArrayOfType = {
  name: "bla",
  type: "object",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      description: "should be between 50 and 160 characters",
      validation: (Rule: any) => [
        Rule.max(160).error("should not be more than 160 characters"),
        Rule.min(50).warning("should be at least 50 characters"),
      ],
    },
    {
      name: "featuredImage",
      type: "image",
    },
    {
      name: "link",
      type: "link",
    },
  ],
};

export type listingItem = {
  name: string;
  title: string;
  reference?: string;
  variants?: { value: string; title: string }[];
  items?: ArrayOfType[];
};

export const items: listingItem[] = [
  {
    name: "person",
    reference: "person",
    title: "Person",
    items: [{ type: "reference", to: [{ type: "person" }] }],
  },
  {
    name: "page",
    reference: "page",
    title: "Page",
    items: [{ type: "reference", to: [{ type: "page" }] }],
  },
  {
    name: "post",
    title: "Post",
    reference: "post",
    variants: [
      { value: "grid", title: "Grid" },
      { value: "list", title: "List" },
    ],
    items: [{ type: "reference", to: [{ type: "post" }] }],
  },
  {
    name: "custom",
    title: "Custom",
    items: [customItem],
  },
];
