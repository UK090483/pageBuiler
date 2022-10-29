import { IMAG_PROJECTION } from "PB/constants";
import { localizedQueryFn, localizeValue } from "../../helper/withLocalization";

export const heroQueryProjection: localizedQueryFn = (locale) => `
_type == 'hero'=>{
   _type,
    
    'image':image->{${IMAG_PROJECTION}}
},
`;