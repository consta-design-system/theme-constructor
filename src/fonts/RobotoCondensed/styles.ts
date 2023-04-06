import Bold from './RobotoCondensed-Bold.woff';
import Bold2 from './RobotoCondensed-Bold.woff2';
import BoldItalic from './RobotoCondensed-BoldItalic.woff';
import BoldItalic2 from './RobotoCondensed-BoldItalic.woff2';
import Italic from './RobotoCondensed-Italic.woff';
import Italic2 from './RobotoCondensed-Italic.woff2';
import Light from './RobotoCondensed-Light.woff';
import Light2 from './RobotoCondensed-Light.woff2';
import LightItalic from './RobotoCondensed-LightItalic.woff';
import LightItalic2 from './RobotoCondensed-LightItalic.woff2';
import Regular from './RobotoCondensed-Regular.woff';
import Regular2 from './RobotoCondensed-Regular.woff2';

const styles = `
@font-face {
    font-family: 'Roboto Condensed';
    src: local('Roboto Condensed Light'), local('RobotoCondensed-Light'),
        url('${Light2}') format('woff2'),
        url('${Light}') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto Condensed';
    src: local('Roboto Condensed Light Italic'), local('RobotoCondensed-LightItalic'),
        url('${LightItalic2}') format('woff2'),
        url('${LightItalic}') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto Condensed';
    src: local('Roboto Condensed Bold Italic'), local('RobotoCondensed-BoldItalic'),
        url('${BoldItalic2}') format('woff2'),
        url('${BoldItalic}') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto Condensed';
    src: local('Roboto Condensed Bold'), local('RobotoCondensed-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto Condensed';
    src: local('Roboto Condensed'), local('RobotoCondensed-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto Condensed';
    src: local('Roboto Condensed Italic'), local('RobotoCondensed-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}
`;

const css = `@font-face {
    font-family: 'Roboto Condensed';
    src: local('Roboto Condensed Light'), local('RobotoCondensed-Light'),
        url('RobotoCondensed-Light.woff2') format('woff2'),
        url('RobotoCondensed-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto Condensed';
    src: local('Roboto Condensed Light Italic'), local('RobotoCondensed-LightItalic'),
        url('RobotoCondensed-LightItalic.woff2') format('woff2'),
        url('RobotoCondensed-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto Condensed';
    src: local('Roboto Condensed Bold Italic'), local('RobotoCondensed-BoldItalic'),
        url('RobotoCondensed-BoldItalic.woff2') format('woff2'),
        url('RobotoCondensed-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Roboto Condensed';
    src: local('Roboto Condensed Bold'), local('RobotoCondensed-Bold'),
        url('RobotoCondensed-Bold.woff2') format('woff2'),
        url('RobotoCondensed-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto Condensed';
    src: local('Roboto Condensed'), local('RobotoCondensed-Regular'),
        url('RobotoCondensed-Regular.woff2') format('woff2'),
        url('RobotoCondensed-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Roboto Condensed';
    src: local('Roboto Condensed Italic'), local('RobotoCondensed-Italic'),
        url('RobotoCondensed-Italic.woff2') format('woff2'),
        url('RobotoCondensed-Italic.woff') format('woff');
    font-weight: normal;
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
    Regular,
    Regular2,
  ],
  styles,
  css,
};

export default data;
