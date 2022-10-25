export type PlugProps<P = {}> = {
  children?: string[];
  node: { _type: string; _key: string } & P;
  markKey: string;
  _key: string;
};
