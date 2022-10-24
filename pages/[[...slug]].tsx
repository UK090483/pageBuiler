import BodyParser from "PageBuilder/BodyParser";
import GalleryPlug from "PageBuilderPlugins/GalleryPlug/frontend/ImageGalleryComponent";
import SectionBlock from "PageBuilderPlugins/SectionPlug/frontend/SectionBlock";
import HeroBlock from "PageBuilderPlugins/HeroPlugin/frontend/HeroBlock";
import ListingBlock from "PageBuilderPlugins/ListingPlugin/frontend/ListingBlock";

import { sanityClient } from "@lib/SanityService/sanity.server";

import type { GetStaticPaths, GetStaticProps } from "next";
import config from "PageBuilder.config";
import { fetchStaticPath, fetchStaticProps } from "PageBuilder";

export type PageResult = { content?: any };

const Page = () => {
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
        imageGalleryPlug: {
          component: GalleryPlug,
        },
      }}
    />
  );
};

export const getStaticPaths: GetStaticPaths = async (context) => {
  return await fetchStaticPath({ context, sanityClient, config });
};

export const getStaticProps: GetStaticProps = async (context) => {
  return await fetchStaticProps({ context, sanityClient, config });
};

export default Page;
