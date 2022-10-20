import { Config } from "../PageBuilder/types";

function Conf(): Config {
  return {
    components: [
      {
        name: "section",
        title: "Section",
        fields: [
          {
            name: "title",
            type: "string",
            title: "Title",
            localize: true,
          },
          {
            name: "content",
            type: "defaultRichtext",
            title: "Content",
            localize: true,
          },
        ],
      },
    ],
  };+
}
export default Conf;
