import type { SanityClient } from "@sanity/client/sanityClient";
import { PageQueryResult } from "@services/pageBuilderService/ContentParser";
import { siteQuery } from "../queries/siteQuery";
import { LocationConfig, Page } from "types";
import type { FetchStaticPathsParams } from "./fetchStaticPaths";
import { SiteSettingResult } from "../queries/siteQuery";

type FetchPageProps = {
  query: string;
  slug: string;
  preview?: boolean;
  sanityClient: SanityClient;
};

export async function fetchPage<P>({
  query,
  slug,
  preview,
  sanityClient,
}: FetchPageProps) {
  let pageData: P | null = null;

  if (process.env.NODE_ENV === "development" && !preview) {
    pageData = await sanityClient.fetch<P>(query, {
      slug,
    });
  }

  if (process.env.NODE_ENV === "production") {
    pageData = await sanityClient.fetch<P>(query, {
      slug,
    });
  }

  return pageData;
}

type fetchStaticPropsProps = {
  locale?: string;
  params?: FetchStaticPathsParams;
  preview?: boolean;
  sanityClient: SanityClient;
  locales: LocationConfig;
  body: string;
};

export interface PageResult
  extends Omit<Page, "content">,
    PageQueryResult,
    SiteSettingResult {}

export type FetchStaticPropsResult = {
  page: PageResult | null;
  preview?: boolean;
  query: string;
  [k: string]: any;
};

export const fetchStaticProps = async (
  props: fetchStaticPropsProps
): Promise<{ props: FetchStaticPropsResult }> => {
  const { params, sanityClient, locale, preview, body, locales } = props;
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

  const query = `*[${filter}][0]{
    ...,
    ${body ? body + "," : ""}
    ${siteQuery(locale)}
  }`;

  const page = await sanityClient.fetch(query);

  return {
    props: { page, preview: preview || false, query },
  };
};

export {};
