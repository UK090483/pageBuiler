import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Blog Post
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
   * Slug — `slug`
   *
   * erreichbar unter http://localhost:3000/posts/...
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Header Image — `image`
   *
   *
   */
  headerImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Preview Image — `image`
   *
   *
   */
  previewImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };

  /**
   * Categories — `array`
   *
   *
   */
  categories?: Array<SanityKeyedReference<PostCategory>>;

  /**
   * Release date — `date`
   *
   *
   */
  releaseDate?: string;

  /**
   * Use default Header — `boolean`
   *
   *
   */
  default_header?: boolean;

  /**
   * Page sections — `array`
   *
   * Add, edit, and reorder sections
   */
  content?: Array<
    SanityKeyed<Section> | SanityKeyed<Hero> | SanityKeyed<Listing>
  >;

  /**
   * SEO / Share Settings — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Category
 *
 *
 */
export interface PostCategory extends SanityDocument {
  _type: "postCategory";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;
}

/**
 * Setting navigation
 *
 *
 */
export interface SettingNavigation extends SanityDocument {
  _type: "settingNavigation";

  /**
   * name — `text`
   *
   *
   */
  name?: string;
}

/**
 * Navigation
 *
 *
 */
export interface Navigation extends SanityDocument {
  _type: "navigation";

  /**
   * Main Navigation — `array`
   *
   *
   */
  item?: Array<SanityKeyed<Link> | SanityKeyed<NavigationDropdown>>;
}

/**
 * Landing Page
 *
 *
 */
export interface IndexPage extends SanityDocument {
  _type: "indexPage";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Title en — `string`
   *
   *
   */
  title_en?: string;

  /**
   * Header — `pageHeader`
   *
   *
   */
  pageHeader?: PageHeader;

  /**
   * Page sections — `array`
   *
   * Add, edit, and reorder sections
   */
  content?: Array<
    SanityKeyed<Section> | SanityKeyed<Hero> | SanityKeyed<Listing>
  >;

  /**
   * SEO / Share Settings — `seo`
   *
   *
   */
  seo?: Seo;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };
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
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Header — `pageHeader`
   *
   *
   */
  pageHeader?: PageHeader;

  /**
   * Footer — `reference`
   *
   * if empty it will use the default Footer
   */
  footer?: SanityReference<Footer>;

  /**
   * Page sections — `array`
   *
   * Add, edit, and reorder sections
   */
  content?: Array<
    SanityKeyed<Section> | SanityKeyed<Hero> | SanityKeyed<Listing>
  >;

  /**
   * SEO / Share Settings — `seo`
   *
   *
   */
  seo?: Seo;
}

/**
 * Default SEO / Share
 *
 *
 */
export interface SeoSettings extends SanityDocument {
  _type: "seoSettings";

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
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Config
 *
 *
 */
export interface ConfigSettings extends SanityDocument {
  _type: "configSettings";

  /**
   * Site Url — `string`
   *
   *
   */
  url?: string;

  /**
   * Kontakt Tel — `string`
   *
   *
   */
  kontaktTel?: string;

  /**
   * Kontakt Mail — `string`
   *
   *
   */
  kontaktMail?: string;

  /**
   * Kontakt Adress — `text`
   *
   *
   */
  kontaktAdress?: string;

  /**
   * CVR number — `string`
   *
   *
   */
  cvr?: string;
}

/**
 * Footer
 *
 *
 */
export interface Footer extends SanityDocument {
  _type: "footer";

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Page sections — `array`
   *
   * Add, edit, and reorder sections
   */
  content?: Array<
    SanityKeyed<Section> | SanityKeyed<Hero> | SanityKeyed<Listing>
  >;
}

/**
 * Redirect
 *
 *
 */
export interface Redirect extends SanityDocument {
  _type: "redirect";

  /**
   * From — `string`
   *
   *
   */
  from?: string;

  /**
   * To — `string`
   *
   *
   */
  to?: string;

