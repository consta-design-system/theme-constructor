import { generateData } from '../generateFontFace';
import Bold from './Cabin-Bold.woff';
import Bold2 from './Cabin-Bold.woff2';
import BoldItalic from './Cabin-BoldItalic.woff';
import BoldItalic2 from './Cabin-BoldItalic.woff2';
import Italic from './Cabin-Italic.woff';
import Italic2 from './Cabin-Italic.woff2';
import Medium from './Cabin-Medium.woff';
import Medium2 from './Cabin-Medium.woff2';
import MediumItalic from './Cabin-MediumItalic.woff';
import MediumItalic2 from './Cabin-MediumItalic.woff2';
import Regular from './Cabin-Regular.woff';
import Regular2 from './Cabin-Regular.woff2';
import SemiBold from './Cabin-SemiBold.woff';
import SemiBold2 from './Cabin-SemiBold.woff2';
import SemiBoldItalic from './Cabin-SemiBoldItalic.woff';
import SemiBoldItalic2 from './Cabin-SemiBoldItalic.woff2';

const data = generateData('Cabin', {
  bold: [
    [Bold, Bold2],
    [BoldItalic, BoldItalic2],
  ],
  medium: [
    [Medium, Medium2],
    [MediumItalic, MediumItalic2],
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
