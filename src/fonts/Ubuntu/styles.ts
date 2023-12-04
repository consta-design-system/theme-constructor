import { generateData } from '../generateFontFace';
import Bold from './Ubuntu-Bold.woff';
import Bold2 from './Ubuntu-Bold.woff2';
import BoldItalic from './Ubuntu-BoldItalic.woff';
import BoldItalic2 from './Ubuntu-BoldItalic.woff2';
import Italic from './Ubuntu-Italic.woff';
import Italic2 from './Ubuntu-Italic.woff2';
import Light from './Ubuntu-Light.woff';
import Light2 from './Ubuntu-Light.woff2';
import LightItalic from './Ubuntu-LightItalic.woff';
import LightItalic2 from './Ubuntu-LightItalic.woff2';
import Medium from './Ubuntu-Medium.woff';
import Medium2 from './Ubuntu-Medium.woff2';
import MediumItalic from './Ubuntu-MediumItalic.woff';
import MediumItalic2 from './Ubuntu-MediumItalic.woff2';
import Regular from './Ubuntu-Regular.woff';
import Regular2 from './Ubuntu-Regular.woff2';

const data = generateData('Ubuntu', {
  bold: [
    [Bold, Bold2],
    [BoldItalic, BoldItalic2],
  ],
  regular: [
    [Regular, Regular2],
    [Italic, Italic2],
  ],
  light: [
    [Light, Light2],
    [LightItalic, LightItalic2],
  ],
  medium: [
    [Medium, Medium2],
    [MediumItalic, MediumItalic2],
  ],
});

export default data;
