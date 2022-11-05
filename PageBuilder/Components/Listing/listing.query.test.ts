import { testProjection, testQuery } from "../../__test__/queryTest";
import { listProjection } from "./listing.query";

describe("Listing Query", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(listProjection());
    const resEn = await testProjection(listProjection("en"));
    expect(res.error).toBeFalsy();
    expect(resEn.error).toBeFalsy();
  });
});
