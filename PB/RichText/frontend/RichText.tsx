import { PortableText, PortableTextMarkComponent } from "@portabletext/react";

import Link from "@components/Link";
import EmbedHTML from "PageBuilderPlugins/EmbedHTML/frontend/EmbedHTML";
import ImagePlug from "PageBuilderPlugins/ImagePlug/frontend/ImagePlug";
import PlayerPlug from "PageBuilderPlugins/VideoPlug/PlayerPlug/PlayerPlug";
import React from "react";

type RichTextPros = {
  content?: any;
};

const MarkLink: PortableTextMarkComponent = (props) => {
  const { value, children } = props;
  return <Link {...value}>{children}</Link>;
};

const RichText: React.FC<RichTextPros> = (props) => {
  const { content = [] } = props;
  return (
    <PortableText
      value={content}
      components={{
        marks: { link: MarkLink },
        types: {
          embed: EmbedHTML,
          videoPlug: PlayerPlug,
          imagePlug: ImagePlug,
        },
      }}
    />
  );
};

export default RichText;
