// import { defaultEmptyArray } from "../../../helper";
// import { Config, SanityObjectDefinition } from "../../../types";

// export function createListingComponent(
//   config: Config,
//   name: string
// ): SanityObjectDefinition {
//   const contentTypesWithListing = defaultEmptyArray(config.contentTypes).filter(
//     (i) =>
//       i.listing && Array.isArray(i.listing)
//         ? i.listing.includes(name)
//         : i.listing === name
//   );

//   return {
//     title: "Listing",
//     name: "listing",
//     type: "object",
//     fields: [
//       { name: "name", type: "string", title: "Name" },
//       {
//         title: "Content type",
//         name: "contentType",
//         type: "string",
//         options: {
//           list: [
//             ...contentTypesWithListing.map((i) => ({
//               title: i.title,
//               value: i.name,
//             })),
//           ],
//           layout: "radio",
//         },
//       },
//       ...contentTypesWithListing.map((i) => ({
//         title: `${i.title} Items`,
//         name: `${i.name}Items`,
//         type: "reference",
//         to: [{ type: i.name }],
//         hidden: (props: any) => props?.parent?.contentType !== i.name,
//       })),
//     ],
//     preview: {
//       select: {
//         name: "name",
//         contentType: "contentType",
//       },
//       prepare({ name, contentType }: any) {
//         return {
//           title: name ? name : contentType,
//           subtitle: `Listing: ${contentType ? " - " + contentType : ""}`,
//         };
//       },
//     },
//   };
// }

export {};
