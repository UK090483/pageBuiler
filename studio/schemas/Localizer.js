const supportedLanguages = [
  { id: "de", title: "Deutsch", isDefault: true },
  // { id: "dk", title: "Dansk" },
  // { id: "en", title: "English" },
];

const getLocalizer = () => {
  const items = [];

  const localize = (defaultField) => {
    items.push(defaultField);
    return supportedLanguages.map((lang) => {
      if (lang.isDefault) {
        return defaultField;
      }

      return {
        ...defaultField,
        name: `${defaultField.name}_${lang.id}`,
        title: `${defaultField.title}_${lang.id}`,
        fieldset: `${defaultField.name}translations`,
      };
    });
  };

  const getFieldSets = () => {
    return items.map((item) => {
      return {
        title: `${item.title} Translations`,
        name: `${item.name}translations`,
        options: { collapsible: true },
      };
    });
  };
  return { localize, getFieldSets };
};

export const widthLocalization = (doc) => {
  const { localize, getFieldSets } = getLocalizer();
  const newDoc = {
    ...doc,

    fields: doc.fields.reduce((acc, field) => {
      if (field.localize) {
        return [...acc, ...localize(field)];
      }
      return [...acc, field];
    }, []),
  };

  (newDoc.fieldsets = doc.fieldsets
    ? [...doc.fieldsets, ...getFieldSets()]
    : [...getFieldSets()]),
    getFieldSets();

  return newDoc;
};
