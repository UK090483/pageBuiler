import type { SanityClient } from "@sanity/client/sanityClient";
import {
  blockFactory,
  PageQueryResult,
} from "@services/pageBuilderService/ContentParser";
import { siteQuery } from "../queries/siteQuery";
import { Page } from "types";
import type { FetchStaticPathsParams } from "./fetchStaticPaths";
import { SiteSettingResult } from "../queries/siteQuery";

import appConfig from "../../../app.config.json";
import { testQuery } from "./testQuery";

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
};

export interface PageResult
  extends Omit<Page, "content">,
    PageQueryResult,
    SiteSettingResult {}

export type FetchStaticPropsResult = {
  page: PageResult | null;
  preview?: boolean;
  query: string;
  queryParams: Record<string, unknown>;
  [k: string]: any;
};

export const fetchStaticProps = async (
  props: fetchStaticPropsProps
): Promise<{ props: FetchStaticPropsResult }> => {
  const { params, sanityClient, locale, preview } = props;
  if (!props) {
    throw new Error("No props in fetchStaticProps.js");
  }
  if (!params) {
    throw new Error("No params in getStaticProps");
  }

  const slug = params && params.slug && params.slug[params.slug.length - 1];

  const localizedQuery = (slug: string) =>
    Object.keys(appConfig.locales).reduce((acc, item) => {
      //@ts-ignore
      if (!appConfig.locales[item].isDefault) {
        return `${acc} || slug_${item}.current == "${slug}"`;
      }
      return acc;
    }, `slug.current == "${slug}"`);

  const filter = slug
    ? `_type == "page" && ${localizedQuery(slug)}`
    : `_id == *[_id == 'siteConfig'][0].indexPage._ref`;

  const body = blockFactory.getRootQuery({ locale });

  const query = `*[${filter}][0]{
    ...,
    ${body},
    ${siteQuery(locale)}
  }`;

  const query2 = `*[${filter}][0]{
    ${body},
  }`;
  const queryParams = { slug: slug || "" };

  const page = await fetchPage<PageResult>({
    query,
    slug: slug || "",
    sanityClient,
  });

  return {
    props: { page, queryParams, preview: preview || false, query: query2 },
  };
};

export {};
