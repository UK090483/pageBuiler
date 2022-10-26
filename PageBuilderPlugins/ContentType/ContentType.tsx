import { Config } from "../../PageBuilder/types";

type ContentTypePluginProps = {
  name: string;
  title: string;
  editor?: string;
  hasPage?: boolean;
  isRoot?: boolean;
};

function Conf({
  name,
  title,
  editor,
  hasPage,
  isRoot,
}: ContentTypePluginProps): Config {
  return {
    contentTypes: [
      {
        name,
        title,
        editor,
        hasPage,
        isRoot,
      },
    ],
  };
}
export default Conf;
