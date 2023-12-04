import { generateData } from '../generateFontFace';
import Black from './PlayfairDisplay-Black.woff';
import Black2 from './PlayfairDisplay-Black.woff2';
import BlackItalic from './PlayfairDisplay-BlackItalic.woff';
import BlackItalic2 from './PlayfairDisplay-BlackItalic.woff2';
import Bold from './PlayfairDisplay-Bold.woff';
import Bold2 from './PlayfairDisplay-Bold.woff2';
import BoldItalic from './PlayfairDisplay-BoldItalic.woff';
import BoldItalic2 from './PlayfairDisplay-BoldItalic.woff2';
import Italic from './PlayfairDisplay-Italic.woff';
import Italic2 from './PlayfairDisplay-Italic.woff2';
import Regular from './PlayfairDisplay-Regular.woff';
import Regular2 from './PlayfairDisplay-Regular.woff2';

const data = generateData('Playfair Display', {
  bold: [
    [Bold, Bold2],
    [BoldItalic, BoldItalic2],
  ],
  black: [
    [Black, Black2],
    [BlackItalic, BlackItalic2],
  ],
  regular: [
    [Regular, Regular2],
    [Italic, Italic2],
  ],
});

export default data;
