import { generateData } from '../generateFontFace';
import Black from './Lato-Black.woff';
import Black2 from './Lato-Black.woff2';
import BlackItalic from './Lato-BlackItalic.woff';
import BlackItalic2 from './Lato-BlackItalic.woff2';
import Bold from './Lato-Bold.woff';
import Bold2 from './Lato-Bold.woff2';
import BoldItalic from './Lato-BoldItalic.woff';
import BoldItalic2 from './Lato-BoldItalic.woff2';
import Italic from './Lato-Italic.woff';
import Italic2 from './Lato-Italic.woff2';
import Light from './Lato-Light.woff';
import Light2 from './Lato-Light.woff2';
import LightItalic from './Lato-LightItalic.woff';
import LightItalic2 from './Lato-LightItalic.woff2';
import Medium from './Lato-Medium.woff';
import Medium2 from './Lato-Medium.woff2';
import MediumItalic from './Lato-MediumItalic.woff';
import MediumItalic2 from './Lato-MediumItalic.woff2';
import Regular from './Lato-Regular.woff';
import Regular2 from './Lato-Regular.woff2';
import Semibold from './Lato-Semibold.woff';
import Semibold2 from './Lato-Semibold.woff2';
import SemiboldItalic from './Lato-SemiboldItalic.woff';
import SemiboldItalic2 from './Lato-SemiboldItalic.woff2';
import Thin from './Lato-Thin.woff';
import Thin2 from './Lato-Thin.woff2';
import ThinItalic from './Lato-ThinItalic.woff';
import ThinItalic2 from './Lato-ThinItalic.woff2';

const data = generateData('Lato', {
  black: [
    [Black, Black2],
    [BlackItalic, BlackItalic2],
  ],
  bold: [
    [Bold, Bold2],
    [BoldItalic, BoldItalic2],
  ],
  medium: [
    [Medium, Medium2],
    [MediumItalic, MediumItalic2],
  ],
  regular: [
    [Regular, Regular2],
    [Italic, Italic2],
  ],
  light: [
    [Light, Light2],
    [LightItalic, LightItalic2],
  ],
  thin: [
    [Thin, Thin2],
    [ThinItalic, ThinItalic2],
  ],
  semiBold: [
    [Semibold, Semibold2],
    [SemiboldItalic, SemiboldItalic2],
  ],
});

export default data;
