import Bold from './Oswald-Bold.woff';
import Bold2 from './Oswald-Bold.woff2';
import ExtraLight from './Oswald-ExtraLight.woff';
import ExtraLight2 from './Oswald-ExtraLight.woff2';
import Light from './Oswald-Light.woff';
import Light2 from './Oswald-Light.woff2';
import Medium from './Oswald-Medium.woff';
import Medium2 from './Oswald-Medium.woff2';
import Regular from './Oswald-Regular.woff';
import Regular2 from './Oswald-Regular.woff2';
import SemiBold from './Oswald-SemiBold.woff';
import SemiBold2 from './Oswald-SemiBold.woff2';

const styles = `
@font-face {
    font-family: 'Oswald';
    src: local('Oswald ExtraLight'), local('Oswald-ExtraLight'),
        url('${ExtraLight2}') format('woff2'),
        url('${ExtraLight}') format('woff');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'Oswald';
    src: local('Oswald Light'), local('Oswald-Light'),
        url('${Light2}') format('woff2'),
        url('${Light}') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Oswald';
    src: local('Oswald Medium'), local('Oswald-Medium'),
        url('${Medium2}') format('woff2'),
        url('${Medium}') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Oswald';
    src: local('Oswald Bold'), local('Oswald-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Oswald';
    src: local('Oswald Regular'), local('Oswald-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Oswald';
    src: local('Oswald SemiBold'), local('Oswald-SemiBold'),
        url('${SemiBold2}') format('woff2'),
        url('${SemiBold}') format('woff');
    font-weight: 600;
    font-style: normal;
}
`;

const css = `
@font-face {
    font-family: 'Oswald';
    src: local('Oswald ExtraLight'), local('Oswald-ExtraLight'),
        url('Oswald-ExtraLight.woff2') format('woff2'),
        url('Oswald-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-style: normal;
}

@font-face {
    font-family: 'Oswald';
    src: local('Oswald Light'), local('Oswald-Light'),
        url('Oswald-Light.woff2') format('woff2'),
        url('Oswald-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Oswald';
    src: local('Oswald Medium'), local('Oswald-Medium'),
        url('Oswald-Medium.woff2') format('woff2'),
        url('Oswald-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Oswald';
    src: local('Oswald Bold'), local('Oswald-Bold'),
        url('Oswald-Bold.woff2') format('woff2'),
        url('Oswald-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Oswald';
    src: local('Oswald Regular'), local('Oswald-Regular'),
        url('Oswald-Regular.woff2') format('woff2'),
        url('Oswald-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Oswald';
    src: local('Oswald SemiBold'), local('Oswald-SemiBold'),
        url('Oswald-SemiBold.woff2') format('woff2'),
        url('Oswald-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}
`;

const data = {
  fonts: [
    Bold,
    Bold2,
    ExtraLight,
    ExtraLight2,
    Light,
    Light2,
    Medium,
    Medium2,
    Regular,
    Regular2,
    SemiBold,
    SemiBold2,
  ],
  styles,
  css,
};

export default data;
