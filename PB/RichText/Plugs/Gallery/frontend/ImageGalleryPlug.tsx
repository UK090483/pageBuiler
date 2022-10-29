import { PlugProps } from "PageBuilderPlugins/RichText/types";
import React from "react";
import { ImageGalleryPlugResult } from "./imageGalleryPlugQuery";
import ImageGalleryComponent from "./ImageGalleryComponent";

const ImageGalleryPlug: React.FC<PlugProps<ImageGalleryPlugResult>> = (
  props
) => {
  return <ImageGalleryComponent {...props.node} />;
};

export default ImageGalleryPlug;
