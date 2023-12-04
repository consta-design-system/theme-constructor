import { generateData } from '../generateFontFace';
import Black from './SourceSansPro-Black.woff';
import Black2 from './SourceSansPro-Black.woff2';
import BlackItalic from './SourceSansPro-BlackItalic.woff';
import BlackItalic2 from './SourceSansPro-BlackItalic.woff2';
import Bold from './SourceSansPro-Bold.woff';
import Bold2 from './SourceSansPro-Bold.woff2';
import BoldItalic from './SourceSansPro-BoldItalic.woff';
import BoldItalic2 from './SourceSansPro-BoldItalic.woff2';
import ExtraLight from './SourceSansPro-ExtraLight.woff';
import ExtraLight2 from './SourceSansPro-ExtraLight.woff2';
import ExtraLightItalic from './SourceSansPro-ExtraLightItalic.woff';
import ExtraLightItalic2 from './SourceSansPro-ExtraLightItalic.woff2';
import Italic from './SourceSansPro-Italic.woff';
import Italic2 from './SourceSansPro-Italic.woff2';
import Light from './SourceSansPro-Light.woff';
import Light2 from './SourceSansPro-Light.woff2';
import LightItalic from './SourceSansPro-LightItalic.woff';
import LightItalic2 from './SourceSansPro-LightItalic.woff2';
import Regular from './SourceSansPro-Regular.woff';
import Regular2 from './SourceSansPro-Regular.woff2';
import SemiBold from './SourceSansPro-SemiBold.woff';
import SemiBold2 from './SourceSansPro-SemiBold.woff2';
import SemiBoldItalic from './SourceSansPro-SemiBoldItalic.woff';
import SemiBoldItalic2 from './SourceSansPro-SemiBoldItalic.woff2';

const data = generateData('Source Sans Pro', {
  black: [
    [Black, Black2],
    [BlackItalic, BlackItalic2],
  ],
  bold: [
    [Bold, Bold2],
    [BoldItalic, BoldItalic2],
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
  semiBold: [
    [SemiBold, SemiBold2],
    [SemiBoldItalic, SemiBoldItalic2],
  ],
});

export default data;
