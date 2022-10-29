import { Field, DocumentDefinition } from "../types";
import { ImageResult, IMAG_PROJECTION } from "PB/constants";

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

export const getEditorField = (components: any[]) => ({
  name: "body",
  type: "array",
  title: "Page sections",
  description: "Add, edit, and reorder sections",
  of: [...components],
  group: "content",
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

const localize = (name: string, locale?: string) =>
  location ? `'${name}':coalesce(${name}_${location},${name})` : `${name}`;

export const BaseContentTypeProjection = (locale?: string) => `
    ${localize("title", locale)},
    ${localize("description", locale)},
    'featuredImage'=>${IMAG_PROJECTION},
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
