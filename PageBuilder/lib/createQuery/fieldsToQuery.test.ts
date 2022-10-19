import { testData } from "../../__test__/testData";
import { fieldToQuery } from "./fieldsToQuery";

type Field = keyof typeof testData.field;
describe.only("fieldsToQuery", () => {
  test.each([
    {
      field: "string" as Field,
      res: "string",
      resEn: "'string': coalesce(string_en,string)",
    },
    {
      field: "text" as Field,
      res: "text",
      resEn: "'text': coalesce(text_en,text)",
    },
    {
      field: "number" as Field,
      res: "number",
      resEn: "'number': coalesce(number_en,number)",
    },
    {
      field: "boolean" as Field,
      res: "boolean",
      resEn: "'boolean': coalesce(boolean_en,boolean)",
    },
    {
      field: "slug" as Field,
      res: `'slug': slug.current`,
      resEn: "'slug': coalesce(slug_en,slug).current",
    },
    {
      field: "link" as Field,
      res: "'link': link{'internal':internal->slug.current ,href, }",
      res2: "'link': link{...(internal->{ 'internal': coalesce(slug_en,slug).current }) ,href, }",
      resEn:
        "'link': link{...(internal->{ 'internal': coalesce(slug_en,slug).current }) ,href, }",
    },
  ])("should handle $field Field", ({ field, res, resEn, res2 }) => {
    expect(fieldToQuery({}, testData.field[field]).query).toBe(res);
    expect(fieldToQuery({}, testData.field[field], "en").query).toBe(
      res2 || res
    );
    expect(
      fieldToQuery({}, { ...testData.field[field], localize: true }, "en").query
    ).toBe(resEn);
  });

  it("should handle array Field", () => {
    expect(fieldToQuery({}, testData.field.array).query).toBe("");
  });
});
