import { createPreviewSubscriptionHook } from "next-sanity";
import { config } from "../../../lib/SanityService/config";

const usePreviewSubscription = createPreviewSubscriptionHook({
  ...config,
});

export default usePreviewSubscription;
