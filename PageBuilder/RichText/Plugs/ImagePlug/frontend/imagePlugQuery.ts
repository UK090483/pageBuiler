import { IMAG_PROJECTION } from "PageBuilder/constants";

export const ImagePlugQuery = `
_type == "imagePlug" => {
  ...,
  'image': image{${IMAG_PROJECTION}},
}
`;
