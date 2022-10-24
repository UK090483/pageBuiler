import { PlugProps } from "@lib/SanityPageBuilder/lib/RichText";
import React from "react";
import { ImageGalleryPlugResult } from "./imageGalleryPlugQuery";
import ImageGalleryComponent from "./ImageGalleryComponent";

const ImageGalleryPlug: React.FC<PlugProps<ImageGalleryPlugResult>> = (
  props
) => {
  return <ImageGalleryComponent {...props.node} />;
};

export default ImageGalleryPlug;
