import Black from './Lato-Black.woff';
import Black2 from './Lato-Black.woff2';
import BlackItalic from './Lato-BlackItalic.woff';
import BlackItalic2 from './Lato-BlackItalic.woff2';
import Bold from './Lato-Bold.woff';
import Bold2 from './Lato-Bold.woff2';
import BoldItalic from './Lato-BoldItalic.woff';
import BoldItalic2 from './Lato-BoldItalic.woff2';
import Hairline from './Lato-Hairline.woff';
import Hairline2 from './Lato-Hairline.woff2';
import HairlineItalic from './Lato-HairlineItalic.woff';
import HairlineItalic2 from './Lato-HairlineItalic.woff2';
import Heavy from './Lato-Heavy.woff';
import Heavy2 from './Lato-Heavy.woff2';
import HeavyItalic from './Lato-HeavyItalic.woff';
import HeavyItalic2 from './Lato-HeavyItalic.woff2';
import Italic from './Lato-Italic.woff';
import Italic2 from './Lato-Italic.woff2';
import Light from './Lato-Light.woff';
import Light2 from './Lato-Light.woff2';
import LightItalic from './Lato-LightItalic.woff';
import LightItalic2 from './Lato-LightItalic.woff2';
import Medium from './Lato-Medium.woff';
import Medium2 from './Lato-Medium.woff2';
import MediumItalic from './Lato-MediumItalic.woff';
import MediumItalic2 from './Lato-MediumItalic.woff2';
import Regular from './Lato-Regular.woff';
import Regular2 from './Lato-Regular.woff2';
import Semibold from './Lato-Semibold.woff';
import Semibold2 from './Lato-Semibold.woff2';
import SemiboldItalic from './Lato-SemiboldItalic.woff';
import SemiboldItalic2 from './Lato-SemiboldItalic.woff2';
import Thin from './Lato-Thin.woff';
import Thin2 from './Lato-Thin.woff2';
import ThinItalic from './Lato-ThinItalic.woff';
import ThinItalic2 from './Lato-ThinItalic.woff2';

const styles = `
@font-face {
    font-family: 'Lato';
    src: local('Lato Light Italic'), local('Lato-LightItalic'),
        url('${LightItalic2}') format('woff2'),
        url('${LightItalic}') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Black'), local('Lato-Black'),
        url('${Black2}') format('woff2'),
        url('${Black}') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Heavy Italic'), local('Lato-HeavyItalic'),
        url('${HeavyItalic2}') format('woff2'),
        url('${HeavyItalic}') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Lato Hairline';
    src: local('Lato Hairline'), local('Lato-Hairline'),
        url('${Hairline2}') format('woff2'),
        url('${Hairline}') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Semibold'), local('Lato-Semibold'),
        url('${Semibold2}') format('woff2'),
        url('${Semibold}') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Heavy'), local('Lato-Heavy'),
        url('${Heavy2}') format('woff2'),
        url('${Heavy}') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Medium Italic'), local('Lato-MediumItalic'),
        url('${MediumItalic2}') format('woff2'),
        url('${MediumItalic}') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Light'), local('Lato-Light'),
        url('${Light2}') format('woff2'),
        url('${Light}') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Bold'), local('Lato-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Bold Italic'), local('Lato-BoldItalic'),
        url('${BoldItalic2}') format('woff2'),
        url('${BoldItalic}') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Regular'), local('Lato-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Lato Hairline';
    src: local('Lato Hairline Italic'), local('Lato-HairlineItalic'),
        url('${HairlineItalic2}') format('woff2'),
        url('${HairlineItalic}') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Semibold Italic'), local('Lato-SemiboldItalic'),
        url('${SemiboldItalic2}') format('woff2'),
        url('${SemiboldItalic}') format('woff');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Black Italic'), local('Lato-BlackItalic'),
        url('${BlackItalic2}') format('woff2'),
        url('${BlackItalic}') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Italic'), local('Lato-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Thin Italic'), local('Lato-ThinItalic'),
        url('${ThinItalic2}') format('woff2'),
        url('${ThinItalic}') format('woff');
    font-weight: 100;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Thin'), local('Lato-Thin'),
        url('${Thin2}') format('woff2'),
        url('${Thin}') format('woff');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Medium'), local('Lato-Medium'),
        url('${Medium2}') format('woff2'),
        url('${Medium}') format('woff');
    font-weight: 500;
    font-style: normal;
}
`;

