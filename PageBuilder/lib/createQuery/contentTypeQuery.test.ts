import { testData } from "../../__test__/testData";
import { getContentTypeQuery } from "./contentTypeQuery";

const initialQuery =
  "_id,_type, title ,description ,'featuredImage': featuredImage{ ...asset->{url} } ,'body': body[]{}, ";
const initialQuery_En =
  "_id,_type, 'title': coalesce(title_en,title) ,'description': coalesce(description_en,description) ,'featuredImage': featuredImage{ ...asset->{url} } ,'body': body[]{}, ";

describe("getContentTypeQuery", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should warn if contentType not found", () => {
    console.warn = jest.fn();
    const q = getContentTypeQuery(
      { contentTypes: [testData.contentType.one] },
      "bla"
    );
    expect(console.warn).toBeCalledTimes(1);
  });

  it("should create initial Query", () => {
    const q = getContentTypeQuery(
      { contentTypes: [testData.contentType.one] },
      testData.contentType.one.name
    );
    expect(q).toBe(initialQuery);
  });

  it("should create initial Query with locale", () => {
    const q = getContentTypeQuery(
      { contentTypes: [testData.contentType.one] },
      testData.contentType.one.name,
      "en"
    );
    expect(q).toBe(initialQuery_En);
  });
});
