import { PortableText, PortableTextMarkComponent } from "@portabletext/react";

import Link from "@components/Link";
import EmbedHTML from "../Plugs/EmbedHTML/frontend/EmbedHTML";
import ImagePlug from "../Plugs/ImagePlug/frontend/ImagePlug";
import PlayerPlug from "../Plugs/videoPlug/frontend/PlayerPlug";
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
