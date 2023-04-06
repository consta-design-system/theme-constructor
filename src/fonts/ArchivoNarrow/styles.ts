import Bold from './ArchivoNarrow-Bold.woff';
import Bold2 from './ArchivoNarrow-Bold.woff2';
import BoldItalic from './ArchivoNarrow-BoldItalic.woff';
import BoldItalic2 from './ArchivoNarrow-BoldItalic.woff2';
import Italic from './ArchivoNarrow-Italic.woff';
import Italic2 from './ArchivoNarrow-Italic.woff2';
import Medium from './ArchivoNarrow-Medium.woff';
import Medium2 from './ArchivoNarrow-Medium.woff2';
import MediumItalic from './ArchivoNarrow-MediumItalic.woff';
import MediumItalic2 from './ArchivoNarrow-MediumItalic.woff2';
import Regular from './ArchivoNarrow-Regular.woff';
import Regular2 from './ArchivoNarrow-Regular.woff2';
import SemiBold from './ArchivoNarrow-SemiBold.woff';
import SemiBold2 from './ArchivoNarrow-SemiBold.woff2';
import SemiBoldItalic from './ArchivoNarrow-SemiBoldItalic.woff';
import SemiBoldItalic2 from './ArchivoNarrow-SemiBoldItalic.woff2';

const styles = `
@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow Bold'), local('ArchivoNarrow-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow Bold Italic'), local('ArchivoNarrow-BoldItalic'),
        url('${BoldItalic2}') format('woff2'),
        url('${BoldItalic}') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow Regular'), local('ArchivoNarrow-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow Italic'), local('ArchivoNarrow-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow Medium'), local('ArchivoNarrow-Medium'),
        url('${Medium2}') format('woff2'),
        url('${Medium}') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow Medium Italic'), local('ArchivoNarrow-MediumItalic'),
        url('${MediumItalic2}') format('woff2'),
        url('${MediumItalic}') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow SemiBold'), local('ArchivoNarrow-SemiBold'),
        url('${SemiBold2}') format('woff2'),
        url('${SemiBold}') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow SemiBold Italic'), local('ArchivoNarrow-SemiBoldItalic'),
        url('${SemiBoldItalic2}') format('woff2'),
        url('${SemiBoldItalic}') format('woff');
    font-weight: 600;
    font-style: italic;
}
`;

const css = `
@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow Bold'), local('ArchivoNarrow-Bold'),
        url('ArchivoNarrow-Bold.woff2') format('woff2'),
        url('ArchivoNarrow-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow Bold Italic'), local('ArchivoNarrow-BoldItalic'),
        url('ArchivoNarrow-BoldItalic.woff2') format('woff2'),
        url('ArchivoNarrow-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow Regular'), local('ArchivoNarrow-Regular'),
        url('ArchivoNarrow-Regular.woff2') format('woff2'),
        url('ArchivoNarrow-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow Italic'), local('ArchivoNarrow-Italic'),
        url('ArchivoNarrow-Italic.woff2') format('woff2'),
        url('ArchivoNarrow-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow Medium'), local('ArchivoNarrow-Medium'),
        url('ArchivoNarrow-Medium.woff2') format('woff2'),
        url('ArchivoNarrow-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow Medium Italic'), local('ArchivoNarrow-MediumItalic'),
        url('ArchivoNarrow-MediumItalic.woff2') format('woff2'),
        url('ArchivoNarrow-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow SemiBold'), local('ArchivoNarrow-SemiBold'),
        url('ArchivoNarrow-SemiBold.woff2') format('woff2'),
        url('ArchivoNarrow-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Archivo Narrow';
    src: local('Archivo Narrow SemiBold Italic'), local('ArchivoNarrow-SemiBoldItalic'),
        url('ArchivoNarrow-SemiBoldItalic.woff2') format('woff2'),
        url('ArchivoNarrow-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
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
  ],
  styles,
  css,
};

export default data;
