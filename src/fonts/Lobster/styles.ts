import { generateData } from '../generateFontFace';
import Regular from './Lobster-Regular.woff';
import Regular2 from './Lobster-Regular.woff2';

const data = generateData('Lobster', {
  regular: [Regular, Regular2],
});

export default data;
