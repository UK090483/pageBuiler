import {
  createPreviewSubscriptionHook,
  createCurrentUserHook,
} from "next-sanity";
import { config } from "./config";
export const usePreviewSubscription = createPreviewSubscriptionHook(config);
