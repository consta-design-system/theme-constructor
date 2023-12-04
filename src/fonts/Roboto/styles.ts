import { generateFontFace } from '../generateFontFace';
import Black from './Roboto-Black.woff';
import Black2 from './Roboto-Black.woff2';
import BlackItalic from './Roboto-BlackItalic.woff';
import BlackItalic2 from './Roboto-BlackItalic.woff2';
import Bold from './Roboto-Bold.woff';
import Bold2 from './Roboto-Bold.woff2';
import BoldItalic from './Roboto-BoldItalic.woff';
import BoldItalic2 from './Roboto-BoldItalic.woff2';
import Italic from './Roboto-Italic.woff';
import Italic2 from './Roboto-Italic.woff2';
import Light from './Roboto-Light.woff';
import Light2 from './Roboto-Light.woff2';
import LightItalic from './Roboto-LightItalic.woff';
import LightItalic2 from './Roboto-LightItalic.woff2';
import Medium from './Roboto-Medium.woff';
import Medium2 from './Roboto-Medium.woff2';
import MediumItalic from './Roboto-MediumItalic.woff';
import MediumItalic2 from './Roboto-MediumItalic.woff2';
import Regular from './Roboto-Regular.woff';
import Regular2 from './Roboto-Regular.woff2';
import Thin from './Roboto-Thin.woff';
import Thin2 from './Roboto-Thin.woff2';
import ThinItalic from './Roboto-ThinItalic.woff';
import ThinItalic2 from './Roboto-ThinItalic.woff2';

const data = {
  fonts: [
    Black,
    Black2,
    BlackItalic,
    BlackItalic2,
    Bold,
    Bold2,
    BoldItalic,
    BlackItalic2,
    Italic,
    Italic2,
    Light,
    Light2,
    LightItalic,
    LightItalic2,
    Medium,
    Medium2,
    MediumItalic,
    MediumItalic2,
    Regular,
    Regular2,
    Thin,
    Thin2,
    ThinItalic,
    ThinItalic2,
  ],
  styles: generateFontFace('Roboto', {
    black: [
      [Black, Black2],
      [BlackItalic, BlackItalic2],
    ],
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
    medium: [
      [Medium, Medium2],
      [MediumItalic, MediumItalic2],
    ],
    thin: [
      [Thin, Thin2],
      [ThinItalic, ThinItalic2],
    ],
  }),
  css: generateFontFace('Roboto', {
    black: [
      ['Roboto-Black.woff', 'Roboto-Black.woff2'],
      ['Roboto-BlackItalic.woff', 'Roboto-BlackItalic.woff2'],
    ],
    bold: [
      ['Roboto-Bold.woff', 'Roboto-Bold.woff2'],
      ['Roboto-BoldItalic.woff', 'Roboto-BoldItalic.woff2'],
    ],
    regular: [
      ['Roboto-Regular.woff', 'Roboto-Regular.woff2'],
      ['Roboto-Italic.woff', 'Roboto-Italic.woff2'],
    ],
    light: [
      ['Roboto-Light.woff', 'Roboto-Light.woff2'],
      ['Roboto-LightItalic.woff', 'Roboto-LightItalic.woff2'],
    ],
    medium: [
      ['Roboto-Medium.woff', 'Roboto-Medium.woff2'],
      ['Roboto-MediumItalic.woff', 'Roboto-MediumItalic.woff2'],
    ],
    thin: [
      ['Roboto-Thin.woff', 'Roboto-Thin.woff2'],
      ['Roboto-ThinItalic.woff', 'Roboto-ThinItalic.woff2'],
    ],
  }),
};

export default data;
