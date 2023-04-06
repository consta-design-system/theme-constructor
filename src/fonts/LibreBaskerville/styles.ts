import Bold from './LibreBaskerville-Bold.woff';
import Bold2 from './LibreBaskerville-Bold.woff2';
import Italic from './LibreBaskerville-Italic.woff';
import Italic2 from './LibreBaskerville-Italic.woff2';
import Regular from './LibreBaskerville-Regular.woff';
import Regular2 from './LibreBaskerville-Regular.woff2';

const styles = `
@font-face {
    font-family: 'Libre Baskerville';
    src: local('Libre Baskerville Italic'), local('LibreBaskerville-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Libre Baskerville';
    src: local('Libre Baskerville'), local('LibreBaskerville-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Libre Baskerville';
    src: local('Libre Baskerville Bold'), local('LibreBaskerville-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}
`;

const css = `
@font-face {
    font-family: 'Libre Baskerville';
    src: local('Libre Baskerville Italic'), local('LibreBaskerville-Italic'),
        url('LibreBaskerville-Italic.woff2') format('woff2'),
        url('LibreBaskerville-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Libre Baskerville';
    src: local('Libre Baskerville'), local('LibreBaskerville-Regular'),
        url('LibreBaskerville-Regular.woff2') format('woff2'),
        url('LibreBaskerville-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Libre Baskerville';
    src: local('Libre Baskerville Bold'), local('LibreBaskerville-Bold'),
        url('LibreBaskerville-Bold.woff2') format('woff2'),
        url('LibreBaskerville-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}
`;

const data = {
  fonts: [Italic, Italic2, Regular, Regular2, Bold, Bold2],
  css,
  styles,
};

export default data;
