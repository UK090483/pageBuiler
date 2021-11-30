import React from "react";

import NextImage from "next/image";

interface ImageProps {
  src?: string;
  objectFit?: "cover" | "contain";
}

export const Image: React.FC<ImageProps> = ({ src, objectFit = "cover" }) => {
  const ranNum = (min: number = 4, max: number = 8) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  const ranImage = src || `${ranNum()}00/${ranNum()}00`;

  return (
    <NextImage
      blurDataURL={`https://picsum.photos/50/50?blur=2`}
      src={`https://picsum.photos/${ranImage}`}
      alt={"bla"}
      layout="fill"
      objectFit={objectFit}
    />
  );
};
