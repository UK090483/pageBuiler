import { defaultEmptyArray } from "../../helper";
import {
  Config,
  Field,
  RichText,
  IArrayField,
  IImageField,
  PageBuilderContentType,
  PageBuilderObject,
} from "../../types";
import { resolveContentType } from "../sanity/createContentTypes";
import { resolveObjects } from "../sanity/createObjects";

const FIELD_END = ",";

type queryResult = { needsQuery: boolean; query: string };

export function fieldToQuery(
  config: Config,
  field: Field,
  locale?: string
): queryResult {
  const res = {
    needsQuery: false,
    query:
      locale && field.localize
        ? `'${field.name}': coalesce(${field.name}_${locale},${field.name})`
        : field.name,
  };

  if (field.query) {
    return {
      needsQuery: true,
      query:
        typeof field.query === "function"
          ? field.query({ locale })
          : field.query,
    };
  }

  if (field.type === "array") {
    return arrayToQuery(config, field as IArrayField, locale);
  }

  if (field.type === "slug") {
    return {
      needsQuery: false,
      query:
        locale && field.localize
          ? `'${field.name}': coalesce(${field.name}_${locale},${field.name}).current`
          : `'slug': slug.current`,
    };
  }

  if (field.type === "image") {
    return imageToQuery(config, field as IImageField);
  }

  const object = resolveObjects(config).find((i) => i.name === field.type);
  if (object) {
    return objectToQuery(config, object, locale);
  }

  const richtext = config.richText?.find((i) => i.name === field.type);
  if (richtext) {
    return richtextToQuery(config, richtext, field);
  }
  return res;
}

function objectToQuery(
  config: Config,
  object: PageBuilderObject,
  locale?: string
): queryResult {
  return {
    needsQuery: false,
    query: `'${object.name}': ${object.name}{${fieldsToQuery(
      config,
      object.fields,
      locale
    )}}`,
  };
}

function imageToQuery(config: Config, field: IImageField): queryResult {
  return {
    needsQuery: true,
    query: `'${field.name}': ${field.name}{${config.options?.image?.query}}`,
  };
}

function arrayToQuery(
  config: Config,
  field: IArrayField,
  locale?: string
): queryResult {
  const resolvedObjects = resolveObjects(config);

  const objects = defaultEmptyArray(field.of)
    .map((i) => {
      if (i.fields) {
        if (i.type === "image") {
          return `
          'image':{${config.options?.image.query}},
          ${fieldsToQuery(config, i.fields)}
          `;
        }
        return fieldsToQuery(config, i.fields);
      }

      if (i.type === "block") {
        return "...";
      }

      const object = resolvedObjects.find((obj) => obj.name === i.type);

      if (object && "fields" in object) {
        return `_type == '${object.name}' => {_type,_key, ${schemaItemToQuery(
          config,
          object,
          locale
        )}}`;
      }

      return "";
    })
    .filter((i) => !!i);

  return {
    needsQuery: false,
    query: `'${field.name}': ${field.name}[]{${objects.join(FIELD_END)}}`,
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
  const components = defaultEmptyArray(config.components).filter((i) =>
    richtext.plugs.includes(i.name)
  );

  const plugQuery = [...plugs].reduce((acc, item) => {
    return `${acc} _type == '${item.name}' => {..., _type, ${fieldsToQuery(
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
  return queries.map((i) => i.query).join(FIELD_END) + FIELD_END;
};

export const schemaItemToQuery = (
  config: Config,
  item: PageBuilderObject,
  locale?: string
) => {
  if (item.query) {
    return typeof item.query === "function"
      ? item.query({ locale })
      : item.query;
  }
  return fieldsToQuery(config, item.fields, locale);
};

export const contentTypeQuery = (
  config: Config,
  contentType: PageBuilderContentType,
  locale?: string
) => {
  const resolvedContentType = resolveContentType(config, contentType);
  const res = fieldsToQuery(config, resolvedContentType.fields, locale);

  return res;
};
