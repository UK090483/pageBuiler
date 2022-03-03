import SanityImage from "@lib/SanityImage";
import * as React from "react";
import { AutoGalleryPlugQueryItemResult } from "./AutoGalleryPlugQuery";

interface IAutoGalleryPlugItemProps extends AutoGalleryPlugQueryItemResult {
  variant: "grid-3";
}

const AutoGalleryPlugItem: React.FC<IAutoGalleryPlugItemProps> = (props) => {
  const { image, variant } = props;

  return (
    <div className=" w-full pb-1 relative ">
      <SanityImage image={image} />
      <div className=" transition-colors hover:bg-transparent absolute inset-0 bg-white opacity-20 mb-3 " />
    </div>
  );
};

export default AutoGalleryPlugItem;
