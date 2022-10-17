import { testData } from "../../__test__/testData";
import { fieldToQuery } from "./fieldsToQuery";

describe("fieldsToQuery", () => {
  it("should handle string Field", () => {
    expect(fieldToQuery({}, testData.field.string).query).toBe("string");
    expect(fieldToQuery({}, testData.field.string, "en").query).toBe("string");
    expect(
      fieldToQuery({}, { ...testData.field.string, localize: true }, "en").query
    ).toBe("'string': coalesce(string_en,string)");
  });
  it("should handle text Field", () => {
    expect(fieldToQuery({}, testData.field.text).query).toBe("text");
    expect(fieldToQuery({}, testData.field.text, "en").query).toBe("text");
    expect(
      fieldToQuery({}, { ...testData.field.text, localize: true }, "en").query
    ).toBe("'text': coalesce(text_en,text)");
  });
  it("should handle number Field", () => {
    expect(fieldToQuery({}, testData.field.number).query).toBe("number");
    expect(
      fieldToQuery({}, { ...testData.field.number, localize: true }, "en").query
    ).toBe("'number': coalesce(number_en,number)");
  });
  it("should handle boolean Field", () => {
    expect(fieldToQuery({}, testData.field.Boolean).query).toBe("bool");
    expect(fieldToQuery({}, testData.field.Boolean, "en").query).toBe("bool");
    expect(
      fieldToQuery({}, { ...testData.field.Boolean, localize: true }, "en")
        .query
    ).toBe("'bool': coalesce(bool_en,bool)");
  });
});
