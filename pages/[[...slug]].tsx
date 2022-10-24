import { useAppContext } from "@components/AppContext";
import appQuery, { appQueryResult } from "@components/AppContext/appQuery";
import HeroBlock from "@components/Blocks/HeroBlock";
import heroBlockQuery from "@components/Blocks/HeroBlock/HeroBlockQuery";
import ListingBlock from "@components/Blocks/ListingBlock";
import listingBlockQuery from "@components/Blocks/ListingBlock/listingBlockQuery";
import SectionBlock from "@components/Blocks/SectionBlock";
import sectionBlockQuery from "@components/Blocks/SectionBlock/SectionBlockQuery";
import BodyParser from "PageBuilder/BodyParser";
import GalleryPlug from "PageBuilderPlugins/GalleryPlug/frontend/ImageGalleryComponent";
import { sanityClient } from "@lib/SanityService/sanity.server";
import type { GetStaticPaths, GetStaticProps } from "next";
import config from "PageBuilder.config";
import { fetchStaticPath, fetchStaticProps } from "PageBuilder";

export type PageResult = appQueryResult & { content?: any };

const Page = () => {
  return (
    <>
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
          imageGalleryPlug: {
            component: GalleryPlug,
          },
        }}
      />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return await fetchStaticPath({ context, sanityClient, config });
};

export const getStaticProps: GetStaticProps = async (context) => {
  return await fetchStaticProps({ context, sanityClient, config });
};

export default Page;
