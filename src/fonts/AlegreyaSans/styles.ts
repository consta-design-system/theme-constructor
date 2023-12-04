import { generateData } from '../generateFontFace';
import Black from './AlegreyaSans-Black.woff';
import Black2 from './AlegreyaSans-Black.woff2';
import BlackItalic from './AlegreyaSans-BlackItalic.woff';
import BlackItalic2 from './AlegreyaSans-BlackItalic.woff2';
import Bold from './AlegreyaSans-Bold.woff';
import Bold2 from './AlegreyaSans-Bold.woff2';
import BoldItalic from './AlegreyaSans-BoldItalic.woff';
import BoldItalic2 from './AlegreyaSans-BoldItalic.woff2';
import ExtraBold from './AlegreyaSans-ExtraBold.woff';
import ExtraBold2 from './AlegreyaSans-ExtraBold.woff2';
import ExtraBoldItalic from './AlegreyaSans-ExtraBoldItalic.woff';
import ExtraBoldItalic2 from './AlegreyaSans-ExtraBoldItalic.woff2';
import Italic from './AlegreyaSans-Italic.woff';
import Italic2 from './AlegreyaSans-Italic.woff2';
import Light from './AlegreyaSans-Light.woff';
import Light2 from './AlegreyaSans-Light.woff2';
import LightItalic from './AlegreyaSans-LightItalic.woff';
import LightItalic2 from './AlegreyaSans-LightItalic.woff2';
import Medium from './AlegreyaSans-Medium.woff';
import Medium2 from './AlegreyaSans-Medium.woff2';
import MediumItalic from './AlegreyaSans-MediumItalic.woff';
import MediumItalic2 from './AlegreyaSans-MediumItalic.woff2';
import Regular from './AlegreyaSans-Regular.woff';
import Regular2 from './AlegreyaSans-Regular.woff2';
import Thin from './AlegreyaSans-Thin.woff';
import Thin2 from './AlegreyaSans-Thin.woff2';
import ThinItalic from './AlegreyaSans-ThinItalic.woff';
import ThinItalic2 from './AlegreyaSans-ThinItalic.woff2';

const data = generateData('Alegreya Sans', {
  black: [
    [Black, Black2],
    [BlackItalic, BlackItalic2],
  ],
  bold: [
    [Bold, Bold2],
    [BoldItalic, BoldItalic2],
  ],
  extraBold: [
    [ExtraBold, ExtraBold2],
    [ExtraBoldItalic, ExtraBoldItalic2],
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
});

export default data;
