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

export type PageBodyResult = (SectionResult | ListingBlogResult)[];
export type PageQueryResult = { content: PageBodyResult };

blockFactory.registerComponents([
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

interface ContentParserProps {
  content: PageBodyResult;
}

const ContentParser: React.FC<ContentParserProps> = (props) => {
  return <BodyParser blockFactory={blockFactory} {...props} />;
};
export const body = blockFactory.getRootQuery();
export { blockFactory };
export default ContentParser;
