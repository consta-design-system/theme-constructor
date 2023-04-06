import Black from './AlegreyaSans-Black.woff';
import Black2 from './AlegreyaSans-Black.woff2';
import BlackItalic from './AlegreyaSans-BlackItalic.woff';
import BlackItalic2 from './AlegreyaSans-BlackItalic.woff2';
import Bold from './AlegreyaSans-Bold.woff';
import Bold2 from './AlegreyaSans-Bold.woff2';
import BoldItalic from './AlegreyaSans-BoldItalic.woff';
import BoldItalic2 from './AlegreyaSans-BoldItalic.woff2';
import ExtraBold from './AlegreyaSans-ExtraBold.woff';
import ExtraBold2 from './AlegreyaSans-ExtraBold.woff2';
import ExtraBoldItalic from './AlegreyaSans-ExtraBoldItalic.woff';
import ExtraBoldItalic2 from './AlegreyaSans-ExtraBoldItalic.woff2';
import Italic from './AlegreyaSans-Italic.woff';
import Italic2 from './AlegreyaSans-Italic.woff2';
import Light from './AlegreyaSans-Light.woff';
import Light2 from './AlegreyaSans-Light.woff2';
import LightItalic from './AlegreyaSans-LightItalic.woff';
import LightItalic2 from './AlegreyaSans-LightItalic.woff2';
import Medium from './AlegreyaSans-Medium.woff';
import Medium2 from './AlegreyaSans-Medium.woff2';
import MediumItalic from './AlegreyaSans-MediumItalic.woff';
import MediumItalic2 from './AlegreyaSans-MediumItalic.woff2';
import Regular from './AlegreyaSans-Regular.woff';
import Regular2 from './AlegreyaSans-Regular.woff2';
import Thin from './AlegreyaSans-Thin.woff';
import Thin2 from './AlegreyaSans-Thin.woff2';
import ThinItalic from './AlegreyaSans-ThinItalic.woff';
import ThinItalic2 from './AlegreyaSans-ThinItalic.woff2';

const styles = `
@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Italic'), local('AlegreyaSansSC-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Black'), local('AlegreyaSansSC-Black'),
        url('${Black2}') format('woff2'),
        url('${Black}') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Light'), local('AlegreyaSansSC-Light'),
        url('${Light2}') format('woff2'),
        url('${Light}') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Black Italic'), local('AlegreyaSansSC-BlackItalic'),
        url('${BlackItalic2}') format('woff2'),
        url('${BlackItalic}') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Medium'), local('AlegreyaSansSC-Medium'),
        url('${Medium2}') format('woff2'),
        url('${Medium}') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Medium'), local('AlegreyaSans-Medium'),
      url('${Medium2}') format('woff2'),
      url('${Medium}') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Black'), local('AlegreyaSans-Black'),
        url('${Black2}') format('woff2'),
        url('${Black}') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Light'), local('AlegreyaSans-Light'),
        url('${Light2}') format('woff2'),
        url('${Light}') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC ExtraBold Italic'), local('AlegreyaSansSC-ExtraBoldItalic'),
        url('${ExtraBoldItalic2}') format('woff2'),
        url('${ExtraBoldItalic}') format('woff');
    font-weight: 800;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans ExtraBold Italic'), local('AlegreyaSans-ExtraBoldItalic'),
        url('${ExtraBoldItalic2}') format('woff2'),
        url('${ExtraBoldItalic}') format('woff');
    font-weight: 800;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Bold Italic'), local('AlegreyaSansSC-BoldItalic'),
        url('${BoldItalic2}') format('woff2'),
        url('${BoldItalic}') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Bold'), local('AlegreyaSans-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Thin Italic'), local('AlegreyaSans-ThinItalic'),
        url('${ThinItalic2}') format('woff2'),
        url('${ThinItalic}') format('woff');
    font-weight: 100;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Bold Italic'), local('AlegreyaSans-BoldItalic'),
        url('${BoldItalic2}') format('woff2'),
        url('${BoldItalic}') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Light Italic'), local('AlegreyaSansSC-LightItalic'),
        url('${LightItalic2}') format('woff2'),
        url('${LightItalic}') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Italic'), local('AlegreyaSans-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Medium Italic'), local('AlegreyaSansSC-MediumItalic'),
        url('${MediumItalic2}') format('woff2'),
        url('${MediumItalic}') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Light Italic'), local('AlegreyaSans-LightItalic'),
        url('${LightItalic2}') format('woff2'),
        url('${LightItalic}') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Medium Italic'), local('AlegreyaSans-MediumItalic'),
        url('${MediumItalic2}') format('woff2'),
        url('${MediumItalic}') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans ExtraBold'), local('AlegreyaSans-ExtraBold'),
        url('${ExtraBold2}') format('woff2'),
        url('${ExtraBold}') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Regular'), local('AlegreyaSans-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC ExtraBold'), local('AlegreyaSansSC-ExtraBold'),
        url('${ExtraBold2}') format('woff2'),
        url('${ExtraBold}') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Bold'), local('AlegreyaSansSC-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Black Italic'), local('AlegreyaSans-BlackItalic'),
        url('${BlackItalic2}') format('woff2'),
        url('${BlackItalic}') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Thin'), local('AlegreyaSans-Thin'),
        url('${Thin2}') format('woff2'),
        url('${Thin}') format('woff');
    font-weight: 100;
    font-style: normal;
}
`;

