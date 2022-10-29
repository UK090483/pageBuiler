import { withLocalization } from "./helper/withLocalization";
import { navigationSchema } from "./Navigation/navigation.schema";

import pageSchema from "./ContentTypes/Page/page.schema";
import postSchema from "./ContentTypes/Post/post.schema";

import heroSchema from "./Components/Hero/hero.schema";
import sectionSchema from "./Components/Section/section.schema";
import listingSchema from "./Components/Listing/listing.schema";
import imageGallerySchema from "./Components/ImageGallery/ImageGallery.schema";

import seoSchema from "./Objects/Seo/Seo.schema";

import defaultRichTextSchema from "./RichText/defaultRichText.schema";
import heroRichTextSchema from "./RichText/heroRichText.schema";
import imagePlugSchema from "./RichText/Plugs/ImagePlug/ImagePlug.schema";
import EmbedHtmlSchema from "./RichText/Plugs/EmbedHTML/EmbedHtml.schema";
import VideoPlugSchema from "./RichText/Plugs/videoPlug/video.schema";
import linkSchema from "./Objects/link/link.schema";
import { locale } from "./constants";

export default withLocalization(
  [
    ...navigationSchema,
    ...seoSchema,
    linkSchema,
    pageSchema,
    postSchema,
    heroSchema,
    sectionSchema,
    listingSchema,
    imageGallerySchema,
    EmbedHtmlSchema,
    imagePlugSchema,
    VideoPlugSchema,
    defaultRichTextSchema,
    heroRichTextSchema,
  ],
  locale
);
