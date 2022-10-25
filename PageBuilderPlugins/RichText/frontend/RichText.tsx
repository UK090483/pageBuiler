import { PortableText } from "@portabletext/react";
import type { TypedObject } from "@portabletext/types";

import SeoTextPlug from "@components/RichText/Plugs/SeoTextPlug";
import link from "@components/Link";
import EmbedHTML from "PageBuilderPlugins/EmbedHTML/frontend/EmbedHTML";
import ImagePlug from "PageBuilderPlugins/ImagePlug/frontend/ImagePlug";
import PlayerPlug from "PageBuilderPlugins/VideoPlug/PlayerPlug/PlayerPlug";
import React from "react";

type RichTextPros = {
  content?: TypedObject[];
};

const RichText: React.FC<RichTextPros> = (props) => {
  const { content = [] } = props;
  return (
    <PortableText
      value={content}
      components={{
        marks: { link },
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
