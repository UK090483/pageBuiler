import { Config } from "../../PageBuilder/types";

function EmbedHTML(): Config {
  return {
    objects: [
      {
        title: "Embed",
        name: "embed",
        fields: [{ name: "url", type: "url", title: "Url" }],
      },
    ],
  };
}

export default EmbedHTML;
