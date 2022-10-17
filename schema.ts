import type {
  SanityReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
};

/**
 * Site config
 *
 *
 */
export interface SiteConfig extends SanityDocument {
  _type: "siteConfig";

  /**
   * Home Page — `reference`
   *
   *
   */
  indexPage?: SanityReference<Page>;

  /**
   * Imprint Page — `reference`
   *
   *
   */
  imprintPage?: SanityReference<Page>;

  /**
   * Privacy Policy Page — `reference`
   *
   *
   */
  privacyPolicyPage?: SanityReference<Page>;
}

/**
 * Page
 *
 *
 */
export interface Page extends SanityDocument {
  _type: "page";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   * should be between 50 and 160 characters
   */
  description?: string;

  /**
   * featuredImage — `image`
   *
   *
   */
  featuredImage?: {
    _type: "featuredImage";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Page sections — `array`
   *
   * Add, edit, and reorder sections
   */
  body?: Array<Section | Listing>;

  /**
   * Seo — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   * should be between 50 and 160 characters
   */
  description?: string;

  /**
   * featuredImage — `image`
   *
   *
   */
  featuredImage?: {
    _type: "featuredImage";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Page sections — `array`
   *
   * Add, edit, and reorder sections
   */
  body?: Array<Section | Listing>;

  /**
   * Seo — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Event
 *
 *
 */
export interface Event extends SanityDocument {
  _type: "event";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   * should be between 50 and 160 characters
   */
  description?: string;

  /**
   * featuredImage — `image`
   *
   *
   */
  featuredImage?: {
    _type: "featuredImage";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Datum — `date`
   *
   *
   */
  date?: string;

  /**
   * End Datum — `date`
   *
   *
   */
  endDate?: string;

  /**
   * Seo — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Menu config
 *
 *
 */
export interface MenuConfig extends SanityDocument {
  _type: "menuConfig";

  /**
   * Main Navigation — `array`
   *
   *
   */
  mainNav?: Array<NavigationItem | NavigationDropdown | NavigationMegaMenu>;
}

/**
 * Seo config
 *
 *
 */
export interface SeoConfig extends SanityDocument {
  _type: "seoConfig";

  /**
   * Default — `seo`
   *
   *
   */
  seo?: Seo;
}

export type NavigationMegaMenuItem = {
  _type: "navigationMegaMenuItem";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Main Navigation — `array`
   *
   *
   */
  items?: Array<NavigationItem>;
};

export type NavigationMegaMenu = {
  _type: "navigationMegaMenu";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Main Navigation — `array`
   *
   *
   */
  items?: Array<NavigationMegaMenuItem | NavigationItem>;
};

export type NavigationDropdown = {
  _type: "navigationDropdown";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Main Navigation — `array`
   *
   *
   */
  items?: Array<NavigationItem>;
};

export type NavigationItem = {
  _type: "navigationItem";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Link — `link`
   *
   *
   */
  link?: Link;
};

export type Seo = {
  _type: "seo";
  /**
   * Meta Title — `string`
   *
   * Title used for search engines and browsers.
   */
  metaTitle?: string;

  /**
   * Meta Description — `text`
   *
   * Description for search engines.
   */
  metaDesc?: string;

  /**
   * Share Title — `string`
   *
   * TItle used for social sharing cards.
   */
  shareTitle?: string;

  /**
   * Share Description — `text`
   *
   * Description for social sharing cards.
   */
  shareDesc?: string;

  /**
   * Share Graphic — `image`
   *
   * Share graphics will be cropped to 1200x630
   */
  shareGraphic?: {
    _type: "shareGraphic";
    asset: SanityAsset;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type Section = {
  _type: "section";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Content — `defaultRichtext`
   *
   *
   */
  content?: DefaultRichtext;
};

export type Listing = {
  _type: "listing";
  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Content type — `string`
   *
   *
   */
  contentType?: "post" | "event";

  /**
   * Post Items — `reference`
   *
   *
   */
  postItems?: SanityReference<Post>;

  /**
   * Event Items — `reference`
   *
   *
   */
  eventItems?: SanityReference<Event>;
};

export type Link = {
  _type: "link";
  /**
   * Internal Link — `reference`
   *
   *
   */
  internal?: SanityReference<Page | Post>;

  /**
   * External Link — `url`
   *
   *
   */
  href?: string;
};

export type DefaultRichtext = Array<SanityBlock>;

export type Documents =
  | SiteConfig
  | Page
  | Post
  | Event
  | MenuConfig
  | SeoConfig;
