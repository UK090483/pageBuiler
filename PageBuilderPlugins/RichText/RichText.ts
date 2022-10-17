import { Config } from "../../PageBuilder/types";

function Conf(): Config {
  return {
    richText: [
      {
        name: "defaultRichtext",
        title: "RT",
        marks: {
          annotations: [],
          decorators: [],
        },
        plugs: [],
        styles: [
          { title: "Normal", value: "normal" },
          { title: "Header", value: "header" },
        ],
      },
    ],
  };
}
export default Conf;
