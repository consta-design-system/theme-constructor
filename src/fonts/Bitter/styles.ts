import { generateData } from '../generateFontFace';
import Bold from './Bitter-Bold.woff';
import Bold2 from './Bitter-Bold.woff2';
import Italic from './Bitter-Italic.woff';
import Italic2 from './Bitter-Italic.woff2';
import Regular from './Bitter-Regular.woff';
import Regular2 from './Bitter-Regular.woff2';

const data = generateData('Bitter', {
  bold: [Bold, Bold2],
  regular: [
    [Regular, Regular2],
    [Italic, Italic2],
  ],
});

export default data;
