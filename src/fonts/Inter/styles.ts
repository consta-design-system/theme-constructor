import Black from './Inter-Black.woff';
import Black2 from './Inter-Black.woff2';
import Bold from './Inter-Bold.woff';
import Bold2 from './Inter-Bold.woff2';
import ExtraBold from './Inter-ExtraBold.woff';
import ExtraBold2 from './Inter-ExtraBold.woff2';
import ExtraLight from './Inter-ExtraLight.woff';
import ExtraLight2 from './Inter-ExtraLight.woff2';
import Light from './Inter-Light.woff';
import Light2 from './Inter-Light.woff2';
import Medium from './Inter-Medium.woff';
import Medium2 from './Inter-Medium.woff2';
import Regular from './Inter-Regular.woff';
import Regular2 from './Inter-Regular.woff2';
import SemiBold from './Inter-SemiBold.woff';
import SemiBold2 from './Inter-SemiBold.woff2';
import Thin from './Inter-Thin.woff';
import Thin2 from './Inter-Thin.woff2';

const styles = `
/* Thin 100 */

@font-face {
  font-family: 'Inter';
  src:
    url('${Thin2}') format('woff2'),
    url('${Thin}') format('woff');
  font-weight: 100;
  font-style: normal;
}
  
/* ExtraLight 200 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('${ExtraLight2}') format('woff2'),
    url('${ExtraLight}') format('woff');
  font-weight: 200;
  font-style: normal;
}
  
/* Light 300 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('${Light2}') format('woff2'),
    url('${Light}') format('woff');
  font-weight: 300;
  font-style: normal;
}
  
/* Regular 400 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('${Regular2}') format('woff2'),
    url('${Regular}') format('woff');
  font-weight: normal;
  font-style: normal;
}
  
 @font-face {
  font-family: 'Inter';
  src:
    url('${Regular2}') format('woff2'),
    url('${Regular}') format('woff');
  font-weight: 400;
  font-style: normal;
}
  
/* Medium 500 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('${Medium2}') format('woff2'),
    url('${Medium}') format('woff');
  font-weight: 500;
  font-style: normal;
}
  
/* SemiBold 600 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('${SemiBold2}') format('woff2'),
    url('${SemiBold}') format('woff');
  font-weight: 600;
  font-style: normal;
}
  
/* Bold 700 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('${Bold2}') format('woff2'),
    url('${Bold}') format('woff');
  font-weight: 700;
  font-style: normal;
}
  
@font-face {
  font-family: 'Inter';
  src:
    url('${Bold2}') format('woff2'),
    url('${Bold}') format('woff');
  font-weight: bold;
  font-style: normal;
}
  
/* ExtraBold 800 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('${ExtraBold2}') format('woff2'),
    url('${ExtraBold}') format('woff');
  font-weight: 800;
  font-style: normal;
}
  
/* Black 900 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('${Black2}') format('woff2'),
    url('${Black}') format('woff');
  font-weight: 900;
  font-style: normal;
}`;

const css = `
/* Thin 100 */

@font-face {
  font-family: 'Inter';
  src:
    url('Inter-Thin.woff2') format('woff2'),
    url('Inter-Thin.woff') format('woff');
  font-weight: 100;
  font-style: normal;
}
  
/* ExtraLight 200 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('Inter-ExtraLight.woff2') format('woff2'),
    url('Inter-ExtraLight.woff') format('woff');
  font-weight: 200;
  font-style: normal;
}
  
/* Light 300 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('Inter-Light.woff2') format('woff2'),
    url('Inter-Light.woff') format('woff');
  font-weight: 300;
  font-style: normal;
}
  
/* Regular 400 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('Inter-Regular.woff2') format('woff2'),
    url('Inter-Regular.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}
  
@font-face {
  font-family: 'Inter';
  src:
    url('Inter-Regular.woff2') format('woff2'),
    url('Inter-Regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
}
  
/* Medium 500 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('Inter-Medium.woff2') format('woff2'),
    url('Inter-Medium.woff') format('woff');
  font-weight: 500;
  font-style: normal;
}
  
/* SemiBold 600 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('Inter-SemiBold.woff2') format('woff2'),
    url('Inter-SemiBold.woff') format('woff');
  font-weight: 600;
  font-style: normal;
}
  
/* Bold 700 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('Inter-Bold.woff2') format('woff2'),
    url('Inter-Bold.woff') format('woff');
  font-weight: 700;
  font-style: normal;
}
  
@font-face {
  font-family: 'Inter';
  src:
    url('Inter-Bold.woff2') format('woff2'),
    url('Inter-Bold.woff') format('woff');
  font-weight: bold;
  font-style: normal;
}
  
/* ExtraBold 800 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('Inter-ExtraBold.woff2') format('woff2'),
    url('Inter-ExtraBold.woff') format('woff');
  font-weight: 800;
  font-style: normal;
}
  
/* Black 900 */
  
@font-face {
  font-family: 'Inter';
  src:
    url('Inter-Black.woff2') format('woff2'),
    url('Inter-Black.woff') format('woff');
  font-weight: 900;
  font-style: normal;
}
  `;

const data = {
  fonts: [
    Black,
    Black2,
    Bold,
    Bold2,
    ExtraBold,
    ExtraBold2,
    ExtraLight,
    ExtraLight2,
    Light,
    Light2,
    Medium,
    Medium2,
    Regular,
    Regular2,
    SemiBold,
    SemiBold2,
    Thin,
    Thin2,
  ],
  styles,
  css,
};

export default data;
