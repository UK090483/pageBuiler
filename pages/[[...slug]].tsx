import { sanityClient as client } from "@lib/SanityService/sanity.server";
import config from "../app.config.json";
import {
  LangSwitcherQuery,
  LangSwitcherResult,
} from "@lib/LangSwitcherService/LangSwitcherQuery";
import { seoQuery, SeoResult } from "@lib/SeoService/SeoQuerys";
import HeroBlock from "@components/Blocks/HeroBlock/HeroBlock";
import { heroBlockQuery } from "@components/Blocks/HeroBlock/HeroBlockQuery";

import SectionBlock, {
  sectionBlockQuery,
} from "@components/Blocks/SectionBlock/SectionBlock";
import SPB from "@lib/SanityPageBuilder/SPB";
import { NavigationQuery, NavigationResult } from "@lib/Navigation/query";
import blockFactory from "@lib/SanityPageBuilder/lib/BlockFactory";
import { layoutQuery, layoutQueryResult } from "@components/Layout/LayoutQuery";
import { listingBlockQuery } from "@components/Blocks/ListingBlock/listingBlockQuery";
import ListingBlock from "@components/Blocks/ListingBlock/ListingsBlock";

export type PageResult = { title?: string } & layoutQueryResult &
  LangSwitcherResult &
  NavigationResult &
  SeoResult;

const { getStaticPaths, getStaticProps, PageComponent } = SPB<PageResult>({
  revalidate: 1,
  client,
  locales: config.locales,
  getQuery: (props) => {
    const { locale } = props;
    const res = `${layoutQuery(locale)} ${blockFactory.getRootQuery({
      locale,
    })}, ${seoQuery(locale)}, ${LangSwitcherQuery(
      config.locales
    )}, ${NavigationQuery(locale)}`;
    return res;
  },
  components: [
    {
      name: "hero",
      component: HeroBlock,
      query: heroBlockQuery,
    },
    {
      name: "section",
      component: SectionBlock,
      query: sectionBlockQuery,
    },
    {
      name: "listing",
      component: ListingBlock,
      query: listingBlockQuery,
    },
  ],
});

export { getStaticPaths, getStaticProps };

export default PageComponent;
