import Black from './SourceSansPro-Black.woff';
import Black2 from './SourceSansPro-Black.woff2';
import BlackItalic from './SourceSansPro-BlackItalic.woff';
import BlackItalic2 from './SourceSansPro-BlackItalic.woff2';
import Bold from './SourceSansPro-Bold.woff';
import Bold2 from './SourceSansPro-Bold.woff2';
import BoldItalic from './SourceSansPro-BoldItalic.woff';
import BoldItalic2 from './SourceSansPro-BoldItalic.woff2';
import ExtraLight from './SourceSansPro-ExtraLight.woff';
import ExtraLight2 from './SourceSansPro-ExtraLight.woff2';
import ExtraLightItalic from './SourceSansPro-ExtraLightItalic.woff';
import ExtraLightItalic2 from './SourceSansPro-ExtraLightItalic.woff2';
import Italic from './SourceSansPro-Italic.woff';
import Italic2 from './SourceSansPro-Italic.woff2';
import Light from './SourceSansPro-Light.woff';
import Light2 from './SourceSansPro-Light.woff2';
import LightItalic from './SourceSansPro-LightItalic.woff';
import LightItalic2 from './SourceSansPro-LightItalic.woff2';
import Regular from './SourceSansPro-Regular.woff';
import Regular2 from './SourceSansPro-Regular.woff2';
import SemiBold from './SourceSansPro-SemiBold.woff';
import SemiBold2 from './SourceSansPro-SemiBold.woff2';
import SemiBoldItalic from './SourceSansPro-SemiBoldItalic.woff';
import SemiBoldItalic2 from './SourceSansPro-SemiBoldItalic.woff2';

const styles = `
@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'),
        url('${Bold2}') format('woff2'),
        url('${Bold}') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro ExtraLight Italic'), local('SourceSansPro-ExtraLightItalic'),
        url('${ExtraLightItalic2}') format('woff2'),
        url('${ExtraLightItalic}') format('woff');
    font-weight: 200;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Light'), local('SourceSansPro-Light'),
        url('${Light2}') format('woff2'),
        url('${Light}') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Bold Italic'), local('SourceSansPro-BoldItalic'),
        url('${BoldItalic2}') format('woff2'),
        url('${BoldItalic}') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Light Italic'), local('SourceSansPro-LightItalic'),
        url('${LightItalic2}') format('woff2'),
        url('${LightItalic}') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Black'), local('SourceSansPro-Black'),
        url('${Black2}') format('woff2'),
        url('${Black}') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
        url('${Regular2}') format('woff2'),
        url('${Regular}') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro SemiBold'), local('SourceSansPro-SemiBold'),
        url('${SemiBold2}') format('woff2'),
        url('${SemiBold}') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Italic'), local('SourceSansPro-Italic'),
        url('${Italic2}') format('woff2'),
        url('${Italic}') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro SemiBold Italic'), local('SourceSansPro-SemiBoldItalic'),
        url('${SemiBoldItalic2}') format('woff2'),
        url('${SemiBoldItalic}') format('woff');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Black Italic'), local('SourceSansPro-BlackItalic'),
        url('${BlackItalic2}') format('woff2'),
        url('${BlackItalic}') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro ExtraLight'), local('SourceSansPro-ExtraLight'),
        url('${ExtraLight2}') format('woff2'),
        url('${ExtraLight}') format('woff');
    font-weight: 200;
    font-style: normal;
}
`;

const css = `
@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'),
        url('SourceSansPro-Bold.woff2') format('woff2'),
        url('SourceSansPro-Bold.woff') format('woff');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro ExtraLight Italic'), local('SourceSansPro-ExtraLightItalic'),
        url('SourceSansPro-ExtraLightItalic.woff2') format('woff2'),
        url('SourceSansPro-ExtraLightItalic.woff') format('woff');
    font-weight: 200;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Light'), local('SourceSansPro-Light'),
        url('SourceSansPro-Light.woff2') format('woff2'),
        url('SourceSansPro-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Bold Italic'), local('SourceSansPro-BoldItalic'),
        url('SourceSansPro-BoldItalic.woff2') format('woff2'),
        url('SourceSansPro-BoldItalic.woff') format('woff');
    font-weight: bold;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Light Italic'), local('SourceSansPro-LightItalic'),
        url('SourceSansPro-LightItalic.woff2') format('woff2'),
        url('SourceSansPro-LightItalic.woff') format('woff');
    font-weight: 300;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Black'), local('SourceSansPro-Black'),
        url('SourceSansPro-Black.woff2') format('woff2'),
        url('SourceSansPro-Black.woff') format('woff');
    font-weight: 900;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
        url('SourceSansPro-Regular.woff2') format('woff2'),
        url('SourceSansPro-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro SemiBold'), local('SourceSansPro-SemiBold'),
        url('SourceSansPro-SemiBold.woff2') format('woff2'),
        url('SourceSansPro-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Italic'), local('SourceSansPro-Italic'),
        url('SourceSansPro-Italic.woff2') format('woff2'),
        url('SourceSansPro-Italic.woff') format('woff');
    font-weight: normal;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro SemiBold Italic'), local('SourceSansPro-SemiBoldItalic'),
        url('SourceSansPro-SemiBoldItalic.woff2') format('woff2'),
        url('SourceSansPro-SemiBoldItalic.woff') format('woff');
    font-weight: 600;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro Black Italic'), local('SourceSansPro-BlackItalic'),
        url('SourceSansPro-BlackItalic.woff2') format('woff2'),
        url('SourceSansPro-BlackItalic.woff') format('woff');
    font-weight: 900;
    font-style: italic;
}

@font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro ExtraLight'), local('SourceSansPro-ExtraLight'),
        url('SourceSansPro-ExtraLight.woff2') format('woff2'),
        url('SourceSansPro-ExtraLight.woff') format('woff');
    font-weight: 200;
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
    ExtraLight,
    ExtraLight2,
    ExtraLightItalic,
    ExtraLightItalic2,
    Italic,
    Italic2,
    Light,
    Light2,
    LightItalic,
    LightItalic2,
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
