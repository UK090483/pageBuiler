import { createPreviewSubscriptionHook } from "next-sanity";
import { config } from "../../lib/SanityPageBuilder/lib/config";

const usePreviewSubscription = createPreviewSubscriptionHook({
  ...config,
});

export default usePreviewSubscription;
