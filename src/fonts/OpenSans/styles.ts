import { generateData } from '../generateFontFace';
import Bold from './OpenSans-Bold.woff';
import Bold2 from './OpenSans-Bold.woff2';
import BoldItalic from './OpenSans-BoldItalic.woff';
import BoldItalic2 from './OpenSans-BoldItalic.woff2';
import ExtraBold from './OpenSans-ExtraBold.woff';
import ExtraBold2 from './OpenSans-ExtraBold.woff2';
import ExtraBoldItalic from './OpenSans-ExtraBoldItalic.woff';
import ExtraBoldItalic2 from './OpenSans-ExtraBoldItalic.woff2';
import Italic from './OpenSans-Italic.woff';
import Italic2 from './OpenSans-Italic.woff2';
import Light from './OpenSans-Light.woff';
import Light2 from './OpenSans-Light.woff2';
import LightItalic from './OpenSans-LightItalic.woff';
import LightItalic2 from './OpenSans-LightItalic.woff2';
import Regular from './OpenSans-Regular.woff';
import Regular2 from './OpenSans-Regular.woff2';
import SemiBold from './OpenSans-SemiBold.woff';
import SemiBold2 from './OpenSans-SemiBold.woff2';
import SemiBoldItalic from './OpenSans-SemiBoldItalic.woff';
import SemiBoldItalic2 from './OpenSans-SemiBoldItalic.woff2';

const data = generateData('Open Sans', {
  bold: [
    [Bold, Bold2],
    [BoldItalic, BoldItalic2],
  ],
  extraBold: [
    [ExtraBold, ExtraBold2],
    [ExtraBoldItalic, ExtraBoldItalic2],
  ],
  regular: [
    [Regular, Regular2],
    [Italic, Italic2],
  ],
  light: [
    [Light, Light2],
    [LightItalic, LightItalic2],
  ],
  semiBold: [
    [SemiBold, SemiBold2],
    [SemiBoldItalic, SemiBoldItalic2],
  ],
});

export default data;
