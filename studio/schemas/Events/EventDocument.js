import { defaultBockContent } from "../snippets";
import { withLocalization } from "../Localizer";
export default withLocalization({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    {
      name: "name",
      title: "name",
      type: "string",
      localize: true,
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      localize: true,
    },

    {
      name: "tags",
      title: "Description",
      type: "reference",
      to: [{ type: "tag" }],
    },
    {
      name: "date",
      title: "Datum",
      type: "date",
    },

    {
      name: "Text",
      title: "Text",
      type: "defaultRichText",
      localize: true,
    },
  ],
});
