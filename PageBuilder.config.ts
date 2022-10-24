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

export default createConfig(
  [
    {
      contentTypes: [
        {
          name: "page",
          title: "Page",
          editor: "body",
          hasPage: true,
          isRoot: true,
        },
      ],
    },
    GalleryPlug(),
    SectionPlugin(),
    BlogPlugin({ editor: "body" }),
    EventPlugin(),
    ListingPlugin({
      items: [
        { name: "page", title: "Page" },
        { name: "post", title: "Post" },
        { name: "event", title: "Event" },
      ],
    }),
    MenuPlugin(),
    SeoPlugin(),
    RichText({
      name: "defaultRichtext",
      annotations: [{ type: "link" }],
      plugs: ["imagePlug", "imageGalleryPlug"],
    }),
    HeroPlugin(),
    EditorPlugin({
      components: ["section", "listing", "hero", "imageGalleryPlug"],
    }),
    ImagePlug(),
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
