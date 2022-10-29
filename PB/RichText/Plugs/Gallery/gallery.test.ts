import { testProjection } from "../../../__test__/queryTest";
import { galleryProjection } from "./gallery.query";

describe("Gallery Plug", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(galleryProjection());
    const localized = await testProjection(galleryProjection("en"));
    expect(res.error).toBeFalsy();
    expect(localized.error).toBeFalsy();
  });
});
