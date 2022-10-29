import { ObjectDefinition } from "../../types";
const linkSchema: ObjectDefinition = {
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    {
      name: "internal",
      title: "Internal Link",
      type: "reference",

      // query: (props) => {
      //   const locale = props?.locale;
      //   return `...(internal->{ 'internal': ${config.options?.slug.query({
      //     locale,
      //   })}  })`;
      // },

      to: [{ type: "page" }],
      options: {
        disableNew: true,
      },
      hidden: ({ parent }: any) => !!parent.href,
    },
    {
      name: "href",
      title: "External Link",
      type: "url",
      hidden: ({ parent }: any) => !!parent.internal,
    },
  ],
};

export default linkSchema;
