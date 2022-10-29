import { ObjectDefinition } from "../../../types";

const imageGalleryItem = {
  title: "Image Gallery Item",
  type: "image",

  fields: [
    { name: "title", title: "title", type: "string", localize: true },
    { name: "text", title: "Text", type: "text", localize: true },

    {
      title: "Variant",
      name: "variant",
      type: "string",
      options: {
        list: [
          { title: "Contain", value: "contain" },
          { title: "Cover", value: "cover" },
        ],
      },
    },

    {
      name: "size",
      title: "Size",
      type: "string",

      options: {
        list: [
          // { title: "2 * width", value: "2w" },
          // { title: "2 * height", value: "2h" },
          { title: "2 * width & height  ", value: "2wh" },
        ],
      },
    },
  ],
};

export const gallerySchema: ObjectDefinition = {
  title: "Gallery",
  name: "imageGalleryPlug",
  type: "object",
  fields: [
    { name: "name", title: "title", type: "string" },
    {
      name: "items",
      title: "Images",
      type: "array",
      of: [imageGalleryItem],
    },
    {
      name: "rows",
      title: "Rows",
      type: "number",
      initialValue: 4,
      validation: (Rule) => Rule.required().integer().min(1).max(8),
    },
    {
      name: "rows_mobile",
      title: "Rows Mobile",
      type: "number",
      initialValue: 2,
      validation: (Rule) => Rule.required().integer().min(1).max(8),
    },
    {
      name: "ratio",
      title: "Ratio",
      type: "string",
      initialValue: "1:1",
      options: {
        list: ["1:1", "16:9", "2:3", "3:2"],
      },
    },
    {
      title: "Variant",
      name: "imageView",
      type: "string",
      options: {
        list: [
          { title: "Contain", value: "contain" },
          { title: "Cover", value: "cover" },
        ],
      },
    },
    {
      title: "Variant",
      name: "variant",
      type: "string",
      options: {
        list: [
          { title: "Grid", value: "grid" },
          { title: "Masonry", value: "masonry" },
        ],
      },
    },
    {
      title: "LightBox",
      name: "lightBox",
      type: "boolean",
    },
  ],
  preview: {
    select: {
      name: "name",
    },
    prepare({ name }) {
      return {
        title: "ImageGallery: " + name,
      };
    },
  },
};
