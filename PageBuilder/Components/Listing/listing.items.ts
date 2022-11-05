import { listingBuilderItem } from "PageBuilder/lib/listingBuilder/types";
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
      name: "mainImage",
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
  filter?: { value: string; title: string; queryFilter: string }[];
  projection?: string;
  items?: ArrayOfType[];
};

export const items: listingBuilderItem[] = [
  {
    name: "person",

    title: "Person",
    items: [{ type: "reference", to: [{ type: "person" }] }],
  },
  {
    name: "page",

    title: "Page",
    items: [{ type: "reference", to: [{ type: "page" }] }],
  },
  {
    name: "post",
    title: "Post",
    filter: [
      {
        title: "All",
        value: "all",
        queryFilter: { filter: `title match "mag*"` },
      },
      {
        title: "With A",
        value: "withA",
        queryFilter: { filter: `title match "a*"` },
      },
    ],
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
