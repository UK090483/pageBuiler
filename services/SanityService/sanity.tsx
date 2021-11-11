import createImageUrlBuilder from "@sanity/image-url";
import { createPreviewSubscriptionHook } from "next-sanity";

import { config } from "./config";

export const imageBuilder = createImageUrlBuilder(config);
const theExport: {
  [index: string]: any;
} = {
  usePreviewSubscription: createPreviewSubscriptionHook(config),
};

export default theExport;