  /**
   * Is Permanent? — `boolean`
   *
   *
   */
  isPermanent?: boolean;
}

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

export type DefaultImage = {
  _type: "defaultImage";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessiblity.
   */
  alt?: string;
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
   * contentType — `string`
   *
   *
   */
  contentType?: "post" | "project";
};

export type PageHeader = {
  _type: "pageHeader";
  /**
   * Initial Page header color — `string`
   *
   *
   */
  color?: "white" | "black";

  /**
   * PageTitle without Logo — `boolean`
   *
   *
   */
  withOutLogo?: boolean;
};

export type Spacer = {
  _type: "spacer";
  /**
   * Space — `string`
   *
   *
   */
  space?: "s" | "m" | "l" | "xl" | "xxl";
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
   * Internal link — `reference`
   *
   * Use this to link between pages on the website
   */
  internalLink?: SanityReference<IndexPage | Page>;

  /**
   * External link — `url`
   *
   *
   */
  link?: string;
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
   * Label En — `string`
   *
   *
   */
  label_en?: string;

  /**
   * Main Navigation — `array`
   *
   *
   */
  item?: Array<SanityKeyed<NavigationItem>>;
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
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
};

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
>;

export type Section = {
  _type: "section";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Content — `defaultRichText`
   *
   *
   */
  content?: DefaultRichText;

  /**
   * Type — `string`
   *
   *
   */
  type?: "normal" | "medium-wide" | "text" | "hero" | "full-width";

  /**
   * Background Color — `string`
   *
   *
   */
  bgColor?: "black" | "white" | "pink" | "red" | "grey";

  /**
   * Top Space — `string`
   *
   *
   */
  topSpace?: "s" | "m" | "l" | "xl" | "xxl";

  /**
   * Bottom Space — `string`
   *
   *
   */
  bottomSpace?: "s" | "m" | "l" | "xl" | "xxl";

  /**
   * Background Image — `figure`
   *
   *
   */
  bgImage?: Figure;
};

export type DefaultRichText = Array<
  SanityKeyed<SanityBlock> | SanityKeyed<Button> | SanityKeyed<Spacer>
>;

export type Figure = {
  _type: "figure";
  asset: SanityReference<SanityImageAsset>;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;

  /**
   * Alternative text — `string`
   *
   * Important for SEO and accessiblity.
   */
  alt?: string;
};

export type Button = {
  _type: "button";
  /**
   * Label — `string`
   *
   *
   */
  label?: string;

  /**
   * Label En — `string`
   *
   *
   */
  label_en?: string;

  /**
   * Internal link — `reference`
   *
   * Use this to link between pages on the website
   */
  internalLink?: SanityReference<IndexPage | Page>;

  /**
   * External link — `url`
   *
   *
   */
  link?: string;

  /**
   * Color — `string`
   *
   *
   */
  color?: "black" | "white" | "pink" | "red" | "grey";

  /**
   * Background Color — `string`
   *
   *
   */
  bgColor?: "black" | "white" | "pink" | "red" | "grey";

  /**
   * Position — `string`
   *
   *
   */
  position?: "inline" | "left" | "right" | "center";
};

export type Link = {
  _type: "link";
  /**
   * Internal link — `reference`
   *
   * Use this to link between pages on the website
   */
  internalLink?: SanityReference<IndexPage | Page>;

  /**
   * External link — `url`
   *
   *
   */
  link?: string;
};

export type Hero = {
  _type: "hero";
  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Text — `text`
   *
   *
   */
  text?: string;

  /**
   * Button text — `string`
   *
   *
   */
  btnText?: string;

  /**
   * Button link — `string`
   *
   *
   */
  btnLink?: string;

  /**
   * Image — `figure`
   *
   *
   */
  image?: Figure;

  /**
   * Size — `string`
   *
   *
   */
  size?: "full" | "1/2" | "1/3" | "2/3";

  /**
   * Filter intensity — `string`
   *
   *
   */
  filterIntensity?:
    | "0"
    | "10"
    | "20"
    | "30"
    | "40"
    | "50"
    | "60"
    | "70"
    | "80"
    | "90";

  /**
   * Filter Color — `string`
   *
   *
   */
  filterColor?: "white" | "black";
};

export type Documents =
  | Post
  | PostCategory
  | SettingNavigation
  | Navigation
  | IndexPage
  | Page
  | SeoSettings
  | ConfigSettings
  | Footer
  | Redirect
  | Category;
