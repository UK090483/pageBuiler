import { testData } from "../../__test__/testData";
import { testQuery } from "../../__test__/querytest";
import { fieldToQuery } from "./fieldsToQuery";

const cases = [
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
    field: "date" as Field,
    res: `date`,
    resEn: "'date': coalesce(date_en,date)",
  },
  {
    field: "datetime" as Field,
    res: `datetime`,
    resEn: "'datetime': coalesce(datetime_en,datetime)",
  },
  {
    field: "slug" as Field,
    res: `'slug': slug.current`,
    resEn: "'slug': coalesce(slug_en,slug).current",
  },
  {
    field: "link" as Field,
    res: "'link': link{...(internal->{ 'internal': testSlugQuery  }) ,href, }",
    res2: "'link': link{...(internal->{ 'internal': testSlugQuery  }) ,href, }",
    resEn:
      "'link': link{...(internal->{ 'internal': testSlugQuery  }) ,href, }",
  },
];

type Field = keyof typeof testData.field;
describe.only("fieldsToQuery", () => {
  test.each(cases)("should create $field valid query", async ({ field }) => {
    const res = fieldToQuery(testData.finalConfig, testData.field[field]).query;
    expect(testQuery(`*[_type == 'bla'][]{${res}}`)).resolves.toBeTruthy();
  });

  test.each(cases)(
    "should create $field valid query request localized",
    async ({ field }) => {
      const res = fieldToQuery(
        testData.finalConfig,
        testData.field[field],
        "en"
      ).query;
      expect(testQuery(`*[_type == 'bla'][]{${res}}`)).resolves.toBeTruthy();
    }
  );
  test.each(cases)(
    "should create $field valid query with localized field",
    async ({ field }) => {
      const res = fieldToQuery(
        testData.finalConfig,
        { ...testData.field[field], localize: true },
        "en"
      ).query;
      expect(testQuery(`*[_type == 'bla'][]{${res}}`)).resolves.toBeTruthy();
    }
  );

  test.each(cases)(
    "should handle $field Field",
    async ({ field, res, resEn, res2 }) => {
      expect(
        fieldToQuery(testData.finalConfig, testData.field[field]).query
      ).toBe(res);
      expect(
        fieldToQuery(testData.finalConfig, testData.field[field], "en").query
      ).toBe(res2 || res);
      expect(
        fieldToQuery(
          testData.finalConfig,
          { ...testData.field[field], localize: true },
          "en"
        ).query
      ).toBe(resEn);
    }
  );

  it("should handle Field with query", () => {
    expect(
      fieldToQuery({}, { ...testData.field.string, query: "testQuery" }).query
    ).toBe("testQuery");
    const queryFn = jest
      .fn()
      .mockImplementation(({ locale }) =>
        locale ? "testQueryFn" + locale : "testQueryFn"
      );

    expect(
      fieldToQuery({}, { ...testData.field.string, query: queryFn }).query
    ).toBe("testQueryFn");
    expect(queryFn).toBeCalledTimes(1);
    expect(queryFn).toBeCalledWith({ locale: undefined });

    expect(
      fieldToQuery({}, { ...testData.field.string, query: queryFn }, "En").query
    ).toBe("testQueryFnEn");

    expect(queryFn).toBeCalledTimes(2);
    expect(queryFn).toBeCalledWith({ locale: "En" });
  });

  it("should handle array Field with block", () => {
    expect(
      //@ts-ignore
      fieldToQuery({}, { ...testData.field.array, of: [{ type: "block" }] })
        .query
    ).toBe("'array': array[]{...}");
  });
});
