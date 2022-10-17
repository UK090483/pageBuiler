import { defaultEmptyArray } from "../../helper";
import {
  Config,
  Field,
  RichText,
  IArrayField,
  IImageField,
  ISchemaItem,
  contentType,
  SanityObjectDefinition,
} from "../../types";
import { resolveContentType } from "../sanity/createContentTypes";
import { resolveObjects } from "../sanity/createObjects";

const pageBuilderFieldTypes = ["link"];

type queryResult = { needsQuery: boolean; query: string };

export function fieldToQuery(
  config: Config,
  field: Field,
  locale?: string
): queryResult {
  const res = {
    needsQuery: false,
    query: locale
      ? `'${field.name}': coalesce(${field.name}_${locale},${field.name})`
      : field.name,
  };

  if (field.query) {
    return { needsQuery: true, query: field.query };
  }

  if (field.type === "array") {
    return arrayToQuery(config, field as IArrayField);
  }

  if (field.type === "link") {
    console.log(field);
  }

  if (field.type === "image") {
    return imageToQuery(config, field as IImageField);
  }

  const object = resolveObjects(config).find((i) => i.name === field.type);
  if (object) {
    return objectToQuery(config, object);
  }

  const richtext = config.richText?.find((i) => i.name === field.type);
  if (richtext) {
    return richtextToQuery(config, richtext, field);
  }
  return res;
}

function objectToQuery(
  config: Config,
  object: SanityObjectDefinition
): queryResult {
  return {
    needsQuery: false,
    query: `'${object.name}': ${object.name}{${fieldsToQuery(
      config,
      object.fields
    )}}`,
  };
}

function imageToQuery(config: Config, field: IImageField): queryResult {
  return {
    needsQuery: true,
    query: `'${field.name}': ${field.name}{ ...asset->{url} }`,
  };
}

function arrayToQuery(config: Config, field: IArrayField): queryResult {
  const resolvedObjects = resolveObjects(config);

  const objects = defaultEmptyArray(field.of)
    .map((i) => {
      const object = resolvedObjects.find((obj) => obj.name === i.type);

      if (object && "fields" in object) {
        return `_type == '${object.name}' => {_type, ${schemaItemToQuery(
          config,
          object
        )}}`;
      }
      return "";
    })
    .filter((i) => !!i);

  return {
    needsQuery: false,
    query: `'${field.name}': ${field.name}[]{${objects.join(", ")}}`,
  };
}

function richtextToQuery(
  config: Config,
  richtext: RichText,
  field: Field
): queryResult {
  const plugs = defaultEmptyArray(config.plugs).filter((i) =>
    richtext.plugs.includes(i.name)
  );

  const plugQuery = plugs.reduce((acc, item) => {
    return `${acc} _type == ${item.name} => { _type, ${fieldsToQuery(
      config,
      item.fields
    )}}`;
  }, "") as string;

  return {
    needsQuery: false,
    query: `'${field.name}': ${field.name}[]{..., ${plugQuery}}`,
  };
}

export const fieldsToQuery = (
  config: Config,
  fields: Field[],
  locale?: string
) => {
  const queries = fields?.map((i) => fieldToQuery(config, i, locale));
  return queries.map((i) => i.query).join(" ,") + ", ";
};

export const schemaItemToQuery = (
  config: Config,
  item: ISchemaItem | SanityObjectDefinition
) => {
  if (item.query) {
    return item.query;
  }
  return fieldsToQuery(config, item.fields);
};

export const contentTypeQuery = (
  config: Config,
  contentType: contentType,
  locale?: string
) => {
  const resolvedContentType = resolveContentType(config, contentType);
  return fieldsToQuery(config, resolvedContentType.fields, locale);
};
