import React from "react";
import NextImage, { ImageLoader } from "next/image";
import { ImageMetaResult } from "@services/pageBuilderService/queries/snippets";
import useSanityImage from "@services/pageBuilderService/lib/useSanityImage";

interface ImageProps {
  src?: string;
  objectFit?: "cover" | "contain";
  image?: ImageMetaResult;
  alt: string;
}

export const Image: React.FC<ImageProps> = (props) => {
  const { src, objectFit = "cover", image } = props;

  let imageProps = useSanityImage(image);

  if (!imageProps) return null;

  const { width, height, ...rest } = imageProps;

  return <NextImage {...rest} layout="fill" objectFit={objectFit} />;
};
