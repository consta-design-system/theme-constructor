import Black from './PlayfairDisplay-Black.woff';
import Black2 from './PlayfairDisplay-Black.woff2';
import BlackItalic from './PlayfairDisplay-BlackItalic.woff';
import BlackItalic2 from './PlayfairDisplay-BlackItalic.woff2';
import Bold from './PlayfairDisplay-Bold.woff';
import Bold2 from './PlayfairDisplay-Bold.woff2';
import BoldItalic from './PlayfairDisplay-BoldItalic.woff';
import BoldItalic2 from './PlayfairDisplay-BoldItalic.woff2';
import Italic from './PlayfairDisplay-Italic.woff';
import Italic2 from './PlayfairDisplay-Italic.woff2';
import Regular from './PlayfairDisplay-Regular.woff';
import Regular2 from './PlayfairDisplay-Regular.woff2';

const styles = `
@font-face {
    font-family: 'Playfair Display';
    src: local('Playfair Display Black'), local('PlayfairDisplay-Black'),
        url('${Black2}') format('woff2'),
        url('${Black}') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Playfair Display';
    src: local('Playfair Display Regular'), local('PlayfairDisplay-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Playfair Display';
    src: local('Playfair Display Bold'), local('PlayfairDisplay-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Playfair Display';
    src: local('Playfair Display Italic'), local('PlayfairDisplay-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Playfair Display';
    src: local('Playfair Display Black Italic'), local('PlayfairDisplay-BlackItalic'),
        url('${BlackItalic2}') format('woff2'),
        url('${BlackItalic}') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Playfair Display';
    src: local('Playfair Display Bold Italic'), local('PlayfairDisplay-BoldItalic'),
        url('${BoldItalic2}') format('woff2'),
        url('${BoldItalic}') format('woff');
    font-weight: bold;
    font-style: italic;
}
`;

const css = `
@font-face {
    font-family: 'Playfair Display';
    src: local('Playfair Display Black'), local('PlayfairDisplay-Black'),
        url('PlayfairDisplay-Black.woff2') format('woff2'),
        url('PlayfairDisplay-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Playfair Display';
    src: local('Playfair Display Regular'), local('PlayfairDisplay-Regular'),
        url('PlayfairDisplay-Regular.woff2') format('woff2'),
        url('PlayfairDisplay-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Playfair Display';
    src: local('Playfair Display Bold'), local('PlayfairDisplay-Bold'),
        url('PlayfairDisplay-Bold.woff2') format('woff2'),
        url('PlayfairDisplay-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Playfair Display';
    src: local('Playfair Display Italic'), local('PlayfairDisplay-Italic'),
        url('PlayfairDisplay-Italic.woff2') format('woff2'),
        url('PlayfairDisplay-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Playfair Display';
    src: local('Playfair Display Black Italic'), local('PlayfairDisplay-BlackItalic'),
        url('PlayfairDisplay-BlackItalic.woff2') format('woff2'),
        url('PlayfairDisplay-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Playfair Display';
    src: local('Playfair Display Bold Italic'), local('PlayfairDisplay-BoldItalic'),
        url('PlayfairDisplay-BoldItalic.woff2') format('woff2'),
        url('PlayfairDisplay-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}
`;

const data = {
  fonts: [
    Black,
    Black2,
    BlackItalic,
    BlackItalic2,
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
