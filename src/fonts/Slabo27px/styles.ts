import Regular from './Slabo27px-Regular.woff';
import Regular2 from './Slabo27px-Regular.woff2';

const styles = `
@font-face {
    font-family: 'Slabo 27px';
    src: local('Slabo 27px'), local('Slabo27px-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

const css = `
@font-face {
    font-family: 'Slabo 27px';
    src: local('Slabo 27px'), local('Slabo27px-Regular'),
        url('Slabo27px-Regular.woff2') format('woff2'),
        url('Slabo27px-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

const data = {
  fonts: [Regular, Regular2],
  css,
  styles,
};

export default data;
