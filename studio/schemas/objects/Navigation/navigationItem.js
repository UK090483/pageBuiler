import { withLocalization } from "../../Localizer";

export default withLocalization({
  title: "Navigation Item",
  name: "navigationItem",
  type: "object",
  fields: [
    { name: "label", type: "string", title: "Label", localize: true },

    {
      name: "link",
      title: "Link",
      type: "link",
    },
  ],
});
