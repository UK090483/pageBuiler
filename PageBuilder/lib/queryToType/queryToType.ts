import { parse, evaluate } from "groq-js";
import { Schema } from "sanity-v3-dev-prev/node_modules/@sanity/types/src/schema/types";

type SchemaItem = Schema.DocumentDefinition | Schema.ObjectDefinition;

export async function queryToType(
  query: string,
  schema: SchemaItem[]
): Promise<any> {
  const tree = parse(query);
  const dataset = schemaToTree(schema);

  const value = await evaluate(tree, { dataset });
  const result = await value.get();

  console.log(result);

  return result;
}

export function schemaToTree(schema: SchemaItem[]) {
  //@ts-ignore
  return schema.reduce((acc, i) => {
    // if (i.type !== "document") return acc;
    const next = schemaItemToTree(i, schema);
    return [...acc, next];
  }, []);
}

export function schemaItemToTree(schemaItem: SchemaItem, schema: SchemaItem[]) {
  const fields = (schemaItem.fields || []).reduce((acc2, i) => {
    acc2[i.name] = resolveField(i, schema) || i.type;
    return acc2;
  }, {} as { [k: string]: any });

  return {
    _type: schemaItem.name,
    _id: schemaItem.name + "_ref",
    ...fields,
  };
}
export default queryToType;

function resolveField(
  field: SchemaItem["fields"][0],
  schema: SchemaItem[]
): any {
  if (["string", "text", "url"].includes(field.type)) {
    return "inferString";
  }

  if (field.type === "slug") {
    return { current: "inferString" };
  }
  if (field.type === "number") {
    return 111;
  }

  if (field.type === "reference") {
    return [
      //@ts-ignore
      ...field.to.map((r) => {
        return { _type: "reference", _ref: r.type + "_ref" };
      }),
    ];
  }

  if (field.type === "array") {
    return [
      //@ts-ignore
      ...field.of.map((r) => {
        //@ts-ignore
        const foundSchema = schema.find((i) => i.name === r.type);

        if (foundSchema) {
          return schemaItemToTree(foundSchema, schema);
        }
        return r.type;
      }),
    ];
  }

  const foundSchema = schema.find((i) => i.name === field.type);
  if (foundSchema) {
    return schemaItemToTree(foundSchema, schema);
  }
}
