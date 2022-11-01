import { Block } from "../types";
import { localizedQueryFn } from "../helper/withLocalization";
import { linkProjection } from "../Objects/link/link.query";
import { embedQuery, embedQueryResult } from "./Plugs/EmbedHTML/embed.query";
import { videoPlugQuery, videoPlugResult } from "./Plugs/videoPlug/video.query";
import {
  imagePlugProjection,
  imagePlugResult,
} from "./Plugs/ImagePlug/ImagePlug.query";
const markDefs: localizedQueryFn = (locale) => `
markDefs[]{
   _type == 'link' =>{
     ...,
   ${linkProjection(locale)}
   }
  },
`;

export const defaultRichTextQuery: localizedQueryFn = (locale) => `
_type == 'block'=> {
   ...,
   ${markDefs(locale)}
   
},
${embedQuery}
${videoPlugQuery}
${imagePlugProjection}
`;

export type defaultRichTextQueryResult = (
  | Block
  | videoPlugResult
  | embedQueryResult
  | imagePlugResult
)[];
