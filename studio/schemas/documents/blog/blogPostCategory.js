import { makeInternational } from "../../helper";

export default {
  name: "postCategory",
  type: "document",
  title: "Category",
  fields: [
    ...makeInternational({
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
    }),
  ],
};
