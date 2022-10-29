import { PortableTextBlock } from "@portabletext/types/dist/portableText";
import { Schema } from "sanity-v3-dev-prev/node_modules/@sanity/types/src/schema/types";

export type Block = PortableTextBlock;
type extraFieldFields = {
  localize?: boolean;
};

export type Field = Schema.FieldDefinition & extraFieldFields;

type widthExtraFieldFields<T> = Omit<T, "fields"> & {
  fields: Field[];
};

export type DocumentDefinition =
  widthExtraFieldFields<Schema.DocumentDefinition>;
export type ObjectDefinition = widthExtraFieldFields<Schema.ObjectDefinition>;

export type ArrayDefinition = Schema.ArrayDefinition;

export type SchemaItem =
  | DocumentDefinition
  | ObjectDefinition
  | ArrayDefinition;

export type PageBuilderLocales = {
  [k: string]: { title: string; isDefault?: boolean; flag: string };
};
