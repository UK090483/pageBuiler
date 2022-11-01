import { testProjection } from "../__test__/queryTest";
import { defaultRichTextQuery } from "./defaultRichText.query";

describe("Richtext", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(defaultRichTextQuery());
    expect(res.error).toBeFalsy();
  });
});
