import { sanityClient as client } from "@services/SanityService/sanity.server";

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
import HeroBlock, {
  heroBlockQuery,
} from "@components/Blocks/HeroBlock/HeroBlock";
import ListingBlock, {
  listingBlockQuery,
} from "@components/Blocks/ListingBlock/ListingsBlock";
import SectionBlock, {
  sectionBlockQuery,
} from "@components/Blocks/SectionBlock/SectionBlock";
import SPB from "lib/SanityPageBuilder/SPB";

export type PageResult = PageBuilderResult &
  LangSwitcherResult &
  NavigationResult &
  SeoResult &
  Page;

// export interface PageData extends NavigationResult, FooterQueryResult {
//   content: (SectionBlockResult | ListingBlockProps | HeroBlogResult)[];
//   title?: string;
// }

const { getStaticPaths, getStaticProps, PageComponent } = SPB<PageResult>({
  revalidate: 1,
  client,
  locales: config.locales,

  getQuery: (props) => {
    const { locale } = props;
    const res = `..., ${blockFactory.getRootQuery({ locale })}, ${seoQuery(
      locale
    )}, ${LangSwitcherQuery(config.locales)}, ${NavigationQuery(locale)}`;
    return res;
  },
  components: [
    {
      name: "hero",
      component: HeroBlock,
      query: heroBlockQuery(""),
    },
    {
      name: "section",
      component: SectionBlock,
      query: sectionBlockQuery(""),
    },
    {
      name: "listing",
      component: ListingBlock,
      query: listingBlockQuery(""),
    },
  ],
});

export { getStaticPaths, getStaticProps };

export default PageComponent;
