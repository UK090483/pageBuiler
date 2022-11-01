import getPreviewApi from "PageBuilder/Preview/previewApi";
import { previewClient as client } from "@lib/SanityService/sanity.server";
const prevApi = getPreviewApi({ client });
export default prevApi;
