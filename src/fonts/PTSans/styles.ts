import Bold from './PTSans-Bold.woff';
import Bold2 from './PTSans-Bold.woff2';
import BoldItalic from './PTSans-BoldItalic.woff';
import BoldItalic2 from './PTSans-BoldItalic.woff2';
import Italic from './PTSans-Italic.woff';
import Italic2 from './PTSans-Italic.woff2';
import Regular from './PTSans-Regular.woff';
import Regular2 from './PTSans-Regular.woff2';

const styles = `
@font-face {
    font-family: 'PT Sans';
    src: local('PT Sans'), local('PTSans-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'PT Sans';
    src: local('PT Sans Bold Italic'), local('PTSans-BoldItalic'),
        url('${BoldItalic2}') format('woff2'),
        url('${BoldItalic}') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'PT Sans';
    src: local('PT Sans Italic'), local('PTSans-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'PT Sans';
    src: local('PT Sans Bold'), local('PTSans-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}
`;

const css = `
@font-face {
    font-family: 'PT Sans';
    src: local('PT Sans'), local('PTSans-Regular'),
        url('PTSans-Regular.woff2') format('woff2'),
        url('PTSans-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'PT Sans';
    src: local('PT Sans Bold Italic'), local('PTSans-BoldItalic'),
        url('PTSans-BoldItalic.woff2') format('woff2'),
        url('PTSans-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'PT Sans';
    src: local('PT Sans Italic'), local('PTSans-Italic'),
        url('PTSans-Italic.woff2') format('woff2'),
        url('PTSans-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'PT Sans';
    src: local('PT Sans Bold'), local('PTSans-Bold'),
        url('PTSans-Bold.woff2') format('woff2'),
        url('PTSans-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
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
    Regular,
    Regular2,
  ],
  styles,
  css,
};

export default data;
