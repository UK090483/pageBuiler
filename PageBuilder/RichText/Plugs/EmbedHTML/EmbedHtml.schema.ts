import { ObjectDefinition } from "../../../types";

const EmbedHTMLschema: ObjectDefinition = {
  title: "Embed",
  name: "embed",
  type: "object",
  fields: [{ name: "html", type: "text", title: "HTML" }],
};

export default EmbedHTMLschema;
