import createConfig from "./PageBuilder/lib/createConfig";
import BlogPlugin from "./PageBuilderPlugins/BlogPlugin";
import EventPlugin from "./PageBuilderPlugins/EventsPlugin";
import ListingPlugin from "./PageBuilderPlugins/ListingPlugin";
import MenuPlugin from "./PageBuilderPlugins/MenuPlugin/MenuPlugin";
import PagePlugin from "./PageBuilderPlugins/PagePlugin";
import SeoPlugin from "./PageBuilderPlugins/SeoPlugin/SeoPlugin";
import RichText from "./PageBuilderPlugins/RichText/RichText";
import HeroPlugin from "./PageBuilderPlugins/HeroPlugin/HeroPlugin";
import BlogEditorPlugin from "./PageBuilderPlugins/BlockEditorPlugin/BlogEditorPlugin";
import { PageBuilderContentTypeResult } from "./PageBuilder/types";
import { MenuPluginResult } from "PageBuilderPlugins/MenuPlugin/types";

export default createConfig(
  [
    PagePlugin(),
    BlogPlugin({ editor: "body" }),
    EventPlugin(),
    ListingPlugin(),
    MenuPlugin(),
    SeoPlugin(),
    RichText(),
    HeroPlugin(),
    BlogEditorPlugin({ components: ["hero", "section", "listing"] }),
  ],
  {
    locale: {
      de: { title: "Deutsch", isDefault: true, flag: "🇩🇪" },
      en: { title: "Englisch", flag: "🇺🇸" },
    },
  }
);

export type PageData = PageBuilderContentTypeResult & MenuPluginResult;
