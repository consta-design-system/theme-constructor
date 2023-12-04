import { generateData } from '../generateFontFace';
import Bold from './PTSans-Bold.woff';
import Bold2 from './PTSans-Bold.woff2';
import BoldItalic from './PTSans-BoldItalic.woff';
import BoldItalic2 from './PTSans-BoldItalic.woff2';
import Italic from './PTSans-Italic.woff';
import Italic2 from './PTSans-Italic.woff2';
import Regular from './PTSans-Regular.woff';
import Regular2 from './PTSans-Regular.woff2';

const data = generateData('PT Sans', {
  bold: [
    [Bold, Bold2],
    [BoldItalic, BoldItalic2],
  ],
  regular: [
    [Regular, Regular2],
    [Italic, Italic2],
  ],
});

export default data;
