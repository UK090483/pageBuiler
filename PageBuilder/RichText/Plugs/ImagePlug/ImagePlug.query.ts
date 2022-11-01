import { ImageResult, IMAG_PROJECTION } from "../../../constants";

export const imagePlugProjection = `
_type == 'imagePlug'=>{
    _type,
    _key,
    'image':image{${IMAG_PROJECTION}},
    customWidth,
    ratio,
    position,
    float,
},
`;

export type imagePlugResult = {
  _type: "imagePlug";
  _key: string;
  image: ImageResult;
  customWidth?: "1/4" | "1/3" | "1/2" | "2/3" | "full";
  ratio?: "auto" | "3:2" | "5:9" | "16:9" | "1:1";
  position?: "left" | "right" | "center";
  float?: boolean;
};
