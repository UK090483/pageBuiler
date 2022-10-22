import { parse, evaluate } from "groq-js";

export const testQuery = async (query: string, dataSet?: any[]) => {
  let dataset = [
    { _type: "user", name: "Michael" },
    { _type: "company", name: "Bluth Company" },
  ];

  try {
    const tree = parse(query);
    let value = await evaluate(tree, { dataset });
    let result = await value.get();
    return result;
  } catch (error) {
    return false;
  }
};

export const testProjection = async (projection: string) => {
  return await testQuery(`*[_type == 'page'][]{${projection}}`);
};
