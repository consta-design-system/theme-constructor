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

const styles = `
@font-face {
    font-family: 'Roboto';
    src: local('Roboto Black Italic'), local('Roboto-BlackItalic'),
        url('${BlackItalic2}') format('woff2'),
        url('${BlackItalic}') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Bold'), local('Roboto-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'),
        url('${BoldItalic2}') format('woff2'),
        url('${BoldItalic}') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Light Italic'), local('Roboto-LightItalic'),
        url('${LightItalic2}') format('woff2'),
        url('${LightItalic}') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'),
        url('${ThinItalic2}') format('woff2'),
        url('${ThinItalic}') format('woff');
    font-weight: 100;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Black'), local('Roboto-Black'),
        url('${Black2}') format('woff2'),
        url('${Black}') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'),
        url('${MediumItalic2}') format('woff2'),
        url('${MediumItalic}') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Thin'), local('Roboto-Thin'),
        url('${Thin2}') format('woff2'),
        url('${Thin}') format('woff');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Light'), local('Roboto-Light'),
        url('${Light2}') format('woff2'),
        url('${Light}') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Italic'), local('Roboto-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Medium'), local('Roboto-Medium'),
        url('${Medium2}') format('woff2'),
        url('${Medium}') format('woff');
    font-weight: 500;
    font-style: normal;
}
`;

const css = `
@font-face {
    font-family: 'Roboto';
    src: local('Roboto Black Italic'), local('Roboto-BlackItalic'),
        url('Roboto-BlackItalic.woff2') format('woff2'),
        url('Roboto-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Bold'), local('Roboto-Bold'),
        url('Roboto-Bold.woff2') format('woff2'),
        url('Roboto-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Bold Italic'), local('Roboto-BoldItalic'),
        url('Roboto-BoldItalic.woff2') format('woff2'),
        url('Roboto-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Light Italic'), local('Roboto-LightItalic'),
        url('Roboto-LightItalic.woff2') format('woff2'),
        url('Roboto-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto'), local('Roboto-Regular'),
        url('Roboto-Regular.woff2') format('woff2'),
        url('Roboto-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Thin Italic'), local('Roboto-ThinItalic'),
        url('Roboto-ThinItalic.woff2') format('woff2'),
        url('Roboto-ThinItalic.woff') format('woff');
    font-weight: 100;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Black'), local('Roboto-Black'),
        url('Roboto-Black.woff2') format('woff2'),
        url('Roboto-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Medium Italic'), local('Roboto-MediumItalic'),
        url('Roboto-MediumItalic.woff2') format('woff2'),
        url('Roboto-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Thin'), local('Roboto-Thin'),
        url('Roboto-Thin.woff2') format('woff2'),
        url('Roboto-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Light'), local('Roboto-Light'),
        url('Roboto-Light.woff2') format('woff2'),
        url('Roboto-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Italic'), local('Roboto-Italic'),
        url('Roboto-Italic.woff2') format('woff2'),
        url('Roboto-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto';
    src: local('Roboto Medium'), local('Roboto-Medium'),
        url('Roboto-Medium.woff2') format('woff2'),
        url('Roboto-Medium.woff') format('woff');
    font-weight: 500;
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
