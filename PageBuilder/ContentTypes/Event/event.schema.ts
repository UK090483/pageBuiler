import { SchemaItem } from "PageBuilder/types";
import { getContentTypeBaseFields } from "../helper";

const pageSchema: SchemaItem = {
  name: "person",
  title: "Person",
  type: "document",
  fields: [...getContentTypeBaseFields({})],
};

export default pageSchema;
