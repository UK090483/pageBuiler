import { GetStaticPropsResult, GetStaticPathsResult } from "next";
import S from "studio/node_modules/@sanity/desk-tool/structure-builder";
import {
  ArraySchemaType,
  BooleanSchemaType,
  StringSchemaType,
  TextSchemaType,
  ReferenceSchemaType,
  ImageSchemaType,
} from "@sanity/types";
import { PreviewConfig, PreviewValue } from "@sanity/types/src/schema/preview";

import { Schema } from "sanity-v3-dev-prev/node_modules/@sanity/types/src/schema/types";

export interface IArrayField
  extends Omit<ArraySchemaType, "jsonType" | "of" | "type"> {
  type: "array";
  of: { type: string }[];
}

export interface IImageField
  extends Omit<
    ImageSchemaType,
    "jsonType" | "type" | "to" | "__experimental_search" | "fields"
  > {
  type: "image";
}

// export interface ICustomField {
//   type: string;
//   name: string;
//   title: string;
// }

export type Field<TType extends Schema.Type = Schema.Type> =
  Schema.FieldDefinition<TType> & { query?: string };

export type FilterHook<T extends unknown = unknown> = (props: {
  config: Config;
  result: T;
}) => T;

export type QueryCreationHook<
  T extends unknown = unknown,
  P extends unknown = unknown
> = (props: { config: Config; payload: P }) => T;

interface contentTypeStatic {}

interface contentTypeFields {
  isRoot?: boolean;
  revalidate?: GetStaticPropsResult<any>["revalidate"];
  fallback?: GetStaticPathsResult["fallback"];
  /**
   Inspired by Wordpress :-)
  */
  hasListing?: boolean;
  hasPage?: boolean;
  hasBlockEditor?: boolean;
  name: string;
  title: string;
  fields?: Field[];
}

export type contentType =
  | contentTypeFields
  | (contentTypeFields & contentTypeStatic);

export type SanityDocumentDefinition = Schema.DocumentDefinition & {
  query?: string;
} & contentTypeFields;

export type SanityObjectDefinition = Schema.ObjectDefinition & {
  query?: string;
};

export type Hooks = {
  onCreateContentTypes?: FilterHook<SanityDocumentDefinition[]>;
  onCreateComponents?: FilterHook<SanityObjectDefinition[]>;
  onCreateRichText?: FilterHook<RichText[]>;
  onCreateObjects?: FilterHook<SanityObjectDefinition[]>;
  onCreatePlugs?: FilterHook<SanityObjectDefinition[]>;
  onCreatePlug?: FilterHook<SanityObjectDefinition[]>;
  onContentTypeQuery?: FilterHook<string>;
};

export type SomePartial<T, K extends keyof T> = Omit<T, K> &
  Pick<Partial<T>, K>;

export interface Config {
  options?: {
    link?: { query?: string };
    image?: any;
  };
  settings?: Omit<SanityDocumentDefinition, "type">[];
  hooks?: Hooks;
  contentTypes?: SomePartial<SanityDocumentDefinition, "fields" | "type">[];
  components?: Omit<SanityObjectDefinition, "type">[];
  richText?: RichText[];
  objects?: Omit<SanityObjectDefinition, "type">[];
  plugs?: Omit<SanityObjectDefinition, "type">[];
}

export interface ISchemaItem {
  name: string;
  title: string;
  fields: Field[];
  query?: string;
  preview?: any;
  type: "object" | "document";
}

// export interface IObject extends ISchemaItem {
//   type: "object";
// }

export interface ISetting extends ISchemaItem {
  type: "document";
}

export interface Component {}

type SanitySchemaType = any;
type titleValue = { title: string; value: string };
export interface RichText {
  name: string;
  title: string;
  styles: titleValue[];
  marks: {
    decorators: titleValue[];
    annotations: SanitySchemaType[];
  };
  plugs: string[];
}

export type SanityStructureBuilder = typeof S;

export type PageBuilderContentType = {
  title?: string;
  description?: string;
  body?: any[];
  slug?: string;
};
