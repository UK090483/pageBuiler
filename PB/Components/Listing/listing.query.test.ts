import { testProjection } from "../../__test__/queryTest";
import { listingQuery } from "./listing.query";

describe("Component Helper", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(
      listingQuery({
        imageQuery: "img",
        slugQuery: "slug",
        items: [{ name: "test", title: "Title" }],
      })
    );
    expect(res.error).toBeFalsy();
  });
});
