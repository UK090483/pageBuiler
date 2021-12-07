import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { sanityClient } from "@services/SanityService/sanity.server";
import { usePreviewSubscription } from "@services/SanityService/sanity";
import {
  fetchStaticProps,
  FetchStaticPropsResult,
  fetchStaticPaths,
  FetchStaticPathsParams,
} from "@services/pageBuilderService/server";
import {
  blockFactory,
  ContentParser,
  PageBuilderResult,
} from "@services/pageBuilderService/client";

import config from "../app.config.json";

import {
  LangSwitcherQuery,
  LangSwitcherResult,
} from "@services/LangSwitcherService/LangSwitcherQuery";
import { Page } from "studio/schema";
import {
  NavigationQuery,
  NavigationResult,
} from "@services/NavigationService/NavigationQuery";
import { seoQuery, SeoResult } from "@services/SeoService/SeoQuerys";

export type PageResult = PageBuilderResult &
  LangSwitcherResult &
  NavigationResult &
  SeoResult &
  Page;

const PageComponent: NextPage<FetchStaticPropsResult<PageResult>> = (props) => {
  const { page, query, preview } = props;

  const { data } = usePreviewSubscription<PageResult | null>(query, {
    initialData: page,
    enabled: preview,
  });

  return (
    <>
      <ContentParser content={data?.content} />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return await fetchStaticPaths("page", sanityClient, config.locales);
};

type GetStaticPropsPlus = GetStaticProps<
  { [key: string]: any },
  FetchStaticPathsParams
>;

export const getStaticProps: GetStaticPropsPlus = async (props) => {
  const { params, locale, preview } = props;

  return await fetchStaticProps<PageBuilderResult>({
    params,
    sanityClient,
    locale,
    preview,
    query: `..., ${blockFactory.getRootQuery({ locale })}, ${seoQuery(
      locale
    )}, ${LangSwitcherQuery(config.locales)}, ${NavigationQuery(locale)}`,
    locales: config.locales,
  });
};

export default PageComponent;
