import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { fetchStaticPaths } from "@services/SanityService/fetchStaticPaths";
import type { FetchStaticPathsParams } from "@services/SanityService/fetchStaticPaths";
import { fetchStaticProps } from "@services/SanityService/fetchStaticProps";
import type { FetchStaticPropsResult } from "@services/SanityService/fetchStaticProps";
import { sanityClient } from "@services/SanityService/sanity.server";
import ContentParser from "@services/pageBuilderService/ContentParser";

const PageComponent: NextPage<FetchStaticPropsResult> = ({ page }) => {
  return (
    <>{page && page.content && <ContentParser content={page.content} />}</>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return await fetchStaticPaths("page", sanityClient);
};

type GetStaticPropsPlus = GetStaticProps<
  { [key: string]: any },
  FetchStaticPathsParams
>;

export const getStaticProps: GetStaticPropsPlus = async ({ params }) => {
  return await fetchStaticProps({ params, sanityClient });
};

export default PageComponent;
