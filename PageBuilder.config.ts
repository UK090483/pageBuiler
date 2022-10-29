import createConfig from "./PageBuilder/lib/createConfig";
import BlogPlugin from "./PageBuilderPlugins/BlogPlugin";
import EventPlugin from "./PageBuilderPlugins/EventsPlugin";
import ListingPlugin from "./PageBuilderPlugins/ListingPlugin/ListingPlugin";
import MenuPlugin from "./PageBuilderPlugins/MenuPlugin/MenuPlugin";
import SectionPlugin from "./PageBuilderPlugins/SectionPlug/SectionPlugin";
import SeoPlugin from "./PageBuilderPlugins/SeoPlugin/SeoPlugin";
import RichText from "./PageBuilderPlugins/RichText/RichText";
import HeroPlugin from "./PageBuilderPlugins/HeroPlugin/HeroPlugin";
import EditorPlugin from "./PageBuilderPlugins/EditorPlugin/EditorPlugin";
import { PageBuilderContentTypeResult } from "./PageBuilder/types";
import { MenuPluginResult } from "PageBuilderPlugins/MenuPlugin/types";
import ImagePlug from "./PageBuilderPlugins/ImagePlug/ImagePlug";

import GalleryPlug from "./PageBuilderPlugins/GalleryPlug/GalleryPlug";
import { SeoQueryResult } from "PageBuilderPlugins/SeoPlugin/query";
import VideoPlug from "./PageBuilderPlugins/VideoPlug/VideoPlug";
import EmbedHTML from "./PageBuilderPlugins/EmbedHTML/EmbedHTML";
import ContentType from "./PageBuilderPlugins/ContentType/ContentType";
import ComponentStyle from "./PageBuilderPlugins/ComponentStylePlugin/ComponentStyle";
import componentStyleQuery from "./PageBuilderPlugins/ComponentStylePlugin/query";
export default createConfig(
  [
    // ContentType({
    //   name: "page",
    //   title: "Page",
    //   editor: "body",
    //   hasPage: true,
    //   isRoot: true,
    // }),
    // ContentType({
    //   name: "person",
    //   title: "Person/Institution",
    //   hasPage: false,
    // }),

    // EmbedHTML(),
    // GalleryPlug(),
    // SectionPlugin(),
    // BlogPlugin({ editor: "body" }),
    // EventPlugin(),
    VideoPlug(),
    // ListingPlugin({
    //   onCreateQuery: ({ query }) => {
    //     const e = query + componentStyleQuery;
    //     console.log(e);
    //     return e;
    //   },
    //   items: [
    //     { name: "page", title: "Page" },
    //     {
    //       name: "post",
    //       title: "Post",
    //       variants: [
    //         { value: "grid", title: "Grid" },
    //         { value: "list", title: "List" },
    //       ],
    //     },
    //     { name: "event", title: "Event" },
    //   ],
    // }),
    // MenuPlugin(),
    // SeoPlugin(),
    // RichText({
    //   name: "defaultRichtext",
    //   annotations: [{ type: "link" }],
    //   plugs: ["imagePlug", "imageGalleryPlug", "videoPlug", "embed"],
    // }),
    // HeroPlugin(),
    // EditorPlugin({
    //   components: ["section", "listing", "hero", "imageGalleryPlug"],
    // }),

    // RichText({
    //   name: "heroRichtext",
    // }),

    // ImagePlug(),
    // ComponentStyle(),
  ],
  {
    locale: {
      de: { title: "Deutsch", isDefault: true, flag: "🇩🇪" },
      en: { title: "Englisch", flag: "🇺🇸" },
    },
  }
);

export type PageData = PageBuilderContentTypeResult &
  MenuPluginResult &
  SeoQueryResult;
