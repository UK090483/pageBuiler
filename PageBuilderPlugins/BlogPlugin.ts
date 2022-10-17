import { Config } from "../PageBuilder/types";

function Conf(): Config {
  return {
    contentTypes: [
      {
        name: "post",
        title: "Post",
        hasPage: true,
        hasListing: true,
      },
    ],
  };
}
export default Conf;
