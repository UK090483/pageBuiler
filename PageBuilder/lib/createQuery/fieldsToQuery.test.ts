import { testData } from "PageBuilder/__test__/testData";
import { fieldToQuery } from "./fieldsToQuery";

describe("fieldsToQuery", () => {
  it("should ", () => {
    expect(fieldToQuery({}, testData.field.text)).toBe("");
  });
});
