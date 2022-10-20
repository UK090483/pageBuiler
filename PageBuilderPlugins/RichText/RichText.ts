import { Config } from "../../PageBuilder/types";

type RichTextPluginProps = {
  name: string;
  plugs?: string[];
};

function Conf(props: RichTextPluginProps): Config {
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
