import { IMAG_PROJECTION } from "PageBuilder/constants";
import { localizedQueryFn } from "PageBuilder/helper/withLocalization";

export const defaultImageProjection: localizedQueryFn = () => `
...,
${IMAG_PROJECTION}
`;
