/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
// @ts-nocheck
import React from "react";

import BlockContent from "@sanity/block-content-to-react";

import LinkMark, { linkMarkQuery } from "./marks/link";
import ButtonPlug, { buttonPlugQuery } from "./Plugs/ButtonPlug";
import { downloadPlugQuery } from "./Plugs/DownLoadPlug";
import EmbedPlug, { embedPlugQuery } from "./Plugs/EmbedPlug";
import { imageGalleryPlugQuery } from "./Plugs/ImageGaleriePlug";
import { imagePlugQuery } from "./Plugs/ImagePlug";
import Typo from "@components/Typography/Typography";

const marksQuery = `
markDefs[]{
  ...,
  ${linkMarkQuery},
}
`;

export const richTextQuery = `
content[]{
  ...,
  ${marksQuery},
  ${buttonPlugQuery},
  ${embedPlugQuery},
  ${imagePlugQuery},
  ${imageGalleryPlugQuery},
 
  ${downloadPlugQuery},
}
`;

export interface RichTextQueryResult {
  _type: "richText" | "block";
  _key: string;
  content: any[];
}

const link = (props: any) => {
  return <LinkMark {...props.mark}>{props.children}</LinkMark>;
};

const tag = (props: any) => {
  return <Typo variant={props.mark.tag}>{props.children}</Typo>;
};

const list = (props: any) => {
  return (
    <ul
      className={`${"list-disc"} list-outside pl-8 text-base-fluid pb-3 leading-[1.1em]`}
    >
      {props.children}
    </ul>
  );
};

const styles = { h1: "h1", h2: "h2", h3: "h3", h4: "h4", normal: "body1" };

const BlockRenderer = (props: any) => {
  const { style = "normal" } = props.node;

  if (!props.children[0]) {
    return <Typo spacer />;
  }

  if (Object.keys(styles).includes(style)) {
    return (
      <Typo variant={styles[style]} as={"p"}>
        {props.children}
      </Typo>
    );
  }

  if (style === "blockquote") {
    return <blockquote>- {props.children}</blockquote>;
  }

  return BlockContent.defaultSerializers.types.block(props);
};

const serializer = {
  list,
  types: {
    button: ButtonPlug,
    embed: EmbedPlug,
    block: BlockRenderer,
  },
  marks: {
    link,
    tag,
  },
};

const RichText: React.FC<any> = (props: any) => {
  // eslint-disable-next-line no-underscore-dangle
  const isBlock = props._type === "block";

  return (
    <BlockContent
      blocks={isBlock ? props : props.content}
      serializers={serializer}
    />
  );
};

export default RichText;
