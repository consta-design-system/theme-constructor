import { generateData } from '../generateFontFace';
import Bold from './CrimsonText-Bold.woff';
import Bold2 from './CrimsonText-Bold.woff2';
import BoldItalic from './CrimsonText-BoldItalic.woff';
import BoldItalic2 from './CrimsonText-BoldItalic.woff2';
import Italic from './CrimsonText-Italic.woff';
import Italic2 from './CrimsonText-Italic.woff2';
import Regular from './CrimsonText-Regular.woff';
import Regular2 from './CrimsonText-Regular.woff2';
import SemiBold from './CrimsonText-SemiBold.woff';
import SemiBold2 from './CrimsonText-SemiBold.woff2';
import SemiBoldItalic from './CrimsonText-SemiBoldItalic.woff';
import SemiBoldItalic2 from './CrimsonText-SemiBoldItalic.woff2';

const data = generateData('Crimson Text', {
  bold: [
    [Bold, Bold2],
    [BoldItalic, BoldItalic2],
  ],

  regular: [
    [Regular, Regular2],
    [Italic, Italic2],
  ],
  semiBold: [
    [SemiBold, SemiBold2],
    [SemiBoldItalic, SemiBoldItalic2],
  ],
});

export default data;
