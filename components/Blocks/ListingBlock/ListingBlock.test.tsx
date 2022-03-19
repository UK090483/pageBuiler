import { mockClient } from "@lib/SanityPageBuilder/lib/MockClient/MockClient";
import { customRender } from "@tests/test-utils";
import ListingBlock from "./ListingBlock";
import listingBlockQuery from "./listingBlockQuery";

const database: any[] = [];

describe("ListingBlock", () => {
  it("query should be valid ", async () => {
    const client = mockClient({ database });
    const res = await client.fetch(`*[_type == "page"]{
      'content':content[]{
        ${listingBlockQuery("en")}
      }
    }`);
  });
  it("should render no Items", async () => {
    customRender(<ListingBlock _type="listing" _key="test" />);
  });
});
