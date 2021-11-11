import SectionBlock, {
  sectionBlockQuery,
  SectionResult,
} from "./Blocks/SectionBlock";
import BodyParser, { BodyParserProps } from "./lib/BodyParser";
import { blockFactory } from "./lib/BlockFactory";
import RichText, { richTextQuery } from "./RichText";

blockFactory.registerComponents([
  {
    name: "section",
    component: SectionBlock,
    type: "root",
    query: sectionBlockQuery,
  },
  {
    name: "block",
    component: RichText,
    type: "root",
    query: richTextQuery,
  },
]);

export const body = `
content[]{
  ...,
  ${blockFactory.getRootQuery()},
},
`;

export { blockFactory };

interface ContentParserProps
  extends Omit<BodyParserProps, "blockFactory" | "lang"> {
  content: SectionResult[];
}
const ContentParser: React.FC<ContentParserProps> = (props) => {
  return <BodyParser blockFactory={blockFactory} {...props} />;
};

export default ContentParser;

export type PageBodyResult = SectionResult[];
// | RichTextQueryResult
// | EmbedPlugResult
// | ButtonPlugResult
// | ImagePlugResult
// | SeoHeaderPlugResult
// | ImageGalleryPlugResult
// | SpacerPlugResult
// | DownloadPlugResult
// | ListingBlogResult
