export type ListingPluginItem = {
  _id: string;
  title?: string;
  featuredImage?: any;
  description?: string;
  slug: string;
};

export type ListingPluginResult = {
  items?: ListingPluginItem[] | null;
};
