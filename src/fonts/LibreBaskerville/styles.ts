import { generateData } from '../generateFontFace';
import Bold from './LibreBaskerville-Bold.woff';
import Bold2 from './LibreBaskerville-Bold.woff2';
import Italic from './LibreBaskerville-Italic.woff';
import Italic2 from './LibreBaskerville-Italic.woff2';
import Regular from './LibreBaskerville-Regular.woff';
import Regular2 from './LibreBaskerville-Regular.woff2';

const data = generateData('Libre Baskerville', {
  bold: [Bold, Bold2],
  regular: [
    [Regular, Regular2],
    [Italic, Italic2],
  ],
});

export default data;
