import { appConfig } from "../../appConfig";
import { makeInternational } from "../../helper";
import { defaultBockContent } from "../../snippets";

export default {
  type: "document",
  name: "post",
  title: "Blog Post",
  fields: [
    ...makeInternational({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => Rule.required(),
      description: `erreichbar unter ${appConfig.url}/posts/...`,
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "headerImage",
      type: "image",
      title: "Header Image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "previewImage",
      type: "image",
      title: "Preview Image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      type: "array",
      title: "Categories",
      of: [
        {
          type: "reference",
          to: {
            type: "postCategory",
          },
        },
      ],
    },
    {
      title: "Release date",
      name: "releaseDate",
      type: "date",
    },
    {
      name: "default_header",
      type: "boolean",
      title: "Use default Header",
    },
    defaultBockContent,
    // {
    //   name: "excerpt",
    //   type: "text",
    //   title: "Excerpt",
    //   description:
    //     "This ends up on summary pages, on Google, when people share your post in social media.",
    // },
    // {
    //   name: "excerpt_en",
    //   type: "text",
    //   title: "Excerpt En",
    //   description:
    //     "This ends up on summary pages, on Google, when people share your post in social media.",
    // },
    {
      title: "SEO / Share Settings",
      name: "seo",
      type: "seo",
    },
  ],
  preview: {
    select: {
      title: "slug.current",
      subtitle: "title",
    },
  },
};
