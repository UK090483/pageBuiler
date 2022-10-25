export type { PortableTextTypeComponent } from "@portabletext/react/src/types";

export type PlugProps<P = {}> = {
  children?: string[];
  node: { _type: string; _key: string } & P;
  markKey: string;
  _key: string;
};
