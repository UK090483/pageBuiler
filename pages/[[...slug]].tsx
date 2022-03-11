import HeroBlock from "@components/Blocks/HeroBlock";
import heroBlockQuery from "@components/Blocks/HeroBlock/HeroBlockQuery";
import listingBlockQuery from "@components/Blocks/ListingBlock/listingBlockQuery";
import ListingBlock from "@components/Blocks/ListingBlock";
import SectionBlock from "@components/Blocks/SectionBlock";
import sectionBlockQuery from "@components/Blocks/SectionBlock/SectionBlockQuery";
import type { layoutQueryResult } from "@components/Layout/LayoutQuery";
import layoutQuery from "@components/Layout/LayoutQuery";
import type { LangSwitcherResult } from "@lib/LangSwitcherService/LangSwitcherQuery";
import LangSwitcherQuery from "@lib/LangSwitcherService/LangSwitcherQuery";
import type { NavigationResult } from "@lib/Navigation/query";
import NavigationQuery from "@lib/Navigation/query";
import BodyParser from "@lib/SanityPageBuilder/lib/BodyParser";
import fetchStaticPaths from "@lib/SanityPageBuilder/lib/fetchStaticPath/fetchStaticPath";
import fetchStaticProps from "@lib/SanityPageBuilder/lib/fetchStaticProps/fetchStaticProps";
import { sanityClient as client } from "@lib/SanityService/sanity.server";
import type { SeoResult } from "@lib/SeoService/SeoQuery";
import seoQuery from "@lib/SeoService/SeoQuery";
import appConfig from "../app.config.json";

const locales = appConfig.locales;

export type PageResult = { title?: string } & layoutQueryResult &
  LangSwitcherResult &
  NavigationResult &
  SeoResult;

//@ts-ignore
const Page = (props) => {
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

export const getStaticPaths = async () => {
  return await fetchStaticPaths({
    client,
    doc: "page",
    locales,
  });
};
//@ts-ignore
export const getStaticProps = async (props) => {
  const { params, preview, locale } = props;
  return await fetchStaticProps<PageResult>({
    locale,
    revalidate: true,
    params,
    client,
    query: ` content[]{${heroBlockQuery(locale)},${sectionBlockQuery(
      locale
    )},${listingBlockQuery(locale)}},  ${seoQuery(locale)}, ${LangSwitcherQuery(
      locales
    )}, ${layoutQuery(locale)} ${NavigationQuery(locale)}`,
    locales,
    preview,
  });
};

export default Page;
