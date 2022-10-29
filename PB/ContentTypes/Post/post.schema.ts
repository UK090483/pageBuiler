import { addSeo } from "../../Objects/Seo/Seo.decorator";
import { getEditorField } from "../Base/Editor/editor.field";
import createContentType, { getSlugField } from "../helper";

const pageSchema = createContentType({
  name: "post",
  title: "Post",
  fields: [
    getSlugField(),
    getEditorField([
      { type: "hero" },
      { type: "section" },
      { type: "listing" },
      { type: "imageGalleryPlug" },
    ]),
  ],
});

export default addSeo(pageSchema);
