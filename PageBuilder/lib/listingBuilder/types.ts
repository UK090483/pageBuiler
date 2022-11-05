import { ArrayOfType } from "PageBuilder/types";

export type listingBuilderItem = {
  name: string;
  title: string;
  reference?: string;
  variants?: { value: string; title: string }[];
  filter?: { value: string; title: string; queryFilter: string }[];
  projection?: string;
  items?: ArrayOfType[];
};
