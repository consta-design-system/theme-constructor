import Black from './Raleway-Black.woff';
import Black2 from './Raleway-Black.woff2';
import BlackItalic from './Raleway-BlackItalic.woff';
import BlackItalic2 from './Raleway-BlackItalic.woff2';
import Bold from './Raleway-Bold.woff';
import Bold2 from './Raleway-Bold.woff2';
import ExtraBold from './Raleway-ExtraBold.woff';
import ExtraBold2 from './Raleway-ExtraBold.woff2';
import ExtraBoldItalic from './Raleway-ExtraBoldItalic.woff';
import ExtraBoldItalic2 from './Raleway-ExtraBoldItalic.woff2';
import ExtraLight from './Raleway-ExtraLight.woff';
import ExtraLight2 from './Raleway-ExtraLight.woff2';
import ExtraLightItalic from './Raleway-ExtraLightItalic.woff';
import ExtraLightItalic2 from './Raleway-ExtraLightItalic.woff2';
import Italic from './Raleway-Italic.woff';
import Italic2 from './Raleway-Italic.woff2';
import Light from './Raleway-Light.woff';
import Light2 from './Raleway-Light.woff2';
import LightItalic from './Raleway-LightItalic.woff';
import LightItalic2 from './Raleway-LightItalic.woff2';
import Medium from './Raleway-Medium.woff';
import Medium2 from './Raleway-Medium.woff2';
import MediumItalic from './Raleway-MediumItalic.woff';
import MediumItalic2 from './Raleway-MediumItalic.woff2';
import Regular from './Raleway-Regular.woff';
import Regular2 from './Raleway-Regular.woff2';
import SemiBold from './Raleway-SemiBold.woff';
import SemiBold2 from './Raleway-SemiBold.woff2';
import SemiBoldItalic from './Raleway-SemiBoldItalic.woff';
import SemiBoldItalic2 from './Raleway-SemiBoldItalic.woff2';
import Thin from './Raleway-Thin.woff';
import Thin2 from './Raleway-Thin.woff2';

const styles = `
@font-face {
    font-family: 'Raleway';
    src: local('Raleway SemiBold Italic'), local('Raleway-SemiBoldItalic'),
        url('${SemiBoldItalic2}') format('woff2'),
        url('${SemiBoldItalic}') format('woff');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway ExtraLight Italic'), local('Raleway-ExtraLightItalic'),
        url('${ExtraLightItalic2}') format('woff2'),
        url('${ExtraLightItalic}') format('woff');
    font-weight: 200;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Medium Italic'), local('Raleway-MediumItalic'),
        url('${MediumItalic2}') format('woff2'),
        url('${MediumItalic}') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway ExtraBold Italic'), local('Raleway-ExtraBoldItalic'),
        url('${ExtraBoldItalic2}') format('woff2'),
        url('${ExtraBoldItalic}') format('woff');
    font-weight: 800;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway'), local('Raleway-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'),
        url('${ExtraBold2}') format('woff2'),
        url('${ExtraBold}') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Black Italic'), local('Raleway-BlackItalic'),
        url('${BlackItalic2}') format('woff2'),
        url('${BlackItalic}') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Light'), local('Raleway-Light'),
        url('${Light2}') format('woff2'),
        url('${Light}') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Black'), local('Raleway-Black'),
        url('${Black2}') format('woff2'),
        url('${Black}') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Medium'), local('Raleway-Medium'),
        url('${Medium2}') format('woff2'),
        url('${Medium}') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway ExtraLight'), local('Raleway-ExtraLight'),
        url('${ExtraLight2}') format('woff2'),
        url('${ExtraLight}') format('woff');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Italic'), local('Raleway-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Thin'), local('Raleway-Thin'),
        url('${Thin2}') format('woff2'),
        url('${Thin}') format('woff');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway SemiBold'), local('Raleway-SemiBold'),
        url('${SemiBold2}') format('woff2'),
        url('${SemiBold}') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Light Italic'), local('Raleway-LightItalic'),
        url('${LightItalic2}') format('woff2'),
        url('${LightItalic}') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Bold'), local('Raleway-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}f') format('woff');
    font-weight: bold;
    font-style: normal;
}
`;

const css = `
@font-face {
    font-family: 'Raleway';
    src: local('Raleway SemiBold Italic'), local('Raleway-SemiBoldItalic'),
        url('Raleway-SemiBoldItalic.woff2') format('woff2'),
        url('Raleway-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway ExtraLight Italic'), local('Raleway-ExtraLightItalic'),
        url('Raleway-ExtraLightItalic.woff2') format('woff2'),
        url('Raleway-ExtraLightItalic.woff') format('woff');
    font-weight: 200;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Medium Italic'), local('Raleway-MediumItalic'),
        url('Raleway-MediumItalic.woff2') format('woff2'),
        url('Raleway-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway ExtraBold Italic'), local('Raleway-ExtraBoldItalic'),
        url('Raleway-ExtraBoldItalic.woff2') format('woff2'),
        url('Raleway-ExtraBoldItalic.woff') format('woff');
    font-weight: 800;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway'), local('Raleway-Regular'),
        url('Raleway-Regular.woff2') format('woff2'),
        url('Raleway-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway ExtraBold'), local('Raleway-ExtraBold'),
        url('Raleway-ExtraBold.woff2') format('woff2'),
        url('Raleway-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Black Italic'), local('Raleway-BlackItalic'),
        url('Raleway-BlackItalic.woff2') format('woff2'),
        url('Raleway-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Light'), local('Raleway-Light'),
        url('Raleway-Light.woff2') format('woff2'),
        url('Raleway-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Black'), local('Raleway-Black'),
        url('Raleway-Black.woff2') format('woff2'),
        url('Raleway-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Medium'), local('Raleway-Medium'),
        url('Raleway-Medium.woff2') format('woff2'),
        url('Raleway-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway ExtraLight'), local('Raleway-ExtraLight'),
        url('Raleway-ExtraLight.woff2') format('woff2'),
        url('Raleway-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Italic'), local('Raleway-Italic'),
        url('Raleway-Italic.woff2') format('woff2'),
        url('Raleway-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Thin'), local('Raleway-Thin'),
        url('Raleway-Thin.woff2') format('woff2'),
        url('Raleway-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway SemiBold'), local('Raleway-SemiBold'),
        url('Raleway-SemiBold.woff2') format('woff2'),
        url('Raleway-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Light Italic'), local('Raleway-LightItalic'),
        url('Raleway-LightItalic.woff2') format('woff2'),
        url('Raleway-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Raleway';
    src: local('Raleway Bold'), local('Raleway-Bold'),
        url('Raleway-Bold.woff2') format('woff2'),
        url('Raleway-Bold.woff') format('woff');
    font-weight: bold;
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
    ExtraBold,
    ExtraBold2,
    ExtraBoldItalic,
    ExtraLight,
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
  ],
  styles,
  css,
};

export default data;
