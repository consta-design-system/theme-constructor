import { generateData } from '../generateFontFace';
import Bold from './ArchivoNarrow-Bold.woff';
import Bold2 from './ArchivoNarrow-Bold.woff2';
import BoldItalic from './ArchivoNarrow-BoldItalic.woff';
import BoldItalic2 from './ArchivoNarrow-BoldItalic.woff2';
import Italic from './ArchivoNarrow-Italic.woff';
import Italic2 from './ArchivoNarrow-Italic.woff2';
import Medium from './ArchivoNarrow-Medium.woff';
import Medium2 from './ArchivoNarrow-Medium.woff2';
import MediumItalic from './ArchivoNarrow-MediumItalic.woff';
import MediumItalic2 from './ArchivoNarrow-MediumItalic.woff2';
import Regular from './ArchivoNarrow-Regular.woff';
import Regular2 from './ArchivoNarrow-Regular.woff2';
import SemiBold from './ArchivoNarrow-SemiBold.woff';
import SemiBold2 from './ArchivoNarrow-SemiBold.woff2';
import SemiBoldItalic from './ArchivoNarrow-SemiBoldItalic.woff';
import SemiBoldItalic2 from './ArchivoNarrow-SemiBoldItalic.woff2';

const data = generateData('Archivo Narrow', {
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
