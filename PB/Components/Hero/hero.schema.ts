import { ObjectDefinition } from "../../types";
const HeroObject: ObjectDefinition = {
  name: "hero",
  title: "Hero",
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Content",
      name: "content",
      type: "heroRichText",
      localize: true,
    },
  ],
  preview: {
    select: {
      title: "title",
      image: "image",
    },
    prepare({ title, image }: any) {
      return {
        title: title,
        media: image,
      };
    },
  },
};

export default HeroObject;
