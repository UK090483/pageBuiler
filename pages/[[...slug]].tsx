import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { fetchStaticPaths } from "@services/pageBuilderService/lib/fetchStaticPaths";
import type { FetchStaticPathsParams } from "@services/pageBuilderService/lib/fetchStaticPaths";

import { sanityClient } from "@services/SanityService/sanity.server";
import { usePreviewSubscription } from "@services/SanityService/sanity";
import ContentParser from "@services/pageBuilderService/ContentParser";
import {
  FetchStaticPropsResult,
  fetchStaticProps,
  PageResult,
} from "@services/pageBuilderService/lib/fetchStaticProps";
import config from "../app.config.json";

const PageComponent: NextPage<FetchStaticPropsResult> = (props) => {
  const { page, query, preview, queryParams } = props;

  const { data, error } = usePreviewSubscription<PageResult | null>(query, {
    initialData: page,
    enabled: preview,
  });

  // console.log(error);
  // console.log(query);

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

  return await fetchStaticProps({ params, sanityClient, locale, preview });
};

export default PageComponent;
