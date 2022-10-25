import { PlugProps } from "PageBuilderPlugins/RichText/types";
import React from "react";

interface IEmbedHTMLProps {
  html?: string | null;
}

const EmbedHTML: React.FC<PlugProps<IEmbedHTMLProps>> = (props) => {
  const { html } = props.node;
  if (!html) return null;
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default EmbedHTML;
