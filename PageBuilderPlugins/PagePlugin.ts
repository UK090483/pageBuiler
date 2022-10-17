import { Config } from "../PageBuilder/types";

function Conf(): Config {
  return {
    contentTypes: [
      { name: "page", title: "Page", hasPage: true, isRoot: true },
    ],
    components: [
      {
        name: "section",
        title: "Section",
        fields: [
          {
            name: "title",
            type: "string",
            title: "Title",
          },
          {
            name: "content",
            type: "defaultRichtext",
            title: "Content",
          },
        ],
      },
    ],
  };
}
export default Conf;
