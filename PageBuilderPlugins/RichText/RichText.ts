import { Config, RichText, RichTextMarks } from "../../PageBuilder/types";

type RichTextPluginProps = {
  name: string;
  plugs?: string[];
  lists?: RichText["lists"];
  annotations?: RichTextMarks["annotations"];
  decorators?: RichTextMarks["decorators"];
  styles?: RichText["styles"];
};

function Conf(props: RichTextPluginProps): Config {
  return {
    richText: [
      {
        name: "defaultRichtext",
        title: "RT",
        lists: props.lists || [
          { title: "Bullet", value: "bullet" },
          { title: "Numbered", value: "number" },
        ],
        marks: {
          annotations: [...(props.annotations ? props.annotations : [])],
          decorators: [...(props.decorators ? props.decorators : [])],
        },
        plugs: [...(props.plugs ? props.plugs : [])],
        styles: [
          { title: "Normal", value: "normal" },
          { title: "Header", value: "header" },
        ],
      },
    ],
  };
}
export default Conf;
