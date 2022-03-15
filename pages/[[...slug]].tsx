import HeroBlock from "@components/Blocks/HeroBlock";
import heroBlockQuery from "@components/Blocks/HeroBlock/HeroBlockQuery";
import listingBlockQuery from "@components/Blocks/ListingBlock/listingBlockQuery";
import ListingBlock from "@components/Blocks/ListingBlock";
import SectionBlock from "@components/Blocks/SectionBlock";
import sectionBlockQuery from "@components/Blocks/SectionBlock/SectionBlockQuery";
import type { layoutQueryResult } from "@components/Layout/LayoutQuery";
import layoutQuery from "@components/Layout/LayoutQuery";
import BodyParser from "@lib/SanityPageBuilder/lib/BodyParser";
import fetchStaticPaths from "@lib/SanityPageBuilder/lib/fetchStaticPath/fetchStaticPath";
import fetchStaticProps from "@lib/SanityPageBuilder/lib/fetchStaticProps/fetchStaticProps";
import { sanityClient as client } from "@lib/SanityService/sanity.server";
import appConfig from "../app.config.json";
const locales = appConfig.locales;
import type { GetStaticProps, GetStaticPaths, NextPage } from "next";

export type PageResult = layoutQueryResult;

//@ts-ignore
const Page = (props) => {
  console.log(props);

  const { data } = props;

  return (
    <BodyParser
      components={{
        hero: {
          component: HeroBlock,
        },
        section: {
          component: SectionBlock,
        },
        listing: {
          component: ListingBlock,
        },
      }}
      content={data?.content || []}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return await fetchStaticPaths({
    client,
    doc: "page",
    locales,
  });
};

export const getStaticProps: GetStaticProps = async (props) => {
  const { params, preview, locale } = props;
  return await fetchStaticProps<PageResult>({
    locale,
    revalidate: true,
    params,
    client,
    previewQuery: `content[]{${heroBlockQuery(locale)},${sectionBlockQuery(
      locale
    )}, ${listingBlockQuery(locale)}}`,
    query: `content[]{${heroBlockQuery(locale)},${sectionBlockQuery(
      locale
    )},${listingBlockQuery(locale)}},  ${layoutQuery(locale)}`,
    locales,
    preview,
  });
};

export default Page;
