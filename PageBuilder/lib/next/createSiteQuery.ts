import { Config } from "../../types";
import createComponents from "../sanity/createComponent";

const createSiteQuery = (config: Config) => {
  const components = createComponents(config);

  const projection = components.map(
    (component) => `
  _type === "${component.name}"=>{
  ${component.fields?.map((c) => `${c.name}`)}

  }
  `
  );

  const query = `*[ _type == 'page'][]{
${projection}
}`;

  return query;
};

export default createSiteQuery;

const getFieldQuery = (name: string) => {};
