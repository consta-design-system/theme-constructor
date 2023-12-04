import Black from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-Black.woff';
import Black2 from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-Black.woff2';
import Bold from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-Bold.woff';
import Bold2 from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-Bold.woff2';
import ExtraBold from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-ExtraBold.woff';
import ExtraBold2 from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-ExtraBold.woff2';
import ExtraLight from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-ExtraLight.woff';
import ExtraLight2 from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-ExtraLight.woff2';
import Light from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-Light.woff';
import Light2 from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-Light.woff2';
import Medium from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-Medium.woff';
import Medium2 from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-Medium.woff2';
import Regular from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-Regular.woff';
import Regular2 from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-Regular.woff2';
import SemiBold from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-SemiBold.woff';
import SemiBold2 from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-SemiBold.woff2';
import Thin from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-Thin.woff';
import Thin2 from '@consta/uikit/__internal__/src/components/Theme/_font/Inter-Thin.woff2';

import { generateData } from '../generateFontFace';

const data = generateData('Inter', {
  black: [Black, Black2],
  bold: [Bold, Bold2],
  extraBold: [ExtraBold, ExtraBold2],
  extraLight: [ExtraLight, ExtraLight2],
  light: [Light, Light2],
  medium: [Medium, Medium2],
  regular: [Regular, Regular2],
  semiBold: [SemiBold, SemiBold2],
  thin: [Thin, Thin2],
});

export default data;
