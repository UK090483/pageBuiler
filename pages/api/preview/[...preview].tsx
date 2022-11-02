import getPreviewApi from "PageBuilder/lib/Preview/previewApi";
import { previewClient as client } from "@lib/SanityService/sanity.server";
const prevApi = getPreviewApi({ client });
export default prevApi;
