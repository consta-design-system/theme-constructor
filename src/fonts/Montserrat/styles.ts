import Black from './Montserrat-Black.woff';
import Black2 from './Montserrat-Black.woff2';
import BlackItalic from './Montserrat-BlackItalic.woff';
import BlackItalic2 from './Montserrat-BlackItalic.woff2';
import Bold from './Montserrat-Bold.woff';
import Bold2 from './Montserrat-Bold.woff2';
import BoldItalic from './Montserrat-BoldItalic.woff';
import BoldItalic2 from './Montserrat-BoldItalic.woff2';
import ExtraBold from './Montserrat-ExtraBold.woff';
import ExtraBold2 from './Montserrat-ExtraBold.woff2';
import ExtraBoldItalic from './Montserrat-ExtraBoldItalic.woff';
import ExtraBoldItalic2 from './Montserrat-ExtraBoldItalic.woff2';
import ExtraLight from './Montserrat-ExtraLight.woff';
import ExtraLight2 from './Montserrat-ExtraLight.woff2';
import ExtraLightItalic from './Montserrat-ExtraLightItalic.woff';
import ExtraLightItalic2 from './Montserrat-ExtraLightItalic.woff2';
import Italic from './Montserrat-Italic.woff';
import Italic2 from './Montserrat-Italic.woff2';
import Light from './Montserrat-Light.woff';
import Light2 from './Montserrat-Light.woff2';
import LightItalic from './Montserrat-LightItalic.woff';
import LightItalic2 from './Montserrat-LightItalic.woff2';
import Medium from './Montserrat-Medium.woff';
import Medium2 from './Montserrat-Medium.woff2';
import MediumItalic from './Montserrat-MediumItalic.woff';
import MediumItalic2 from './Montserrat-MediumItalic.woff2';
import Regular from './Montserrat-Regular.woff';
import Regular2 from './Montserrat-Regular.woff2';
import SemiBold from './Montserrat-SemiBold.woff';
import SemiBold2 from './Montserrat-SemiBold.woff2';
import SemiBoldItalic from './Montserrat-SemiBoldItalic.woff';
import SemiBoldItalic2 from './Montserrat-SemiBoldItalic.woff2';
import Thin from './Montserrat-Thin.woff';
import Thin2 from './Montserrat-Thin.woff2';
import ThinItalic from './Montserrat-ThinItalic.woff';
import ThinItalic2 from './Montserrat-ThinItalic.woff2';

const styles = `
@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat ExtraLight'), local('Montserrat-ExtraLight'),
        url('${ExtraLight2}') format('woff2'),
        url('${ExtraLight}') format('woff');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Medium Italic'), local('Montserrat-MediumItalic'),
        url('${MediumItalic2}') format('woff2'),
        url('${MediumItalic}') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Italic'), local('Montserrat-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Thin Italic'), local('Montserrat-ThinItalic'),
        url('${ThinItalic2}') format('woff2'),
        url('${ThinItalic}') format('woff');
    font-weight: 100;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Light'), local('Montserrat-Light'),
        url('${Light2}') format('woff2'),
        url('${Light}') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Black'), local('Montserrat-Black'),
        url('${Black2}') format('woff2'),
        url('${Black}') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Medium'), local('Montserrat-Medium'),
        url('${Medium2}') format('woff2'),
        url('${Medium}') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat ExtraLight Italic'), local('Montserrat-ExtraLightItalic'),
        url('${ExtraLightItalic2}') format('woff2'),
        url('${ExtraLightItalic}') format('woff');
    font-weight: 200;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Black Italic'), local('Montserrat-BlackItalic'),
        url('${BlackItalic2}') format('woff2'),
        url('${BlackItalic}') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat ExtraBold Italic'), local('Montserrat-ExtraBoldItalic'),
        url('${ExtraBoldItalic2}') format('woff2'),
        url('${ExtraBoldItalic}') format('woff');
    font-weight: 800;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat SemiBold Italic'), local('Montserrat-SemiBoldItalic'),
        url('${SemiBoldItalic2}') format('woff2'),
        url('${SemiBoldItalic}') format('woff');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'),
        url('${ExtraBold2}') format('woff2'),
        url('${ExtraBold}') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Bold Italic'), local('Montserrat-BoldItalic'),
        url('${BoldItalic2}') format('woff2'),
        url('${BoldItalic}') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Light Italic'), local('Montserrat-LightItalic'),
        url('${LightItalic2}') format('woff2'),
        url('${LightItalic}') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
        url('${SemiBold2}') format('woff2'),
        url('${SemiBold}') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Thin'), local('Montserrat-Thin'),
        url('${Thin2}') format('woff2'),
        url('${Thin}') format('woff');
    font-weight: 100;
    font-style: normal;
}
`;

