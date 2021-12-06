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
} from "@services/pageBuilderService/client";

import config from "../app.config.json";
import { PageResult } from "@services/pageBuilderService/lib/fetchStaticProps";
import { sanityClientCashed } from "@services/SanityService/chashedClient";

const PageComponent: NextPage<FetchStaticPropsResult> = (props) => {
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

  return await fetchStaticProps({
    params,
    sanityClient: sanityClientCashed,
    locale,
    preview,
    body: blockFactory.getRootQuery({ locale }),
    locales: config.locales,
  });
};

export default PageComponent;
