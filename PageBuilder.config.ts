import createConfig from "./PageBuilder/lib/createConfig";
import BlogPlugin from "./PageBuilderPlugins/BlogPlugin";
import EventPlugin from "./PageBuilderPlugins/EventsPlugin";
import ListingPlugin from "./PageBuilderPlugins/ListingPlugin/ListingPlugin";
import MenuPlugin from "./PageBuilderPlugins/MenuPlugin/MenuPlugin";
import SectionPlugin from "./PageBuilderPlugins/SectionPlugin";
import SeoPlugin from "./PageBuilderPlugins/SeoPlugin/SeoPlugin";
import RichText from "./PageBuilderPlugins/RichText/RichText";
import HeroPlugin from "./PageBuilderPlugins/HeroPlugin/HeroPlugin";
import BlogEditorPlugin from "./PageBuilderPlugins/BlockEditorPlugin/BlogEditorPlugin";
import { PageBuilderContentTypeResult } from "./PageBuilder/types";
import { MenuPluginResult } from "PageBuilderPlugins/MenuPlugin/types";

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
    SectionPlugin(),
    BlogPlugin({ editor: "body" }),
    EventPlugin(),
    ListingPlugin(),
    MenuPlugin(),
    SeoPlugin(),
    RichText({ name: "defaultRichtext" }),
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
