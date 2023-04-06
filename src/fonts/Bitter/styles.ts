import Bold from './Bitter-Bold.woff';
import Bold2 from './Bitter-Bold.woff2';
import Italic from './Bitter-Italic.woff';
import Italic2 from './Bitter-Italic.woff2';
import Regular from './Bitter-Regular.woff';
import Regular2 from './Bitter-Regular.woff2';

const styles = `
@font-face {
    font-family: 'Bitter';
    src: local('Bitter Regular'), local('Bitter-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Bitter';
    src: local('Bitter Italic'), local('Bitter-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Bitter';
    src: local('Bitter Bold'), local('Bitter-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}
`;

const css = `
@font-face {
    font-family: 'Bitter';
    src: local('Bitter Regular'), local('Bitter-Regular'),
        url('Bitter-Regular.woff2') format('woff2'),
        url('Bitter-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Bitter';
    src: local('Bitter Italic'), local('Bitter-Italic'),
        url('Bitter-Italic.woff2') format('woff2'),
        url('Bitter-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Bitter';
    src: local('Bitter Bold'), local('Bitter-Bold'),
        url('Bitter-Bold.woff2') format('woff2'),
        url('Bitter-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}
`;

const data = {
  fonts: [Bold, Bold2, Italic, Italic2, Regular, Regular2],
  styles,
  css,
};

export default data;
