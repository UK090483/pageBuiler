import {
  Config,
  SanityDocumentDefinition,
  SanityObjectDefinition,
  Field,
} from "../../types";

export const withLocalization = (
  config: Config,
  docs: (SanityDocumentDefinition | SanityObjectDefinition)[]
) => {
  if (config.options?.locale) {
    return docs.map((i) => addLocale(config, i));
  }
  return docs;
};

const addLocale = (
  config: Config,
  doc: SanityDocumentDefinition | SanityObjectDefinition
) => {
  const oldFields = [...(doc.fields ? doc.fields : [])] as Field[];
  const { fields, needsLocalization, fieldSets } = oldFields.reduce(
    (acc, field) => {
      if (field.localize) {
        return {
          ...acc,
          needsLocalization: true,
          fields: [...acc.fields, ...localize(config, field)],
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

const localize = (config: Config, field: Field): Field[] => {
  const translationFields = config.options?.locale
    ? Object.entries(config.options.locale)
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

const getTranslationLocale = (config: Config) => {};

//   const localize = (defaultField:string) => {
//     items.push(defaultField);
//     return Object.entries(supportedLanguages).map(([key, lang]) => {
//       if (lang.isDefault) {
//         return defaultField;
//       }

//       return {
//         ...defaultField,
//         name: `${defaultField.name}_${key}`,
//         title: `${lang.flag} ${defaultField.title} ${lang.title}`,
//         fieldset: `${defaultField.name}translations`,
//       };
//     });
//   };
