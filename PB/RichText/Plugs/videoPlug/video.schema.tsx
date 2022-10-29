import { ObjectDefinition } from "../../../types";

const VideoPlugSchema: ObjectDefinition = {
  title: "Player",
  name: "videoPlug",
  type: "object",

  fields: [
    {
      type: "url",
      title: "Url",
      name: "url",
    },
    {
      type: "array",
      title: "Urls",
      name: "urls",

      of: [
        {
          type: "object",
          fields: [
            { title: "Title", type: "string", name: "title" },
            {
              type: "url",
              title: "Url",
              name: "url",
              validation: (Rule) => Rule.required(),
            },
            {
              type: "image",
              title: "Alternative Preview Image",
              name: "image",
            },
          ],
          preview: {
            select: {
              url: "url",
              media: "image",
              title: "title",
            },
            prepare({ url, media, title }) {
              return {
                title: title || url,
                media,
              };
            },
          },
        },
      ],
    },
  ],

  preview: {
    select: {
      url: "url",
    },
    prepare({ url }) {
      return {
        title: url || "(url missing)",
      };
    },
  },
};

export default VideoPlugSchema;
