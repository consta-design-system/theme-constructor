import { generateData } from '../generateFontFace';
import Bold from './RobotoCondensed-Bold.woff';
import Bold2 from './RobotoCondensed-Bold.woff2';
import BoldItalic from './RobotoCondensed-BoldItalic.woff';
import BoldItalic2 from './RobotoCondensed-BoldItalic.woff2';
import Italic from './RobotoCondensed-Italic.woff';
import Italic2 from './RobotoCondensed-Italic.woff2';
import Light from './RobotoCondensed-Light.woff';
import Light2 from './RobotoCondensed-Light.woff2';
import LightItalic from './RobotoCondensed-LightItalic.woff';
import LightItalic2 from './RobotoCondensed-LightItalic.woff2';
import Regular from './RobotoCondensed-Regular.woff';
import Regular2 from './RobotoCondensed-Regular.woff2';

const data = generateData('Roboto Condensed', {
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
});

export default data;
