import { SanityDocumentDefinition } from "../../types";
import { withLocalization } from "./withLocalization";

const testDocument = {
  type: "document",
  name: "test",
  title: "test",
  fields: [{ name: "test", title: "test", type: "string" }],
} as SanityDocumentDefinition;

describe("withLocalization", () => {
  it("should do nothing without locales", () => {
    expect(withLocalization({}, [testDocument])).toStrictEqual([testDocument]);
  });
});
