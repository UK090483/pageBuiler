import { Config, SanityObjectDefinition } from "../../PageBuilder/types";

function Conf(): Config {
  return {
    components: [getHero()],
  };
}
export default Conf;

function getHero() {
  return {
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
        type: "heroRichtext",
      },
    ],
    preview: {
      select: {
        title: "title",
        image: "image",
      },
      prepare({ title, image }) {
        return {
          title: title,
          media: image,
        };
      },
    },
  } as SanityObjectDefinition;
}
