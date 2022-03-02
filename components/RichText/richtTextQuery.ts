import { linkMarkQuery } from "./marks/link";
import eventPlugQuery from "./Plugs/EventPlug/EventPlugQuery";
import { imageGalleryPlugQuery } from "./Plugs/ImageGalleryPlug/ImageGalleryPlug";
import { ImagePlugQuery } from "./Plugs/ImagePlug/imagePlugQuery";
import { spacerPlugQuery } from "./Plugs/Spacer";

const marksQuery = `
markDefs[]{
  ...,
  ${linkMarkQuery},
}
`;
export const richTextQuery = (locale: string = "") => `
  ...,
  ${marksQuery},
  ${spacerPlugQuery},
  ${imageGalleryPlugQuery},
  ${ImagePlugQuery},
  ${eventPlugQuery},

`;
