import { PortableTextComponent } from "@portabletext/react";
import React from "react";
import { ImageGalleryPlugResult } from "./imageGalleryPlugQuery";
import ImageGalleryComponent from "./ImageGalleryComponent";

const ImageGalleryPlug: React.FC<
  PortableTextComponent<ImageGalleryPlugResult>
> = (props) => {
  return null;
  // return <ImageGalleryComponent {...props} />;
};

export default ImageGalleryPlug;
