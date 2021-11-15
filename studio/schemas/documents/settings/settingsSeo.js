export default {
  title: "Default SEO / Share",
  name: "seoSettings",
  type: "document",

  // __experimental_actions: ["update", "publish"], // disable for initial publish
  fields: [
    {
      title: "",
      name: "seo",
      type: "seo",
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Default SEO / Share",
      };
    },
  },
};
