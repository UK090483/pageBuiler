import { heroQueryProjection } from "../../../Components/Hero/hero.query";
import { heroResult } from "../../../Components/Hero/heroType";
import {
  imageGalleryPlugQuery,
  ImageGalleryPlugResult,
} from "../../../Components/ImageGallery/imageGallery.query";
import { listProjection } from "../../../Components/Listing/listing.query";
import { listingResult } from "../../../Components/Listing/listing.types";
import { sectionBlockQuery } from "../../../Components/Section/section.query";
import { sectionType } from "../../../Components/Section/SectionType";
import { localizedQueryFn } from "../../../helper/withLocalization";
import { Block } from "../../../types";

export const editorQuery: localizedQueryFn = (locale) => `
${heroQueryProjection(locale)}
${sectionBlockQuery(locale)}
${listProjection(locale)}
${imageGalleryPlugQuery(locale)}
`;

export type defaultRichTextQueryResult = (
  | Block
  | heroResult
  | sectionType
  | listingResult
  | ImageGalleryPlugResult
)[];
