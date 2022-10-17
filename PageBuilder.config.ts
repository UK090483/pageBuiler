import createConfig from "./PageBuilder/lib/createConfig";
import BlogPlugin from "./PageBuilderPlugins/BlogPlugin";
import EventPlugin from "./PageBuilderPlugins/EventsPlugin";
import ListingPlugin from "./PageBuilderPlugins/ListingPlugin";
import MenuPlugin from "./PageBuilderPlugins/MenuPlugin/MenuPlugin";
import PagePlugin from "./PageBuilderPlugins/PagePlugin";
import SeoPlugin from "./PageBuilderPlugins/SeoPlugin/SeoPlugin";
import RichText from "./PageBuilderPlugins/RichText/RichText";
import HeroPlugin from "./PageBuilderPlugins/HeroPlugin/HeroPlugin";

export default createConfig([
  PagePlugin(),
  BlogPlugin(),
  EventPlugin(),
  ListingPlugin(),
  MenuPlugin(),
  SeoPlugin(),
  RichText(),
  HeroPlugin(),
]);
