import Bold from './CrimsonText-Bold.woff';
import Bold2 from './CrimsonText-Bold.woff2';
import BoldItalic from './CrimsonText-BoldItalic.woff';
import BoldItalic2 from './CrimsonText-BoldItalic.woff2';
import Italic from './CrimsonText-Italic.woff';
import Italic2 from './CrimsonText-Italic.woff2';
import Regular from './CrimsonText-Regular.woff';
import Regular2 from './CrimsonText-Regular.woff2';
import SemiBold from './CrimsonText-SemiBold.woff';
import SemiBold2 from './CrimsonText-SemiBold.woff2';
import SemiBoldItalic from './CrimsonText-SemiBoldItalic.woff';
import SemiBoldItalic2 from './CrimsonText-SemiBoldItalic.woff2';

const styles = `
@font-face {
    font-family: 'Crimson Text';
    src: local('Crimson Text Bold Italic'), local('CrimsonText-BoldItalic'),
        url('${BoldItalic2}') format('woff2'),
        url('${BoldItalic}') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Crimson Text';
    src: local('Crimson Text Regular'), local('CrimsonText-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Crimson Text';
    src: local('Crimson Text SemiBold Italic'), local('CrimsonText-SemiBoldItalic'),
        url('${SemiBoldItalic2}') format('woff2'),
        url('${SemiBoldItalic}') format('woff');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Crimson Text';
    src: local('Crimson Text Bold'), local('CrimsonText-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Crimson Text';
    src: local('Crimson Text Italic'), local('CrimsonText-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Crimson Text';
    src: local('Crimson Text SemiBold'), local('CrimsonText-SemiBold'),
        url('${SemiBold2}') format('woff2'),
        url('${SemiBold}') format('woff');
    font-weight: 600;
    font-style: normal;
}
`;

const css = `
@font-face {
    font-family: 'Crimson Text';
    src: local('Crimson Text Bold Italic'), local('CrimsonText-BoldItalic'),
        url('CrimsonText-BoldItalic.woff2') format('woff2'),
        url('CrimsonText-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Crimson Text';
    src: local('Crimson Text Regular'), local('CrimsonText-Regular'),
        url('CrimsonText-Regular.woff2') format('woff2'),
        url('CrimsonText-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Crimson Text';
    src: local('Crimson Text SemiBold Italic'), local('CrimsonText-SemiBoldItalic'),
        url('CrimsonText-SemiBoldItalic.woff2') format('woff2'),
        url('CrimsonText-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Crimson Text';
    src: local('Crimson Text Bold'), local('CrimsonText-Bold'),
        url('CrimsonText-Bold.woff2') format('woff2'),
        url('CrimsonText-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Crimson Text';
    src: local('Crimson Text Italic'), local('CrimsonText-Italic'),
        url('CrimsonText-Italic.woff2') format('woff2'),
        url('CrimsonText-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Crimson Text';
    src: local('Crimson Text SemiBold'), local('CrimsonText-SemiBold'),
        url('CrimsonText-SemiBold.woff2') format('woff2'),
        url('CrimsonText-SemiBold.woff') format('woff');
    font-weight: 600;
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
    SemiBold,
    SemiBold2,
    SemiBoldItalic,
    SemiBoldItalic2,
  ],
  css,
  styles,
};

export default data;
