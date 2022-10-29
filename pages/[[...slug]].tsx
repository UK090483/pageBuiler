import BodyParser from "PageBuilder/BodyParser";
import GalleryPlug from "PB/Components/ImageGallery/frontend/ImageGalleryPlug";
import SectionBlock from "PB/Components/Section/frontend/SectionBlock";
import HeroBlock from "PB/Components/Hero/frontend/HeroBlock";
import ListingBlock from "PageBuilderPlugins/ListingPlugin/frontend/ListingBlock";

import { sanityClient } from "@lib/SanityService/sanity.server";

import type { GetStaticPaths, GetStaticProps } from "next";

import fetchStaticPath from "PB/next/fetchStaticPath";
import fetchStaticProps from "PB/next/fetchStaticProps";

import { pageQuery } from "PB/ContentTypes/Page/page.query";
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
  return await fetchStaticPath({
    context,
    sanityClient,
    items: [{ name: "page" }],
  });
};

export const getStaticProps: GetStaticProps = async (context) => {
  return await fetchStaticProps({
    context,
    sanityClient,
    items: {
      page: { query: pageQuery },
      post: { query: pageQuery },
    },
  });
};

export default Page;
