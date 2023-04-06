import Bold from './Ubuntu-Bold.woff';
import Bold2 from './Ubuntu-Bold.woff2';
import BoldItalic from './Ubuntu-BoldItalic.woff';
import BoldItalic2 from './Ubuntu-BoldItalic.woff2';
import Italic from './Ubuntu-Italic.woff';
import Italic2 from './Ubuntu-Italic.woff2';
import Light from './Ubuntu-Light.woff';
import Light2 from './Ubuntu-Light.woff2';
import LightItalic from './Ubuntu-LightItalic.woff';
import LightItalic2 from './Ubuntu-LightItalic.woff2';
import Medium from './Ubuntu-Medium.woff';
import Medium2 from './Ubuntu-Medium.woff2';
import MediumItalic from './Ubuntu-MediumItalic.woff';
import MediumItalic2 from './Ubuntu-MediumItalic.woff2';
import Regular from './Ubuntu-Regular.woff';
import Regular2 from './Ubuntu-Regular.woff2';

const styles = `
@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Bold'), local('Ubuntu-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Italic'), local('Ubuntu-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Regular'), local('Ubuntu-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Bold Italic'), local('Ubuntu-BoldItalic'),
        url('${BoldItalic2}') format('woff2'),
        url('${BoldItalic}') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Medium'), local('Ubuntu-Medium'),
        url('${Medium2}') format('woff2'),
        url('${Medium}') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Medium Italic'), local('Ubuntu-MediumItalic'),
        url('${MediumItalic2}') format('woff2'),
        url('${MediumItalic}') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Light'), local('Ubuntu-Light'),
        url('${Light2}') format('woff2'),
        url('${Light}') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Light Italic'), local('Ubuntu-LightItalic'),
        url('${LightItalic2}') format('woff2'),
        url('${LightItalic}') format('woff');
    font-weight: 300;
    font-style: italic;
}
`;

const css = `
@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Bold'), local('Ubuntu-Bold'),
        url('Ubuntu-Bold.woff2') format('woff2'),
        url('Ubuntu-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Italic'), local('Ubuntu-Italic'),
        url('Ubuntu-Italic.woff2') format('woff2'),
        url('Ubuntu-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Regular'), local('Ubuntu-Regular'),
        url('Ubuntu-Regular.woff2') format('woff2'),
        url('Ubuntu-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Bold Italic'), local('Ubuntu-BoldItalic'),
        url('Ubuntu-BoldItalic.woff2') format('woff2'),
        url('Ubuntu-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Medium'), local('Ubuntu-Medium'),
        url('Ubuntu-Medium.woff2') format('woff2'),
        url('Ubuntu-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Medium Italic'), local('Ubuntu-MediumItalic'),
        url('Ubuntu-MediumItalic.woff2') format('woff2'),
        url('Ubuntu-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Light'), local('Ubuntu-Light'),
        url('Ubuntu-Light.woff2') format('woff2'),
        url('Ubuntu-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Ubuntu';
    src: local('Ubuntu Light Italic'), local('Ubuntu-LightItalic'),
        url('Ubuntu-LightItalic.woff2') format('woff2'),
        url('Ubuntu-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
}
`;

const data = {
  fonts: [
    Bold,
    Bold2,
    BoldItalic,
    BoldItalic2,
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
  ],
  styles,
  css,
};

export default data;
