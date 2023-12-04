import AlegreyaSansStyles from '##/fonts/AlegreyaSans/styles';
import ArchivoNarrowStyles from '##/fonts/ArchivoNarrow/styles';
import BitterStyles from '##/fonts/Bitter/styles';
import CabinStyles from '##/fonts/Cabin/styles';
import CrimsonTextStyles from '##/fonts/CrimsonText/styles';
import HeeboStyles from '##/fonts/Heebo/styles';
import InterStyles from '##/fonts/Inter/styles';
import LatoStyles from '##/fonts/Lato/styles';
import LibreBaskervilleStyles from '##/fonts/LibreBaskerville/styles';
import LobsetStyles from '##/fonts/Lobster/styles';
import MonsterratStyles from '##/fonts/Montserrat/styles';
import OpenSansStyles from '##/fonts/OpenSans/styles';
import OswaldStyles from '##/fonts/Oswald/styles';
import PlayfairDisplayStyles from '##/fonts/PlayfairDisplay/styles';
import PTSansStyles from '##/fonts/PTSans/styles';
import RalewayStyles from '##/fonts/Raleway/styles';
import RobotoStyles from '##/fonts/Roboto/styles';
import RobotoCondensedStyles from '##/fonts/RobotoCondensed/styles';
import Slabo27pxStyles from '##/fonts/Slabo27px/styles';
import SourceSansProStyles from '##/fonts/SourceSansPro/styles';
import UbuntuStyles from '##/fonts/Ubuntu/styles';

import { getThemeFileName } from '.';

const fontsMap: Record<
  string,
  {
    fonts: string[];
    css: string;
    styles: string;
  }
> = {
  'Roboto': RobotoStyles,
  'Open Sans': OpenSansStyles,
  'Lato': LatoStyles,
  'Oswald': OswaldStyles,
  'Slabo 27px': Slabo27pxStyles,
  'Roboto Condensed': RobotoCondensedStyles,
  'Monsterrat': MonsterratStyles,
  'Source Sans Pro': SourceSansProStyles,
  'Raleway': RalewayStyles,
  'PT Sans': PTSansStyles,
  'Playfair Display': PlayfairDisplayStyles,
  'Bitter': BitterStyles,
  'Libre Baskerville': LibreBaskervilleStyles,
  'Archivo Narrow': ArchivoNarrowStyles,
  'Alegreya Sans': AlegreyaSansStyles,
  'Ubuntu': UbuntuStyles,
  'Crimson Text': CrimsonTextStyles,
  'Heebo': HeeboStyles,
  'Cabin': CabinStyles,
  'Lobster': LobsetStyles,
  'Inter': InterStyles,
};

export const getFontCSS = (
  presetName: string,
  font: string,
  type: 'save' | 'show',
) => {
  const css = `${
    fontsMap[font][type === 'save' ? 'css' : 'styles']
  }\n\n.${getThemeFileName(presetName, 'font')} {
  --font-primary: '${font}', -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  --font-mono: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  font-family: var(--font-primary);
}`;

  return css;
};
export const getFontJson = (font: string) => {
  return JSON.stringify(
    {
      '--font-primary': `'${font}',-apple-system,BlinkMacSystemFont,'Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif`,
      '--font-mono':
        "source-code-pro,Menlo,Monaco,Consolas,'Courier New',monospace",
      'font-family': 'var(--font-primary)',
    },
    null,
    2,
  );
};

const convertFontName = (name: string) => {
  const splited = name.split('/');
  const arr = splited[splited.length - 1].split('.');

  return `${arr[0].split('__')[0]}.${arr[1]}`;
};

export const loadFontsFile = async (font: string) => {
  const arr: Array<{ name: string; data: Blob }> = [];
  const { fonts } = fontsMap[font];
  await Promise.all(
    fonts.map((font) =>
      fetch(font).then(async (res) => {
        const blob = await res.blob();
        arr.push({ data: blob, name: convertFontName(font) });
      }),
    ),
  );
  return arr;
};
