import { Block } from "../types";
import { localizedQueryFn } from "../helper/withLocalization";

export const defaultRichTextQuery: localizedQueryFn = (locale) => `
...,
`;

export type defaultRichTextQueryResult = Block[];
