import {
  heroRichTextQuery,
  heroRichTextQueryResult,
} from "../../RichText/heroRichText.query";
import { ImageResult, IMAG_PROJECTION } from "../../constants";
import { localizedQueryFn, localizeValue } from "../../helper/withLocalization";

export const heroQueryProjection: localizedQueryFn = (locale) => `
_type == 'hero'=>{
   _key,
   _type,
    'image':image{${IMAG_PROJECTION}},
    'content':content[]{${heroRichTextQuery(locale)}}
},
`;

export type heroResult = {
  _type: "hero";
  _key: string;
  image?: ImageResult;
  content: heroRichTextQueryResult;
};
