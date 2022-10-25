import List from "@components/RichText/list/List";
import AutoGalleryPlug from "@components/RichText/Plugs/AutoGalleryPlug/AutoGalleryPlug";
import SeoTextPlug from "@components/RichText/Plugs/SeoTextPlug";
import Typo from "@components/Typography/Typography";
import SanityRichText, { SanityBlock } from "../lib/RichText";
import link from "next/link";
import EmbedHTML from "PageBuilderPlugins/EmbedHTML/EmbedHTML";
import ImageGalleryPlug from "PageBuilderPlugins/GalleryPlug/frontend/ImageGalleryPlug";
import ImagePlug from "PageBuilderPlugins/ImagePlug/ImagePlug";
import PlayerPlug from "PageBuilderPlugins/VideoPlug/PlayerPlug/PlayerPlug";
import React from "react";

const styles: { [k: string]: string } = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  normal: "body",
};

type RichTextPros = {
  content?: SanityBlock[];
};

const RichText: React.FC<RichTextPros> = (props: any) => {
  return (
    <SanityRichText
      list={List}
      content={props.content}
      plugs={{
        imageGalleryPlug: ImageGalleryPlug,

        // imagePlug: ImagePlug,
        // embedHTML: EmbedHTML,
        seoText: SeoTextPlug,
        playerPlug: PlayerPlug,
        autoGalleryPlug: AutoGalleryPlug,
      }}
      // marks={{ link }}
      blockRenderer={(props) => {
        const { style = "normal" } = props.node;

        if (!props.children[0]) {
          return <Typo spacer />;
        }
        if (styles[style]) {
          return <Typo variant={styles[style]}>{props.children}</Typo>;
        }

        if (style === "blockquote") {
          return <blockquote>- {props.children}</blockquote>;
        }
      }}
    />
  );
};

export default RichText;

export {};
