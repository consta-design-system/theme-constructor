import Bold from './OpenSans-Bold.woff';
import Bold2 from './OpenSans-Bold.woff2';
import BoldItalic from './OpenSans-BoldItalic.woff';
import BoldItalic2 from './OpenSans-BoldItalic.woff2';
import ExtraBold from './OpenSans-ExtraBold.woff';
import ExtraBold2 from './OpenSans-ExtraBold.woff2';
import ExtraBoldItalic from './OpenSans-ExtraBoldItalic.woff';
import ExtraBoldItalic2 from './OpenSans-ExtraBoldItalic.woff2';
import Italic from './OpenSans-Italic.woff';
import Italic2 from './OpenSans-Italic.woff2';
import Light from './OpenSans-Light.woff';
import Light2 from './OpenSans-Light.woff2';
import LightItalic from './OpenSans-LightItalic.woff';
import LightItalic2 from './OpenSans-LightItalic.woff2';
import Regular from './OpenSans-Regular.woff';
import Regular2 from './OpenSans-Regular.woff2';
import SemiBold from './OpenSans-SemiBold.woff';
import SemiBold2 from './OpenSans-SemiBold.woff2';
import SemiBoldItalic from './OpenSans-SemiBoldItalic.woff';
import SemiBoldItalic2 from './OpenSans-SemiBoldItalic.woff2';

const styles = `
@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Italic'), local('OpenSans-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'),
        url('${BoldItalic2}') format('woff2'),
        url('${BoldItalic}') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),
        url('${SemiBold2}') format('woff2'),
        url('${SemiBold}') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans ExtraBold Italic'), local('OpenSans-ExtraBoldItalic'),
        url('${ExtraBoldItalic2}') format('woff2'),
        url('${ExtraBoldItalic}') format('woff');
    font-weight: 800;
    font-style: italic;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Light Italic'), local('OpenSans-LightItalic'),
        url('${LightItalic2}') format('woff2'),
        url('${LightItalic}') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Bold'), local('OpenSans-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans SemiBold Italic'), local('OpenSans-SemiBoldItalic'),
        url('${SemiBoldItalic2}') format('woff2'),
        url('${SemiBoldItalic}') format('woff');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'),
        url('${ExtraBold2}') format('woff2'),
        url('${ExtraBold}') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Light'), local('OpenSans-Light'),
        url('${Light2}') format('woff2'),
        url('${Light}') format('woff');
    font-weight: 300;
    font-style: normal;
}
`;

const css = `
@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Italic'), local('OpenSans-Italic'),
        url('OpenSans-Italic.woff2') format('woff2'),
        url('OpenSans-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Regular'), local('OpenSans-Regular'),
        url('OpenSans-Regular.woff2') format('woff2'),
        url('OpenSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Bold Italic'), local('OpenSans-BoldItalic'),
        url('OpenSans-BoldItalic.woff2') format('woff2'),
        url('OpenSans-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans SemiBold'), local('OpenSans-SemiBold'),
        url('OpenSans-SemiBold.woff2') format('woff2'),
        url('OpenSans-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans ExtraBold Italic'), local('OpenSans-ExtraBoldItalic'),
        url('OpenSans-ExtraBoldItalic.woff2') format('woff2'),
        url('OpenSans-ExtraBoldItalic.woff') format('woff');
    font-weight: 800;
    font-style: italic;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Light Italic'), local('OpenSans-LightItalic'),
        url('OpenSans-LightItalic.woff2') format('woff2'),
        url('OpenSans-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Bold'), local('OpenSans-Bold'),
        url('OpenSans-Bold.woff2') format('woff2'),
        url('OpenSans-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans SemiBold Italic'), local('OpenSans-SemiBoldItalic'),
        url('OpenSans-SemiBoldItalic.woff2') format('woff2'),
        url('OpenSans-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans ExtraBold'), local('OpenSans-ExtraBold'),
        url('OpenSans-ExtraBold.woff2') format('woff2'),
        url('OpenSans-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Open Sans';
    src: local('Open Sans Light'), local('OpenSans-Light'),
        url('OpenSans-Light.woff2') format('woff2'),
        url('OpenSans-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}
`;

const data = {
  fonts: [
    Bold,
    Bold2,
    BoldItalic,
    BoldItalic2,
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
    Regular,
    Regular2,
    SemiBold,
    SemiBold2,
    SemiBoldItalic,
    SemiBoldItalic2,
  ],
  styles,
  css,
};

export default data;
