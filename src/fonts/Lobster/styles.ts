import Regular from './Lobster-Regular.woff';
import Regular2 from './Lobster-Regular.woff2';

const styles = `
@font-face {
    font-family: 'Lobster';
    src: local('Lobster Regular'), local('Lobster-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

const css = `
@font-face {
    font-family: 'Lobster';
    src: local('Lobster Regular'), local('Lobster-Regular'),
        url('Lobster-Regular.woff2') format('woff2'),
        url('Lobster-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;

const data = {
  fonts: [Regular, Regular2],
  styles,
  css,
};

export default data;
