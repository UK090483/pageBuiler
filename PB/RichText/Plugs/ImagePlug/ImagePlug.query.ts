import { ImageResult, IMAG_PROJECTION } from "../../../constants";

export const imagePlugProjection = `
_type == 'imagePlug'=>{
    _type,
    'image':image{${IMAG_PROJECTION}}
}
`;

export type imagePlugResult = {
  _type: string;
  image: ImageResult;
};
