import React from "react";
import link from "./marks/link";

import ImageGalleryPlug from "./Plugs/ImageGalleryPlug/ImageGalleryPlug";
import Typo from "@components/Typography/Typography";
import SpacerPlug from "./Plugs/Spacer";
import SanityRichText from "lib/SanityPageBuilder/lib/RichText";
import List from "./list/List";
import ImagePlug from "./Plugs/ImagePlug/ImagePlug";
import EmbedHTML from "./Plugs/EmbedHTML/EmbedHTML";
import EventPlug from "./Plugs/EventPlug/EventPlug";
import PlayerPlug from "./Plugs/PlayerPlug/PlayerPlug";

const styles = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", normal: "body" };

const RichText: React.FC<any> = (props: any) => {
  return (
    <SanityRichText
      list={List}
      content={props.content}
      plugs={{
        imageGalleryPlug: ImageGalleryPlug,
        spacer: SpacerPlug,
        imagePlug: ImagePlug,
        eventPlug: EventPlug,
        embedHTML: EmbedHTML,
        playerPlug: PlayerPlug,
      }}
      marks={{
        link,
        tag: (props: any) => {
          return <Typo variant={props.mark.tag}>{props.children}</Typo>;
        },
      }}
      blockRenderer={(props) => {
        const { style = "normal" } = props.node;

        if (!props.children[0]) {
          return <Typo spacer />;
        }
        if (Object.keys(styles).includes(style)) {
          return (
            //@ts-ignore
            <Typo variant={styles[style]} as={"p"}>
              {props.children}
            </Typo>
          );
        }
        if (style === "blockquote") {
          return <blockquote>- {props.children}</blockquote>;
        }
      }}
    />
  );
};

export default RichText;
