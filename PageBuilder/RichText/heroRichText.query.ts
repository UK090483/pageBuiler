import { Block } from "../types";
import { localizedQueryFn } from "../helper/withLocalization";

export const heroRichTextQuery: localizedQueryFn = (locale) => `
...,
`;

export type heroRichTextQueryResult = Block[];