const css = `
@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat ExtraLight'), local('Montserrat-ExtraLight'),
        url('Montserrat-ExtraLight.woff2') format('woff2'),
        url('Montserrat-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Medium Italic'), local('Montserrat-MediumItalic'),
        url('Montserrat-MediumItalic.woff2') format('woff2'),
        url('Montserrat-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Italic'), local('Montserrat-Italic'),
        url('Montserrat-Italic.woff2') format('woff2'),
        url('Montserrat-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
        url('Montserrat-Regular.woff2') format('woff2'),
        url('Montserrat-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Thin Italic'), local('Montserrat-ThinItalic'),
        url('Montserrat-ThinItalic.woff2') format('woff2'),
        url('Montserrat-ThinItalic.woff') format('woff');
    font-weight: 100;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
        url('Montserrat-Bold.woff2') format('woff2'),
        url('Montserrat-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Light'), local('Montserrat-Light'),
        url('Montserrat-Light.woff2') format('woff2'),
        url('Montserrat-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Black'), local('Montserrat-Black'),
        url('Montserrat-Black.woff2') format('woff2'),
        url('Montserrat-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Medium'), local('Montserrat-Medium'),
        url('Montserrat-Medium.woff2') format('woff2'),
        url('Montserrat-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat ExtraLight Italic'), local('Montserrat-ExtraLightItalic'),
        url('Montserrat-ExtraLightItalic.woff2') format('woff2'),
        url('Montserrat-ExtraLightItalic.woff') format('woff');
    font-weight: 200;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Black Italic'), local('Montserrat-BlackItalic'),
        url('Montserrat-BlackItalic.woff2') format('woff2'),
        url('Montserrat-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat ExtraBold Italic'), local('Montserrat-ExtraBoldItalic'),
        url('Montserrat-ExtraBoldItalic.woff2') format('woff2'),
        url('Montserrat-ExtraBoldItalic.woff') format('woff');
    font-weight: 800;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat SemiBold Italic'), local('Montserrat-SemiBoldItalic'),
        url('Montserrat-SemiBoldItalic.woff2') format('woff2'),
        url('Montserrat-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat ExtraBold'), local('Montserrat-ExtraBold'),
        url('Montserrat-ExtraBold.woff2') format('woff2'),
        url('Montserrat-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Bold Italic'), local('Montserrat-BoldItalic'),
        url('Montserrat-BoldItalic.woff2') format('woff2'),
        url('Montserrat-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Light Italic'), local('Montserrat-LightItalic'),
        url('Montserrat-LightItalic.woff2') format('woff2'),
        url('Montserrat-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
        url('Montserrat-SemiBold.woff2') format('woff2'),
        url('Montserrat-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Montserrat';
    src: local('Montserrat Thin'), local('Montserrat-Thin'),
        url('Montserrat-Thin.woff2') format('woff2'),
        url('Montserrat-Thin.woff') format('woff');
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
    BoldItalic2,
    ExtraBold,
    ExtraBold2,
    ExtraBoldItalic,
    ExtraBoldItalic2,
    ExtraLight,
    ExtraLight2,
    ExtraLightItalic,
    ExtraLightItalic2,
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
    SemiBold,
    SemiBold2,
    SemiBoldItalic,
    SemiBoldItalic2,
    Thin,
    Thin2,
    ThinItalic,
    ThinItalic2,
  ],
  styles,
  css,
};

export default data;
