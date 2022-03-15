import { render } from "@testing-library/react";

import { mockClient } from "@lib/SanityPageBuilder/lib/MockClient/MockClient";
import heroBlockQuery from "./HeroBlockQuery";
import HeroBlock from "./HeroBlock";

const database: any[] = [];

describe("HeroBlock", () => {
  it("query should be valid ", async () => {
    const client = mockClient({ database });
    const res = await client.fetch(`*[_type == "page"]{
      'content':content[]{
        ${heroBlockQuery("en")}
      }
    }`);
  });

  it("should render", () => {
    render(<HeroBlock _key="test" />);
  });
});
