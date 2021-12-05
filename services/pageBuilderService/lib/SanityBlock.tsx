import React from "react";

import { SanityBlock as SanityBlockType } from "types";
import BlockContent, {
  BlockContentProps,
  Serializers,
} from "@sanity/block-content-to-react";

export interface MarkProps<P = string> {
  children: string[];
  mark: P;
  markKey: string;
  _key: string;
  _type: string;
}

interface SanityBlockProps extends Serializers {
  content: SanityBlockType;
}

export const SanityBlock: React.FC<SanityBlockProps> = ({
  content,
  ...rest
}) => {
  return <BlockContent blocks={content} serializers={rest} />;
};
