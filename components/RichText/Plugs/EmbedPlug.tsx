import React from "react";

export const embedPlugQuery = `
_type == "image" => {
  _type,
  _key,
   url
}
`;

export type EmbedPlugResult = {
  _type: "embed";
  _key: string;
  url?: null | string;
};

type EmbedProps = {
  url?: string;
};

const EmbedPlug: React.FC<{ node: EmbedPlugResult }> = (props) => {
  const { url } = props.node;

  if (!url) return <div>url is missing</div>;

  return <div>Embed</div>;
};

export default EmbedPlug;
