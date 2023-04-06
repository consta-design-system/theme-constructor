import Bold from './Cabin-Bold.woff';
import Bold2 from './Cabin-Bold.woff2';
import BoldItalic from './Cabin-BoldItalic.woff';
import BoldItalic2 from './Cabin-BoldItalic.woff2';
import Italic from './Cabin-Italic.woff';
import Italic2 from './Cabin-Italic.woff2';
import Medium from './Cabin-Medium.woff';
import Medium2 from './Cabin-Medium.woff2';
import MediumItalic from './Cabin-MediumItalic.woff';
import MediumItalic2 from './Cabin-MediumItalic.woff2';
import Regular from './Cabin-Regular.woff';
import Regular2 from './Cabin-Regular.woff2';
import SemiBold from './Cabin-SemiBold.woff';
import SemiBold2 from './Cabin-SemiBold.woff2';
import SemiBoldItalic from './Cabin-SemiBoldItalic.woff';
import SemiBoldItalic2 from './Cabin-SemiBoldItalic.woff2';

const styles = `@font-face {
    font-family: 'Cabin';
    src: local('Cabin SemiBold'), local('Cabin-SemiBold'),
        url('${SemiBold2}') format('woff2'),
        url('${SemiBold}') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Cabin';
    src: local('Cabin Bold'), local('Cabin-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Cabin';
    src: local('Cabin Italic'), local('Cabin-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Cabin';
    src: local('Cabin Regular'), local('Cabin-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Cabin';
    src: local('Cabin Medium'), local('Cabin-Medium'),
        url('${Medium2}') format('woff2'),
        url('${Medium}') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Cabin';
    src: local('Cabin Bold Italic'), local('Cabin-BoldItalic'),
        url('${BoldItalic2}') format('woff2'),
        url('${BoldItalic}') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Cabin';
    src: local('Cabin Medium Italic'), local('Cabin-MediumItalic'),
        url('${MediumItalic2}') format('woff2'),
        url('${MediumItalic}') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Cabin';
    src: local('Cabin SemiBold Italic'), local('Cabin-SemiBoldItalic'),
        url('${SemiBoldItalic2}') format('woff2'),
        url('${SemiBoldItalic}') format('woff');
    font-weight: 600;
    font-style: italic;
}
`;

const css = `
@font-face {
    font-family: 'Cabin';
    src: local('Cabin SemiBold'), local('Cabin-SemiBold'),
        url('Cabin-SemiBold.woff2') format('woff2'),
        url('Cabin-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Cabin';
    src: local('Cabin Bold'), local('Cabin-Bold'),
        url('Cabin-Bold.woff2') format('woff2'),
        url('Cabin-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Cabin';
    src: local('Cabin Italic'), local('Cabin-Italic'),
        url('Cabin-Italic.woff2') format('woff2'),
        url('Cabin-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Cabin';
    src: local('Cabin Regular'), local('Cabin-Regular'),
        url('Cabin-Regular.woff2') format('woff2'),
        url('Cabin-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Cabin';
    src: local('Cabin Medium'), local('Cabin-Medium'),
        url('Cabin-Medium.woff2') format('woff2'),
        url('Cabin-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
}

@font-face {
    font-family: 'Cabin';
    src: local('Cabin Bold Italic'), local('Cabin-BoldItalic'),
        url('Cabin-BoldItalic.woff2') format('woff2'),
        url('Cabin-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Cabin';
    src: local('Cabin Medium Italic'), local('Cabin-MediumItalic'),
        url('Cabin-MediumItalic.woff2') format('woff2'),
        url('Cabin-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Cabin';
    src: local('Cabin SemiBold Italic'), local('Cabin-SemiBoldItalic'),
        url('Cabin-SemiBoldItalic.woff2') format('woff2'),
        url('Cabin-SemiBoldItalic.woff') format('woff');
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
