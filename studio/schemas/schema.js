import schemaTypes from "all:part:@sanity/base/schema-type";
import createSchema from "part:@sanity/base/schema-creator";

import documents from "./documents";
import objects from "./objects";
import plugs from "./pageComponents/plugs";
import pageComponents from "./pageComponents";

import Events from "./Events/index";
import tag from "./documents/tag";
import Persons from "./Persons";
import Page from "./Page";
import Testimonial from "./Testimonials";
import SocialMedia from "./SocialMedia";
import Navigation from "./Navigation";
import siteConfig from "./siteConfig";
import Redirect from "./Redirect";

import { navigationSchema } from "../../PB/Navigation/navigation.schema";

import pbSchema from "../../PB/schema";

import { createSchema as cs } from "../../PageBuilder";

import config from "../../PageBuilder.config";

const SSSS = cs(config);

console.log(pbSchema);
console.log(SSSS);

export default createSchema({
  name: "default",

  types: schemaTypes.concat([
    // tag,
    ...pbSchema,
    siteConfig,

    // ...Redirect,
    //...Navigation,
    //...SocialMedia,
    // ...Page,
    // ...Persons,
    // ...Testimonial,
    // ...Events,
    //...objects,
    // ...documents,
    // ...pageComponents,
    // ...plugs,
  ]),
});
