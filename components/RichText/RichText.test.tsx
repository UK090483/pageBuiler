import { customRender, screen } from "@tests/test-utils";

import { mockClient } from "@lib/SanityPageBuilder/lib/MockClient/MockClient";
import { richTextQuery } from "./richTextQuery";
import RichText from "./RichText";
import { textBlock } from "./testPrepare";
const database: any[] = [];

describe("RichText", () => {
  it("query should be valid ", async () => {
    const client = mockClient({ database });
    const res = await client.fetch(`*[_type == "page"]{
      'content':content[]{
        ${richTextQuery("en")}
      }
    }`);
  });
  it("should render the right Tags", () => {
    customRender(
      <RichText
        content={[
          textBlock("testP", "normal"),
          textBlock("testH1", "h1"),
          textBlock("testH2", "h2"),
          textBlock("testH3", "h3"),
          textBlock("testH4", "h4"),
        ]}
      />
    );
    expect(screen.getByText("testP").tagName).toBe("P");
    expect(screen.getByText("testH1").tagName).toBe("H1");
    expect(screen.getByText("testH2").tagName).toBe("H2");
    expect(screen.getByText("testH3").tagName).toBe("H3");
    expect(screen.getByText("testH4").tagName).toBe("H4");
  });
});
