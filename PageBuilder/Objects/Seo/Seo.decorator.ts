import { DocumentDefinition } from "../../types";

export function addSeo(doc: DocumentDefinition): DocumentDefinition {
  doc.groups = [
    ...(doc.groups ? doc.groups : []),
    { name: "seo", title: "Seo" },
  ];
  doc.fields = [
    ...doc.fields,
    { title: "Seo", name: "seo", type: "seo", group: "seo" },
  ];

  return doc;
}
