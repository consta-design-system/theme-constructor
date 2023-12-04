import { generateData } from '../generateFontFace';
import Black from './Raleway-Black.woff';
import Black2 from './Raleway-Black.woff2';
import BlackItalic from './Raleway-BlackItalic.woff';
import BlackItalic2 from './Raleway-BlackItalic.woff2';
import Bold from './Raleway-Bold.woff';
import Bold2 from './Raleway-Bold.woff2';
import ExtraBold from './Raleway-ExtraBold.woff';
import ExtraBold2 from './Raleway-ExtraBold.woff2';
import ExtraBoldItalic from './Raleway-ExtraBoldItalic.woff';
import ExtraBoldItalic2 from './Raleway-ExtraBoldItalic.woff2';
import ExtraLight from './Raleway-ExtraLight.woff';
import ExtraLight2 from './Raleway-ExtraLight.woff2';
import ExtraLightItalic from './Raleway-ExtraLightItalic.woff';
import ExtraLightItalic2 from './Raleway-ExtraLightItalic.woff2';
import Italic from './Raleway-Italic.woff';
import Italic2 from './Raleway-Italic.woff2';
import Light from './Raleway-Light.woff';
import Light2 from './Raleway-Light.woff2';
import LightItalic from './Raleway-LightItalic.woff';
import LightItalic2 from './Raleway-LightItalic.woff2';
import Medium from './Raleway-Medium.woff';
import Medium2 from './Raleway-Medium.woff2';
import MediumItalic from './Raleway-MediumItalic.woff';
import MediumItalic2 from './Raleway-MediumItalic.woff2';
import Regular from './Raleway-Regular.woff';
import Regular2 from './Raleway-Regular.woff2';
import SemiBold from './Raleway-SemiBold.woff';
import SemiBold2 from './Raleway-SemiBold.woff2';
import SemiBoldItalic from './Raleway-SemiBoldItalic.woff';
import SemiBoldItalic2 from './Raleway-SemiBoldItalic.woff2';
import Thin from './Raleway-Thin.woff';
import Thin2 from './Raleway-Thin.woff2';

const data = generateData('Raleway', {
  black: [
    [Black, Black2],
    [BlackItalic, BlackItalic2],
  ],
  bold: [Bold, Bold2],
  extraBold: [
    [ExtraBold, ExtraBold2],
    [ExtraBoldItalic, ExtraBoldItalic2],
  ],
  extraLight: [
    [ExtraLight, ExtraLight2],
    [ExtraLightItalic, ExtraLightItalic2],
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
  semiBold: [
    [SemiBold, SemiBold2],
    [SemiBoldItalic, SemiBoldItalic2],
  ],
  thin: [Thin, Thin2],
});

export default data;
