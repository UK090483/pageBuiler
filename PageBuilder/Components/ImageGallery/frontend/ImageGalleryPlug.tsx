import React from "react";
import { ImageGalleryPlugResult } from "../imageGallery.query";
import ImageGalleryComponent from "./ImageGalleryComponent";
import { PortableTextComponent } from "@portabletext/react";
const ImageGalleryPlug: PortableTextComponent<ImageGalleryPlugResult> = (
  props
) => {
  return <ImageGalleryComponent {...props.value} />;
};

export default ImageGalleryPlug;
