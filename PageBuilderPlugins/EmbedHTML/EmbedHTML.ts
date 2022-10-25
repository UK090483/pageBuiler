import { Config } from "../../PageBuilder/types";

function EmbedHTML(): Config {
  return {
    objects: [
      {
        title: "Embed",
        name: "embed",
        fields: [{ name: "html", type: "text", title: "HTML" }],
      },
    ],
  };
}

export default EmbedHTML;
