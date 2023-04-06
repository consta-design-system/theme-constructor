import Black from './Heebo-Black.woff';
import Black2 from './Heebo-Black.woff2';
import Bold from './Heebo-Bold.woff';
import Bold2 from './Heebo-Bold.woff2';
import ExtraBold from './Heebo-ExtraBold.woff';
import ExtraBold2 from './Heebo-ExtraBold.woff2';
import Light from './Heebo-Light.woff';
import Light2 from './Heebo-Light.woff2';
import Medium from './Heebo-Medium.woff';
import Medium2 from './Heebo-Medium.woff2';
import Regular from './Heebo-Regular.woff';
import Regular2 from './Heebo-Regular.woff2';
import Thin from './Heebo-Thin.woff';
import Thin2 from './Heebo-Thin.woff2';

const styles = `
@font-face {
    font-family: 'Heebo';
    src: local('Heebo-Black'),
        url('${Black2}') format('woff2'),
        url('${Black}') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Heebo';
    src: local('Heebo Bold'), local('Heebo-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Heebo';
    src: local('Heebo-Medium'),
        url('${Medium2}') format('woff2'),
        url('${Medium}') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Heebo';
    src: local('Heebo-ExtraBold'),
        url('${ExtraBold2}') format('woff2'),
        url('${ExtraBold}') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Heebo';
    src: local('Heebo-Light'),
        url('${Light2}') format('woff2'),
        url('${Light}') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Heebo';
    src: local('Heebo-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Heebo';
    src: local('Heebo-Thin'),
        url('${Thin2}') format('woff2'),
        url('${Thin}') format('woff');
    font-weight: 100;
    font-style: normal;
}
`;

const css = `
@font-face {
    font-family: 'Heebo';
    src: local('Heebo-Black'),
        url('Heebo-Black.woff2') format('woff2'),
        url('Heebo-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Heebo';
    src: local('Heebo Bold'), local('Heebo-Bold'),
        url('Heebo-Bold.woff2') format('woff2'),
        url('Heebo-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Heebo';
    src: local('Heebo-Medium'),
        url('Heebo-Medium.woff2') format('woff2'),
        url('Heebo-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Heebo';
    src: local('Heebo-ExtraBold'),
        url('Heebo-ExtraBold.woff2') format('woff2'),
        url('Heebo-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'Heebo';
    src: local('Heebo-Light'),
        url('Heebo-Light.woff2') format('woff2'),
        url('Heebo-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Heebo';
    src: local('Heebo-Regular'),
        url('Heebo-Regular.woff2') format('woff2'),
        url('Heebo-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Heebo';
    src: local('Heebo-Thin'),
        url('Heebo-Thin.woff2') format('woff2'),
        url('Heebo-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
}
`;

const data = {
  fonts: [
    Black,
    Black2,
    Bold,
    Bold2,
    ExtraBold,
    ExtraBold2,
    Light,
    Light2,
    Medium,
    Medium2,
    Regular,
    Regular2,
    Thin,
    Thin2,
  ],
  styles,
  css,
};

export default data;
