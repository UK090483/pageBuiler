import type { SanityClient } from "@sanity/client/sanityClient";
import type { FetchStaticPathsParams } from "./fetchStaticPaths";
import { LocationConfig } from "types";

type fetchStaticPropsProps = {
  locale?: string;
  params?: FetchStaticPathsParams;
  preview?: boolean;
  sanityClient: SanityClient;
  locales: LocationConfig;
  query: string;
};

export type FetchStaticPropsResult<P = any> = {
  page: P | null;
  preview?: boolean;
  query: string;
  [k: string]: any;
};

export async function fetchStaticProps<P>(
  props: fetchStaticPropsProps
): Promise<{ props: FetchStaticPropsResult<P> }> {
  const { params, sanityClient, locale, preview, query, locales } = props;
  if (!params) {
    throw new Error("No params in getStaticProps");
  }

  const slug = params && params.slug && params.slug[params.slug.length - 1];

  const localizedQuery = (slug: string) =>
    Object.keys(locales).reduce((acc, item) => {
      //@ts-ignore
      if (!locales[item].isDefault) {
        return `${acc} || slug_${item}.current == "${slug}"`;
      }
      return acc;
    }, `slug.current == "${slug}"`);

  const filter = slug
    ? `_type == "page" && ${localizedQuery(slug)}`
    : `_id == *[_id == 'siteConfig'][0].indexPage._ref`;

  const fetch = `*[${filter}][0]{
    ...,
   ${query}
  }`;

  const page = await sanityClient.fetch(fetch);

  return {
    props: { page, preview: preview || false, query },
  };
}
