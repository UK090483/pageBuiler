import { testProjection } from "../../../__test__/queryTest";
import { embedQuery } from "./embed.query";

describe("Hero Query", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(embedQuery);
    expect(res.error).toBeFalsy();
  });
});
