import { linkMarkQuery } from "./marks/link";
import autoGalleryPlugQuery from "./Plugs/AutoGalleryPlug/AutoGalleryPlugQuery";

import { imageGalleryPlugQuery } from "./Plugs/ImageGalleryPlug/ImageGalleryPlug";
import { ImagePlugQuery } from "./Plugs/ImagePlug/imagePlugQuery";
import { spacerPlugQuery } from "./Plugs/Spacer";

const marksQuery = `
markDefs[]{
  ...,
  ${linkMarkQuery},
}
`;
export const richTextQuery = (locale: string = "") => {
  return `
  ...,
  ${marksQuery},
  ${spacerPlugQuery},
  ${imageGalleryPlugQuery},
  ${ImagePlugQuery},
  ${autoGalleryPlugQuery},
`;
};

export const richTextQueryShort = (locale: string = "") => `
  ...,
  ${marksQuery},
`;
