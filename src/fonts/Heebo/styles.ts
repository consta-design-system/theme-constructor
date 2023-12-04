import { generateData } from '../generateFontFace';
import Black from './Heebo-Black.woff';
import Black2 from './Heebo-Black.woff2';
import Bold from './Heebo-Bold.woff';
import Bold2 from './Heebo-Bold.woff2';
import ExtraBold from './Heebo-ExtraBold.woff';
import ExtraBold2 from './Heebo-ExtraBold.woff2';
import Light from './Heebo-Light.woff';
import Light2 from './Heebo-Light.woff2';
import Medium from './Heebo-Medium.woff';
import Medium2 from './Heebo-Medium.woff2';
import Regular from './Heebo-Regular.woff';
import Regular2 from './Heebo-Regular.woff2';
import Thin from './Heebo-Thin.woff';
import Thin2 from './Heebo-Thin.woff2';

const data = generateData('Heebo', {
  black: [Black, Black2],
  bold: [Bold, Bold2],
  extraBold: [ExtraBold, ExtraBold2],
  light: [Light, Light2],
  medium: [Medium, Medium2],
  regular: [Regular, Regular2],
  thin: [Thin, Thin2],
});

export default data;
