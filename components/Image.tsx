import React from "react";

import NextImage from "next/image";

interface ImageProps {}

export const Image: React.FC<ImageProps> = () => {
  const ranNum = (min: number = 5, max: number = 8) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <NextImage
      blurDataURL={`https://picsum.photos/${ranNum()}/${ranNum()}`}
      src={`https://picsum.photos/${ranNum()}00/${ranNum()}00`}
      alt={"bla"}
      layout="fill"
      objectFit="cover"
    />
  );
};
