import { testProjection } from "../../__test__/queryTest";
import { imageGalleryPlugQuery } from "./imageGallery.query";

describe("Image Gallery", () => {
  it("projection should be Valid ", async () => {
    const res = await testProjection(imageGalleryPlugQuery);
    expect(res.error).toBeFalsy();
  });
});
