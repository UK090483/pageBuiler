import createImageUrlBuilder from "@sanity/image-url";
import { createPreviewSubscriptionHook } from "next-sanity";
import sanityClient from "@sanity/client";
import { config } from "./config";

export const configuredSanityClient = sanityClient(config);

export const imageBuilder = createImageUrlBuilder(config);

export const usePreviewSubscription = createPreviewSubscriptionHook({
  ...config,
});

// const theExport: {
//   [index: string]: any;
// } = {
//   usePreviewSubscription: createPreviewSubscriptionHook(config),
// };

// export default theExport;
