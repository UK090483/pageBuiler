import Image, { ImageLoader, ImageProps } from "next/image";
import * as React from "react";

export type ImageMetaResult = {
  alt: string | null;
  url?: string | null;
  hotspot?: { x: number; y: number } | null;
  crop?: { bottom: number; top: number; right: number; left: number } | null;
  id: string;
  type: string;
  aspectRatio: number;
  width: number;
  height: number;
  lqip: string;
};
export interface ISanityImageProps extends Omit<ImageProps, "src" | "alt"> {
  src?: ImageMetaResult;
  alt?: string;
}

const loader: ImageLoader = (props) => {
  const { src, width, quality } = props;
  const res = `${src}?w=${width}${quality ? "&q=" + quality : ""}`;
  return res;
};

function SanityImage(props: ISanityImageProps) {
  const { alt, src, className, fill, ...rest } = props;

  if (!src) return null;
  const _alt = alt || src.alt || "alt";
  const _url = src.url || "";

  return (
    <Image
      {...rest}
      {...handleWidthAndHeight(props)}
      className={className}
      placeholder="blur"
      blurDataURL={_url + "?w=100&q=50"}
      alt={_alt}
      src={_url}
      loader={loader}
    />
  );
}

export default SanityImage;

const handleWidthAndHeight = (props: ISanityImageProps) => {
  if (!props.src) return {};

  if (props.fill) {
    return { fill: true };
  }

  return {
    width: props.src.width,
    height: props.src.height,
  };
};
