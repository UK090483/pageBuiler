import getPreviewApi from "PageBuilder/Preview/previewApi";
import { sanityClient as client } from "@lib/SanityService/sanity.server";
const prevApi = getPreviewApi({ client });
export default prevApi;
