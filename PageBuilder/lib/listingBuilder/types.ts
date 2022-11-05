import { ArrayOfType } from "PageBuilder/types";

export type listingBuilderItem = {
  name: string;
  title: string;
  variants?: { value: string; title: string }[];
  filter?: {
    value: string;
    title: string;
    queryFilter: { filter: string; order?: string };
  }[];
  projection?: string;
  items?: ArrayOfType[];
};