const css = `
@font-face {
    font-family: 'Lato';
    src: local('Lato Light Italic'), local('Lato-LightItalic'),
        url('Lato-LightItalic.woff2') format('woff2'),
        url('Lato-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Black'), local('Lato-Black'),
        url('Lato-Black.woff2') format('woff2'),
        url('Lato-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Heavy Italic'), local('Lato-HeavyItalic'),
        url('Lato-HeavyItalic.woff2') format('woff2'),
        url('Lato-HeavyItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Lato Hairline';
    src: local('Lato Hairline'), local('Lato-Hairline'),
        url('Lato-Hairline.woff2') format('woff2'),
        url('Lato-Hairline.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Semibold'), local('Lato-Semibold'),
        url('Lato-Semibold.woff2') format('woff2'),
        url('Lato-Semibold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Heavy'), local('Lato-Heavy'),
        url('Lato-Heavy.woff2') format('woff2'),
        url('Lato-Heavy.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Medium Italic'), local('Lato-MediumItalic'),
        url('Lato-MediumItalic.woff2') format('woff2'),
        url('Lato-MediumItalic.woff') format('woff');
    font-weight: 500;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Light'), local('Lato-Light'),
        url('Lato-Light.woff2') format('woff2'),
        url('Lato-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Bold'), local('Lato-Bold'),
        url('Lato-Bold.woff2') format('woff2'),
        url('Lato-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Bold Italic'), local('Lato-BoldItalic'),
        url('Lato-BoldItalic.woff2') format('woff2'),
        url('Lato-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Regular'), local('Lato-Regular'),
        url('Lato-Regular.woff2') format('woff2'),
        url('Lato-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Lato Hairline';
    src: local('Lato Hairline Italic'), local('Lato-HairlineItalic'),
        url('Lato-HairlineItalic.woff2') format('woff2'),
        url('Lato-HairlineItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Semibold Italic'), local('Lato-SemiboldItalic'),
        url('Lato-SemiboldItalic.woff2') format('woff2'),
        url('Lato-SemiboldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Black Italic'), local('Lato-BlackItalic'),
        url('Lato-BlackItalic.woff2') format('woff2'),
        url('Lato-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Italic'), local('Lato-Italic'),
        url('Lato-Italic.woff2') format('woff2'),
        url('Lato-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Thin Italic'), local('Lato-ThinItalic'),
        url('Lato-ThinItalic.woff2') format('woff2'),
        url('Lato-ThinItalic.woff') format('woff');
    font-weight: 100;
    font-style: italic;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Thin'), local('Lato-Thin'),
        url('Lato-Thin.woff2') format('woff2'),
        url('Lato-Thin.woff') format('woff');
    font-weight: 100;
    font-style: normal;
}

@font-face {
    font-family: 'Lato';
    src: local('Lato Medium'), local('Lato-Medium'),
        url('Lato-Medium.woff2') format('woff2'),
        url('Lato-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
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
    Hairline,
    Hairline2,
    HairlineItalic,
    HairlineItalic2,
    Heavy,
    Heavy2,
    HeavyItalic,
    HeavyItalic2,
    Italic,
    Italic2,
    Light,
    Light2,
    LightItalic,
    LightItalic2,
    Medium,
    Medium2,
    Regular,
    Regular2,
    Semibold,
    Semibold2,
    SemiboldItalic,
    SemiboldItalic2,
    Thin,
    Thin2,
    ThinItalic,
    ThinItalic2,
  ],
  styles,
  css,
};

export default data;
