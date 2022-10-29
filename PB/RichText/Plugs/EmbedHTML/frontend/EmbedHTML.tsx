import { PortableTextComponent } from "@portabletext/react";
import { PlugProps } from "PageBuilderPlugins/RichText/types";
import React from "react";

interface IEmbedHTMLProps {
  html?: string | null;
}

const EmbedHTML: PortableTextComponent<IEmbedHTMLProps> = (props) => {
  const { value } = props;
  if (!value?.html) return null;
  return <div dangerouslySetInnerHTML={{ __html: value?.html }} />;
};

export default EmbedHTML;
