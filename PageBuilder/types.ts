import { GetStaticPropsResult, GetStaticPathsResult } from "next";
import S from "studio/node_modules/@sanity/desk-tool/structure-builder";
import { ArraySchemaType, ImageSchemaType } from "@sanity/types";

import { Schema } from "sanity-v3-dev-prev/node_modules/@sanity/types/src/schema/types";

export interface IArrayField
  extends Omit<ArraySchemaType, "jsonType" | "of" | "type"> {
  type: "array";
  of: { type: string; fields: Field[] }[];
}

export interface IImageField
  extends Omit<
    ImageSchemaType,
    "jsonType" | "type" | "to" | "__experimental_search" | "fields"
  > {
  type: "image";
}

export type Field<TType extends Schema.Type = Schema.Type> =
  Schema.FieldDefinition<TType> & { query?: Query; localize?: boolean };

export type QueryCreationHook<
  T extends unknown = unknown,
  P extends unknown = unknown
> = (props: { config: Config; payload: P }) => T;

interface contentTypeStatic {}

export type SanityDocumentDefinition = Omit<
  Schema.DocumentDefinition,
  "fields"
> & {
  query?: Query;
  fields: Field[];
};

export type QueryFn = (props: { locale?: string }) => string;
export type Query = string | QueryFn;

export type SanityObjectDefinition = Schema.ObjectDefinition & {
  query?: Query;
};

export interface PageBuilderContentType
  extends Omit<Schema.DocumentDefinition, "fields" | "type" | "title"> {
  isRoot?: boolean;
  revalidate?: GetStaticPropsResult<any>["revalidate"];
  fallback?: GetStaticPathsResult["fallback"];
  /**
   Inspired by Wordpress :-)
   name of the listing plugin that can list this ContentType

  @type string | string[];
  */
  listing?: string | string[];
  hasPage?: boolean;
  editor?: string | string[];
  name: string;
  title: string;
  fields?: Field[];
}

export interface PageBuilderSetting
  extends Omit<Schema.DocumentDefinition, "fields" | "type" | "title"> {
  name: string;
  title: string;
  fields: Field[];
}

export interface PageBuilderComponent
  extends Omit<Schema.ObjectDefinition, "fields" | "type"> {
  type?: "object";
  fields: Field[];
  query?: Query;
}
export interface PageBuilderObject
  extends Omit<Schema.ObjectDefinition, "fields" | "type"> {
  fields: Field[];
  query?: Query;
}

export interface PageBuilderEditor
  extends Omit<Schema.ArrayDefinition, "fields" | "type"> {
  type: "array";
  query?: Query;
  group: string | string[];
}

export type FilterHook<T extends unknown = unknown> = (props: {
  config: Config;
  result: T;
  locale?: string;
}) => T;

export type Hooks = {
  onCreateContentTypes?: FilterHook<SanityDocumentDefinition[]>;
  onCreateComponents?: FilterHook<SanityObjectDefinition[]>;
  onCreateRichText?: FilterHook<RichText[]>;
  onCreateObjects?: FilterHook<SanityObjectDefinition[]>;
  onCreatePlugs?: FilterHook<PageBuilderObject[]>;
  onCreatePlug?: FilterHook<SanityObjectDefinition[]>;
  onContentTypeQuery?: FilterHook<string>;
};

export type PageBuilderLocales = {
  [k: string]: { title: string; isDefault?: boolean; flag: string };
};

export interface IConfigOptions {
  slug: { query: QueryFn };
  link: { query: QueryFn };
  image: { query: Query };
  locale?: PageBuilderLocales;
}
export interface Config {
  settings?: PageBuilderSetting[];
  hooks?: Hooks;
  contentTypes?: PageBuilderContentType[];
  components?: PageBuilderObject[];
  richText?: RichText[];
  editor?: PageBuilderEditor[];
  objects?: PageBuilderObject[];
  plugs?: PageBuilderObject[];
  options?: IConfigOptions;
}

export interface ISchemaItem {
  name: string;
  title: string;
  fields: Field[];
  query?: string;
  preview?: any;
  type: "object" | "document";
}

type SanitySchemaType = any;
type titleValue = { title: string; value: string };

export interface RichText extends Omit<Schema.BlockDefinition, "type"> {
  plugs: string[];
}

export type RichTextMarks = Schema.MarksDefinition;

// export interface RichText {
//   name: string;
//   title: string;
//   styles: titleValue[];
//   marks: {
//     decorators: titleValue[];
//     annotations: SanitySchemaType[];
//   };
//   plugs: string[];
// }

export type SanityStructureBuilder = typeof S;

export type PageBuilderContentTypeResult = {
  featuredImage: any;
  title?: string;
  description?: string;
  body?: any[];
  slug?: string;
};
