import SectionBlock, {
  sectionBlockQuery,
  SectionResult,
} from "./Blocks/SectionBlock";
import BodyParser from "./lib/BodyParser";
import { blockFactory } from "./lib/BlockFactory";

import ListingBlock, {
  listingBlockQuery,
  ListingBlogResult,
} from "./Blocks/ListingsBlock";
import HeroBlock, { heroBlockQuery, HeroBlogResult } from "./Blocks/HeroBlock";

export type PageBodyResult = (
  | SectionResult
  | ListingBlogResult
  | HeroBlogResult
)[];
export type PageQueryResult = { content: PageBodyResult };

blockFactory.registerComponents([
  {
    name: "hero",
    component: HeroBlock,
    type: "root",
    query: heroBlockQuery,
  },
  {
    name: "section",
    component: SectionBlock,
    type: "root",
    query: sectionBlockQuery,
  },
  {
    name: "listing",
    component: ListingBlock,
    type: "root",
    query: listingBlockQuery,
  },
]);

export interface PageBuilderResult {
  content?: PageBodyResult | null | undefined;
}

const ContentParser: React.FC<PageBuilderResult> = (props) => {
  if (!props.content) return null;

  //@ts-ignore
  return <BodyParser blockFactory={blockFactory} {...props} />;
};

export { blockFactory };
export default ContentParser;
