import { Field, DocumentDefinition } from "../types";
import { ImageResult, IMAG_PROJECTION } from "../constants";
import { localizeValue } from "../helper/withLocalization";

export const getSlugField = () => ({
  name: "slug",
  type: "slug",
  title: "Slug",
  description: " ",
  validation: (Rule: any) => [
    Rule.required(),
    Rule.custom((slug: any) => {
      if (!slug) return true;
      if (slug.current.indexOf(" ") >= 0)
        return "no whitespace allowed (use - for binding words)";
      if (slug.current.indexOf("/") >= 0)
        return "no backslashes allowed (use - for binding words)";
      return true;
    }).error(),
  ],
  group: "base",
  localize: true,
});

type createContentTypeProps = {
  fields: Field[];
  name: string;
  title: string;
};

export type BaseContentTypeResult = {
  title?: string;
  description?: string;
  featuredImage?: ImageResult;
};

export const BaseContentTypeProjection = (locale?: string) => `
    ${localizeValue("title", locale)},
    ${localizeValue("description", locale)},
    'featuredImage':featuredImage{${IMAG_PROJECTION}},
    `;

export function createContentType(
  props: createContentTypeProps
): DocumentDefinition {
  const { name, title, fields = [] } = props;
  return {
    type: "document",
    name: name,
    title: title,
    groups: [
      {
        name: "base",
        title: "Base",
      },
      {
        name: "content",
        title: "Content",
      },
    ],
    fields: [
      {
        name: "title",
        type: "string",
        title: "Title",
        validation: (Rule: any) => Rule.required(),
        localize: true,
        group: "base",
      },
      {
        name: "description",
        type: "text",
        title: "Description",
        description: "should be between 50 and 160 characters",
        validation: (Rule: any) => [
          Rule.max(160).warning("should not be more than 160 characters"),
          Rule.min(50).warning("should be at least 50 characters"),
        ],
        localize: true,
        group: "base",
      },
      {
        name: "featuredImage",
        type: "image",
        group: "base",
      },

      ...fields,
    ],
  };
}

export default createContentType;

const _if = (condition: boolean | undefined, T: any) => {
  return condition ? [T] : [];
};