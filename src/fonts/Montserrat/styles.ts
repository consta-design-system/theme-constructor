import { generateData } from '../generateFontFace';
import Black from './Montserrat-Black.woff';
import Black2 from './Montserrat-Black.woff2';
import BlackItalic from './Montserrat-BlackItalic.woff';
import BlackItalic2 from './Montserrat-BlackItalic.woff2';
import Bold from './Montserrat-Bold.woff';
import Bold2 from './Montserrat-Bold.woff2';
import BoldItalic from './Montserrat-BoldItalic.woff';
import BoldItalic2 from './Montserrat-BoldItalic.woff2';
import ExtraBold from './Montserrat-ExtraBold.woff';
import ExtraBold2 from './Montserrat-ExtraBold.woff2';
import ExtraBoldItalic from './Montserrat-ExtraBoldItalic.woff';
import ExtraBoldItalic2 from './Montserrat-ExtraBoldItalic.woff2';
import ExtraLight from './Montserrat-ExtraLight.woff';
import ExtraLight2 from './Montserrat-ExtraLight.woff2';
import ExtraLightItalic from './Montserrat-ExtraLightItalic.woff';
import ExtraLightItalic2 from './Montserrat-ExtraLightItalic.woff2';
import Italic from './Montserrat-Italic.woff';
import Italic2 from './Montserrat-Italic.woff2';
import Light from './Montserrat-Light.woff';
import Light2 from './Montserrat-Light.woff2';
import LightItalic from './Montserrat-LightItalic.woff';
import LightItalic2 from './Montserrat-LightItalic.woff2';
import Medium from './Montserrat-Medium.woff';
import Medium2 from './Montserrat-Medium.woff2';
import MediumItalic from './Montserrat-MediumItalic.woff';
import MediumItalic2 from './Montserrat-MediumItalic.woff2';
import Regular from './Montserrat-Regular.woff';
import Regular2 from './Montserrat-Regular.woff2';
import SemiBold from './Montserrat-SemiBold.woff';
import SemiBold2 from './Montserrat-SemiBold.woff2';
import SemiBoldItalic from './Montserrat-SemiBoldItalic.woff';
import SemiBoldItalic2 from './Montserrat-SemiBoldItalic.woff2';
import Thin from './Montserrat-Thin.woff';
import Thin2 from './Montserrat-Thin.woff2';
import ThinItalic from './Montserrat-ThinItalic.woff';
import ThinItalic2 from './Montserrat-ThinItalic.woff2';

const data = generateData('Montserrat', {
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
  extraLight: [
    [ExtraLight, ExtraLight2],
    [ExtraLightItalic, ExtraLightItalic2],
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
  semiBold: [
    [SemiBold, SemiBold2],
    [SemiBoldItalic, SemiBoldItalic2],
  ],
  thin: [
    [Thin, Thin2],
    [ThinItalic, ThinItalic2],
  ],
});

export default data;
