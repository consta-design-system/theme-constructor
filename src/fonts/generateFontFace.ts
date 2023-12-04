type Font = [[string, string], [string, string]] | [string, string];
type Fonts = {
  thin?: Font;
  extraLight?: Font;
  light?: Font;
  regular?: Font;
  medium?: Font;
  semiBold?: Font;
  bold?: Font;
  extraBold?: Font;
  black?: Font;
};
type Data = {
  fonts: string[];
  styles: string;
  css: string;
};

const template = (
  family: string,
  src: [string, string],
  weight: string,
  style: string,
) => {
  return `@font-face {
    font-family: '${family}';
    src: url('${src[1]}') format('woff2'),
         url('${src[0]}') format('woff');
    font-weight: ${weight};
    font-style: ${style};
}
`;
};

const isFontWithItalic = (
  font?: Font,
): font is [[string, string], [string, string]] =>
  !!(font && typeof font[0] === 'object');

const isFontWithoutItalic = (font?: Font): font is [string, string] =>
  !!(font && typeof font[0] === 'string');

const getFontFace = (family: string, weight: string, font?: Font): string => {
  if (isFontWithItalic(font)) {
    return (
      template(family, font[0], weight, 'normal') +
      template(family, font[1], weight, 'italic')
    );
  }
  if (isFontWithoutItalic(font)) {
    return template(family, font, weight, 'normal');
  }
  return '';
};

export const generateFontFace = (family: string, fonts: Fonts) => {
  return (
    getFontFace(family, '100', fonts.thin) +
    getFontFace(family, '200', fonts.extraLight) +
    getFontFace(family, '300', fonts.light) +
    getFontFace(family, '400', fonts.regular) +
    getFontFace(family, 'normal', fonts.regular) +
    getFontFace(family, '500', fonts.medium) +
    getFontFace(family, '600', fonts.semiBold) +
    getFontFace(family, '700', fonts.bold) +
    getFontFace(family, 'bold', fonts.bold) +
    getFontFace(family, '800', fonts.extraBold) +
    getFontFace(family, '900', fonts.black)
  );
};

const convertFontName = (name: string) => {
  const splited = name.split('/');
  const arr = splited[splited.length - 1].split('.');

  return `${arr[0].split('__')[0]}.${arr[1]}`;
};

export const generateData = (family: string, fonts: Fonts): Data => {
  const keys = Object.keys(fonts) as (keyof Fonts)[];
  const fontsForCss: Fonts = {};
  const array: string[] = [];

  for (let index = 0; index < keys.length; index++) {
    const key = keys[index];
    const value = fonts[keys[index]];

    if (isFontWithItalic(value)) {
      fontsForCss[key] = [
        [convertFontName(value[0][0]), convertFontName(value[0][1])],
        [convertFontName(value[1][0]), convertFontName(value[1][1])],
      ];
      array.push(value[0][0], value[0][1], value[1][0], value[1][1]);
    }
    if (isFontWithoutItalic(value)) {
      fontsForCss[key] = [convertFontName(value[0]), convertFontName(value[0])];
      array.push(value[0], value[1]);
    }
  }

  return {
    fonts: array,
    styles: generateFontFace(family, fonts),
    css: generateFontFace(family, fontsForCss),
  };
};
