import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import documents from "./documents";
import settings from "./documents/settings";
import objects from "./objects";
import plugs from "./pageComponents/plugs";
import pageComponents from "./pageComponents";

import Events from "./Events/index";
import tag from "./documents/tag";

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    tag,
    ...Events,
    ...settings,
    ...objects,
    ...documents,
    ...pageComponents,
    ...plugs,
  ]),
});
