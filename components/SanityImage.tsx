import Image, { ImageLoader, ImageProps } from "next/image";
import { ImageResult } from "PageBuilder/constants";
import * as React from "react";

import { useNextSanityImage } from "next-sanity-image";
import { config } from "@lib/SanityService/config";

const clientLike = {
  clientConfig: {
    ...config,
  },
};
export interface ISanityImageProps extends Omit<ImageProps, "src" | "alt"> {
  src?: ImageResult;
  alt?: string;
}

const loader: ImageLoader = (props) => {
  const { src, width, quality } = props;
  const res = `${src}?w=${width}${quality ? "&q=" + quality : ""}`;
  return res;
};

function SanityImage(props: ISanityImageProps) {
  const { alt, src, className, fill, ...rest } = props;

  const img = src ? src : null;
  //@ts-ignore
  const imageProps = useNextSanityImage(clientLike, img);
  if (!src || !src.url) return null;
  const _alt = alt || src.alt || "alt";
  const _url = src.url || "";

  console.log({ imageProps, src });

  return (
    <Image
      {...rest}
      {...handleWidthAndHeight(props)}
      className={className}
      placeholder="blur"
      blurDataURL={src?.lqip}
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
  if (props.width && props.height) {
    return {
      width: props.width,
      height: props.height,
    };
  }
  if (props.width && !props.height) {
    return {
      width: props.width,
      height: parseInt(props.width + "") * props.src.aspectRatio,
    };
  }
  if (!props.width && props.height) {
    return {
      width: parseInt(props.height + "") / props.src.aspectRatio,
      height: props.height,
    };
  }
  return {
    width: props.src.width,
    height: props.src.height,
  };
};
