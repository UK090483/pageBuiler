import {
  Config,
  SanityDocumentDefinition,
  SanityObjectDefinition,
} from "../../types";

// const getLocalizer = (config: Config) => {
//   const items =  [];

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

//   const getFieldSets = () => {
//     return items.map((item) => {
//       return {
//         title: `${item.title} Translations`,
//         name: `${item.name}translations`,
//         options: { collapsible: true },
//       };
//     });
//   };
//   return { localize, getFieldSets };
// };

// export const withLocalization = (
//   config: Config,
//   docs: (SanityDocumentDefinition | SanityObjectDefinition)[]
// ) => {
//   const { localize, getFieldSets } = getLocalizer(config);

//   docs.map((doc) => {
//     const newDoc = {
//       ...doc,

//       fields: doc.fields.reduce((acc, field) => {
//         //@ts-ignore
//         if (field.localize) {
//           return [...acc, ...localize(field)];
//         }
//         return [...acc, field];
//       }, []),
//     };

//     (newDoc.fieldsets = doc.fieldsets
//       ? [...doc.fieldsets, ...getFieldSets()]
//       : [...getFieldSets()]),
//       getFieldSets();

//     return newDoc;
//   });
// };

export const withLocalization = (
  config: Config,
  docs: (SanityDocumentDefinition | SanityObjectDefinition)[]
) => {};
