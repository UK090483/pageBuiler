import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import Feature from "@components/organisms/Feature";
import List from "@components/organisms/Listings/List";
import {
  fetchStaticPaths,
  FetchStaticPathsResult,
} from "@services/SanityService/fetchStaticPath";
import { fetchPage } from "@services/SanityService/fetchPageApi";
import { Page } from "types";
import { getSanityClient } from "@services/SanityService/sanity.server";

const Home: NextPage = () => {
  return (
    <div>
      <Feature variant={Math.random() > 0.5 ? "overlapping" : "sideBySide"} />
      <List />
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return await fetchStaticPaths("page", getSanityClient);
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug =
    context.params?.slug &&
    Array.isArray(context.params.slug) &&
    context.params.slug[context.params.slug.length - 1];

  console.log(context);

  // if (!slug) {
  //   throw new Error("No slug found");
  // }

  // const page = await fetchPage<Page>(
  //   `*[_type == "page" && slug.current == "test2" ][0]{...}`,
  //   slug,
  //   false
  // );

  return { props: { page: "bam" } };
};

export default Home;
