export default {
  name: "navigation",
  type: "document",
  title: "Navigation",
  // __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "item",
      type: "array",
      title: "Main Navigation",
      of: [{ type: "link" }, { type: "navigationDropdown" }],
    },
  ],
  preview: {
    prepare() {
      return {
        title: "Navigation",
      };
    },
  },
};
