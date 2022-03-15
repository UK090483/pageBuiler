import { mockClient } from "@lib/SanityPageBuilder/lib/MockClient/MockClient";
import { render } from "@testing-library/react";
import { EventsListQuery } from "./EventsListQuery";
// import ListingBlock from "./ListingBlock";

const database: any[] = [];

describe("EventsListing", () => {
  it("query should be valid ", async () => {
    const client = mockClient({ database });
    const res = await client.fetch(`*[_type == "page"]{
      'content':content[]{
        ${EventsListQuery("en")}
      }
    }`);
  });
  // it("should render no Items", async () => {
  //   render(<ListingBlock _type="listing" _key="test" />);
  // });
});
