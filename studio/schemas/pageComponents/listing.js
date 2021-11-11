export default {
  title: "Listing",
  name: "listing",
  type: "object",
  fields: [
    { name: "name", type: "string", title: "Name" },
    {
      name: "contentType",
      type: "string",
      options: {
        list: [
          { title: "Post", value: "post" },
          { title: "Projects", value: "project" },
        ],
        layout: "radio",
      },
    },
  ],
};
