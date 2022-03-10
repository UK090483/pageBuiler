import React from "react";
import dynamic from "next/dynamic";
import link from "./marks/link";

const ImageGalleryPlug = dynamic(
  () => import("./Plugs/ImageGalleryPlug/ImageGalleryPlug")
);
const PlayerPlug = dynamic(() => import("./Plugs/PlayerPlug/PlayerPlug"));
import Typo from "@components/Typography/Typography";
import SpacerPlug from "./Plugs/Spacer";
import SanityRichText from "@lib/SanityPageBuilder/lib/RichText";
import List from "./list/List";
import ImagePlug from "./Plugs/ImagePlug/ImagePlug";
import EmbedHTML from "./Plugs/EmbedHTML/EmbedHTML";
import EventPlug from "./Plugs/EventPlug/EventPlug";
import AutoGalleryPlug from "./Plugs/AutoGalleryPlug/AutoGalleryPlug";

const styles = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", normal: "body" };

const RichText: React.FC<any> = (props: any) => {
  return (
    <SanityRichText
      list={List}
      content={props.content}
      plugs={{
        //@ts-ignore
        imageGalleryPlug: ImageGalleryPlug,
        spacer: SpacerPlug,
        imagePlug: ImagePlug,
        eventPlug: EventPlug,
        embedHTML: EmbedHTML,
        //@ts-ignore
        playerPlug: PlayerPlug,
        autoGalleryPlug: AutoGalleryPlug,
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
            <Typo
              //@ts-ignore
              variant={styles[style]}
              //  as={"p"}
            >
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
