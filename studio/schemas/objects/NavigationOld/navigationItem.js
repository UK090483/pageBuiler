import { withLocalization } from "../../Localizer";

export default withLocalization({
  title: "Navigation Item",
  name: "navigationItem",
  type: "object",
  fields: [
    { name: "label", type: "string", title: "Label", localize: true },
    { name: "list", type: "boolean", title: " as List ?" },
    {
      name: "link",
      title: "Link",
      type: "link",
      hidden: (p) => {
        return p?.parent?.list;
      },
    },
    {
      name: "items",
      type: "array",
      title: "List",
      of: [{ type: "navigationItem" }],
      hidden: (p) => {
        return !p?.parent?.list;
      },
    },
  ],
});
