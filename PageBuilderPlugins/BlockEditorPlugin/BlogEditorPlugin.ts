import { Config } from "../../PageBuilder/types";

type BlockEditorPluginProps = {
  components: string[];
  name?: string;
};

function Conf({ components, name = "body" }: BlockEditorPluginProps): Config {
  return {
    editor: [
      {
        name,
        type: "array",
        title: "Page sections",
        description: "Add, edit, and reorder sections",
        of: [...components.map((i) => ({ type: i }))],
        group: "content",
      },
    ],
  };
}
export default Conf;
