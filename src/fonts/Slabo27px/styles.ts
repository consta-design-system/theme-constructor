import { generateData } from '../generateFontFace';
import Regular from './Slabo27px-Regular.woff';
import Regular2 from './Slabo27px-Regular.woff2';

const data = generateData('Slabo 27px', { regular: [Regular, Regular2] });

export default data;
