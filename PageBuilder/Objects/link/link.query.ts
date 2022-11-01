import { SLUG_PROJECTION } from "PageBuilder/constants";
import { localizedQueryFn } from "PageBuilder/helper/withLocalization";

type linkQueryProps = {
  slugQuery: string;
};

const linkProjection: localizedQueryFn = (locale) => `
...(internal->{ 'internal':${SLUG_PROJECTION(locale)}}),
href,
`;

export { linkProjection };
