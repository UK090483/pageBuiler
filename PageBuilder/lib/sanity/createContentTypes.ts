import { Config, contentType, SanityDocumentDefinition } from "../../types";
import createComponents from "./createComponent";
import { defaultEmptyArray } from "../../helper";

const createContentTypes = (config: Config) => {
  const result = defaultEmptyArray(config.contentTypes).map((i) => {
    return resolveContentType(config, i);
  });
  if (config.hooks?.onCreateContentTypes) {
    return config.hooks?.onCreateContentTypes({ config, result });
  }
  return result;
};

const defaultBockContent = (config: Config) => {
  const resolvedComponents = createComponents(config);
  return {
    name: "body",
    type: "array",
    title: "Page sections",
    description: "Add, edit, and reorder sections",
    of: [...resolvedComponents.map((i) => ({ type: i.name }))],
    group: "content",
  };
};

const slug = {
  name: "slug",
  type: "slug",
  title: "Slug",

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
};

export function resolveContentType(
  config: Config,
  props: contentType
): SanityDocumentDefinition {
  const { name, title, hasPage, fields = [], hasBlockEditor, ...rest } = props;
  return {
    ...rest,
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
      ..._if(hasPage !== false, slug),
      ..._if(hasBlockEditor !== false, defaultBockContent(config)),
      ...fields,
    ],
  };
}

export default createContentTypes;

const _if = (condition: boolean | undefined, T: any) => {
  return condition ? [T] : [];
};
