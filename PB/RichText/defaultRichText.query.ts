import { sectionType } from "../Components/Section/SectionType";
import { heroResult } from "../Components/Hero/heroType";
import { listingResult } from "../Components/Listing/listing.types";
import { ImageGalleryPlugResult } from "../Components/ImageGallery/imageGallery.types";
import { Block } from "../types";

export const defaultRichTextQuery = (locale?: string) => ``;

export type defaultRichTextQueryResult = (
  | Block
  | heroResult
  | sectionType
  | listingResult
  | ImageGalleryPlugResult
)[];
