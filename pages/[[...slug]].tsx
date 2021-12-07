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
  siteQuery,
  SiteSettingResult,
} from "@services/pageBuilderService/queries/siteQuery";
import {
  LangSwitcherQuery,
  LangSwitcherResult,
} from "@services/LangSwitcherService/LangSwitcherQuery";
import { Page } from "studio/schema";

export type PageResult = PageBuilderResult &
  SiteSettingResult &
  LangSwitcherResult &
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
    query: `..., ${blockFactory.getRootQuery({ locale })}, ${siteQuery(
      locale
    )} ${LangSwitcherQuery(config.locales)}`,
    locales: config.locales,
  });
};

export default PageComponent;