const css = `
@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Italic'), local('AlegreyaSansSC-Italic'),
        url('AlegreyaSansSC-Italic.woff2') format('woff2'),
        url('AlegreyaSansSC-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Black'), local('AlegreyaSansSC-Black'),
        url('AlegreyaSansSC-Black.woff2') format('woff2'),
        url('AlegreyaSansSC-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Light'), local('AlegreyaSansSC-Light'),
        url('AlegreyaSansSC-Light.woff2') format('woff2'),
        url('AlegreyaSansSC-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Black Italic'), local('AlegreyaSansSC-BlackItalic'),
        url('AlegreyaSansSC-BlackItalic.woff2') format('woff2'),
        url('AlegreyaSansSC-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Medium'), local('AlegreyaSansSC-Medium'),
        url('AlegreyaSansSC-Medium.woff2') format('woff2'),
        url('AlegreyaSansSC-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Medium'), local('AlegreyaSans-Medium'),
        url('AlegreyaSans-Medium.woff2') format('woff2'),
        url('AlegreyaSans-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Black'), local('AlegreyaSans-Black'),
        url('AlegreyaSans-Black.woff2') format('woff2'),
        url('AlegreyaSans-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Light'), local('AlegreyaSans-Light'),
        url('AlegreyaSans-Light.woff2') format('woff2'),
        url('AlegreyaSans-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC ExtraBold Italic'), local('AlegreyaSansSC-ExtraBoldItalic'),
        url('AlegreyaSansSC-ExtraBoldItalic.woff2') format('woff2'),
        url('AlegreyaSansSC-ExtraBoldItalic.woff') format('woff');
    font-weight: 800;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans ExtraBold Italic'), local('AlegreyaSans-ExtraBoldItalic'),
        url('AlegreyaSans-ExtraBoldItalic.woff2') format('woff2'),
        url('AlegreyaSans-ExtraBoldItalic.woff') format('woff');
    font-weight: 800;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Bold Italic'), local('AlegreyaSansSC-BoldItalic'),
        url('AlegreyaSansSC-BoldItalic.woff2') format('woff2'),
        url('AlegreyaSansSC-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Bold'), local('AlegreyaSans-Bold'),
        url('AlegreyaSans-Bold.woff2') format('woff2'),
        url('AlegreyaSans-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Thin Italic'), local('AlegreyaSans-ThinItalic'),
        url('AlegreyaSans-ThinItalic.woff2') format('woff2'),
        url('AlegreyaSans-ThinItalic.woff') format('woff');
    font-weight: 100;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Bold Italic'), local('AlegreyaSans-BoldItalic'),
        url('AlegreyaSans-BoldItalic.woff2') format('woff2'),
        url('AlegreyaSans-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Light Italic'), local('AlegreyaSansSC-LightItalic'),
        url('AlegreyaSansSC-LightItalic.woff2') format('woff2'),
        url('AlegreyaSansSC-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Italic'), local('AlegreyaSans-Italic'),
        url('AlegreyaSans-Italic.woff2') format('woff2'),
        url('AlegreyaSans-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Medium Italic'), local('AlegreyaSansSC-MediumItalic'),
        url('AlegreyaSansSC-MediumItalic.woff2') format('woff2'),
        url('AlegreyaSansSC-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Light Italic'), local('AlegreyaSans-LightItalic'),
        url('AlegreyaSans-LightItalic.woff2') format('woff2'),
        url('AlegreyaSans-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Medium Italic'), local('AlegreyaSans-MediumItalic'),
        url('AlegreyaSans-MediumItalic.woff2') format('woff2'),
        url('AlegreyaSans-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans ExtraBold'), local('AlegreyaSans-ExtraBold'),
        url('AlegreyaSans-ExtraBold.woff2') format('woff2'),
        url('AlegreyaSans-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Regular'), local('AlegreyaSans-Regular'),
        url('AlegreyaSans-Regular.woff2') format('woff2'),
        url('AlegreyaSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC ExtraBold'), local('AlegreyaSansSC-ExtraBold'),
        url('AlegreyaSansSC-ExtraBold.woff2') format('woff2'),
        url('AlegreyaSansSC-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans SC';
    src: local('Alegreya Sans SC Bold'), local('AlegreyaSansSC-Bold'),
        url('AlegreyaSansSC-Bold.woff2') format('woff2'),
        url('AlegreyaSansSC-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Black Italic'), local('AlegreyaSans-BlackItalic'),
        url('AlegreyaSans-BlackItalic.woff2') format('woff2'),
        url('AlegreyaSans-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Alegreya Sans';
    src: local('Alegreya Sans Thin'), local('AlegreyaSans-Thin'),
        url('AlegreyaSans-Thin.woff2') format('woff2'),
        url('AlegreyaSans-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
}
`;

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
    ExtraBold,
    ExtraBold2,
    ExtraBoldItalic,
    ExtraBoldItalic2,
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
  styles,
  css,
};

export default data;
