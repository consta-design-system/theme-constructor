import { generateData } from '../generateFontFace';
import Bold from './Oswald-Bold.woff';
import Bold2 from './Oswald-Bold.woff2';
import ExtraLight from './Oswald-ExtraLight.woff';
import ExtraLight2 from './Oswald-ExtraLight.woff2';
import Light from './Oswald-Light.woff';
import Light2 from './Oswald-Light.woff2';
import Medium from './Oswald-Medium.woff';
import Medium2 from './Oswald-Medium.woff2';
import Regular from './Oswald-Regular.woff';
import Regular2 from './Oswald-Regular.woff2';
import SemiBold from './Oswald-SemiBold.woff';
import SemiBold2 from './Oswald-SemiBold.woff2';

const data = generateData('Oswald', {
  bold: [Bold, Bold2],
  extraLight: [ExtraLight, ExtraLight2],
  regular: [Regular, Regular2],
  light: [Light, Light2],
  medium: [Medium, Medium2],
  semiBold: [SemiBold, SemiBold2],
});

export default data;
