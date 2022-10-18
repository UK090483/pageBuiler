import { Config } from "../PageBuilder/types";

function Conf(): Config {
  return {
    contentTypes: [
      {
        name: "post",
        title: "Post",
        hasPage: true,
        listing: "listing",
        editor: "",
      },
    ],
  };
}
export default Conf;
