import { Config } from "../PageBuilder/types";

type BlogPluginProps = {
  editor?: string | string[];
};
/**
 *  @default creates content Type {
        name: "post",
        title: "Post",
        hasPage: true,
        listing: "listing",
        editor: props?.editor,
      },
 * @param props 
 * @returns 
 */
function Conf(props?: BlogPluginProps): Config {
  return {
    contentTypes: [
      {
        name: "post",
        title: "Post",
        hasPage: true,
        listing: "listing",
        editor: props?.editor,
      },
    ],
  };
}
export default Conf;
