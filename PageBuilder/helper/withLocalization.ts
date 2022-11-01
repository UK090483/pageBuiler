import { SchemaItem, PageBuilderLocales, Field } from "../types";
import cloneDeep from "lodash/cloneDeep";

export const withLocalization = (
  docs: SchemaItem[],
  locales?: PageBuilderLocales
) => {
  if (locales) {
    return docs.map((i) => addLocale(cloneDeep(i), locales));
  }
  return docs;
};

const addLocale = (doc: SchemaItem, locales: PageBuilderLocales) => {
  if (doc.type === "array") {
    return doc;
  }
  const oldFields = [...(doc.fields ? doc.fields : [])];
  const { fields, needsLocalization, fieldSets } = oldFields.reduce(
    (acc, field) => {
      if (field.localize) {
        return {
          ...acc,
          needsLocalization: true,
          fields: [...acc.fields, ...localize(field, locales)],
          fieldSets: [
            ...acc.fieldSets,
            {
              name: getFieldsetName(field),
              title: `${field.title} Translations`,
              options: { collapsible: true },
            },
          ],
        };
      }
      return { ...acc, fields: [...acc.fields, field] };
    },
    { fields: [], fieldSets: [], needsLocalization: false } as {
      fields: Field[];
      fieldSets: { name: string }[];
      needsLocalization: boolean;
    }
  );

  if (needsLocalization) {
    //@ts-ignore
    doc.fields = fields;
    doc.fieldsets = [...(doc.fieldsets ? doc.fieldsets : []), ...fieldSets];
  }
  return doc;
};

const getFieldsetName = (field: Field) => `${field.name}translations`;

const localize = (field: Field, locales?: PageBuilderLocales): Field[] => {
  const translationFields = locales
    ? Object.entries(locales)
        .filter((i) => !i[1].isDefault)
        .map(([locale, { flag, title }]) => {
          return {
            ...field,
            name: `${field.name}_${locale}`,
            title: `${flag} ${field.title} ${title}`,
            fieldset: getFieldsetName(field),
          };
        })
    : [];

  return [field, ...translationFields];
};

export const localizeValue = (name: string, locale?: string) =>
  locale ? `'${name}':coalesce(${name}_${locale},${name})` : `${name}`;

export type localizedQueryFn = (locale?: string) => string;
