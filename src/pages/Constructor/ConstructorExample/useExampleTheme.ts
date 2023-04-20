import { ThemePreset } from '@consta/uikit/Theme';
import { useAtom } from '@reatom/npm-react';
import { useMemo } from 'react';

import { getCalculatedColorCSS } from '##/hooks/useSave/helpers/color';
import { getControlCSS } from '##/hooks/useSave/helpers/controls';
import { getFontCSS } from '##/hooks/useSave/helpers/font';
import { getShadowCSS } from '##/hooks/useSave/helpers/shadow';
import { getSizeCSS } from '##/hooks/useSave/helpers/size';
import { getSpaceCSS } from '##/hooks/useSave/helpers/space';
import { toCapitalize, toTranslit } from '##/hooks/useSave/helpers/transliter';
import { colorDarkAtom, colorLightAtom } from '##/modules/colors';
import {
  fontAtom,
  lineHeightTermAtom,
  textSizeTermAtom,
} from '##/modules/font';
import { radiusAtom } from '##/modules/radius';
import {
  shadowDarkColorsAtom,
  shadowLightColorsAtom,
  shadowOptionsAtom,
} from '##/modules/shadow';
import { spaceFactorAtom } from '##/modules/space';
import { themeAtom } from '##/modules/theme';
import {
  calculateLineHeights,
  calculateSizes,
  calculateSpaces,
} from '##/utils/theme/calculators';

const EXAMPLE_PRESET_NAME = 'ExampleTheme';

export const useExampleTheme = () => {
  const [radius] = useAtom(radiusAtom);
  const [size] = useAtom(textSizeTermAtom);
  const [lineHeight] = useAtom(lineHeightTermAtom);
  const [font] = useAtom(fontAtom);
  const [space] = useAtom(spaceFactorAtom);
  const [colorsLight] = useAtom(colorLightAtom);
  const [colorsDark] = useAtom(colorDarkAtom);
  const [shadowParams] = useAtom(shadowOptionsAtom);
  const [shadowLightColors] = useAtom(shadowLightColorsAtom);
  const [shadowDarkColors] = useAtom(shadowDarkColorsAtom);

  const [theme] = useAtom(themeAtom);

  const type = theme.color.primary === 'gpnDefault' ? 'default' : 'dark';
  const invertType = type === 'default' ? 'dark' : 'default';

  const presetName = toTranslit(EXAMPLE_PRESET_NAME);

  const controlCss = useMemo(() => getControlCSS(presetName, radius), [radius]);
  const fontCss = useMemo(() => getFontCSS(presetName, font, 'show'), [font]);
  const sizeCss = useMemo(
    () =>
      getSizeCSS(
        presetName,
        calculateSizes(size),
        calculateLineHeights(lineHeight),
      ),
    [size, lineHeight],
  );
  const spaceCss = useMemo(
    () => getSpaceCSS(presetName, calculateSpaces(space)),
    [space],
  );
  const colorsLightCss = useMemo(
    () =>
      getCalculatedColorCSS(
        presetName,
        'default',
        colorsLight,
        shadowLightColors,
      ),
    [colorsLight, shadowLightColors],
  );
  const colorsDarkCss = useMemo(
    () =>
      getCalculatedColorCSS(presetName, 'dark', colorsDark, shadowDarkColors),
    [colorsDark, shadowDarkColors],
  );
  const shadowCss = useMemo(
    () => getShadowCSS(presetName, shadowParams),
    [shadowParams],
  );

  const css = useMemo(() => {
    return [
      colorsLightCss,
      colorsDarkCss,
      fontCss,
      sizeCss,
      spaceCss,
      shadowCss,
      controlCss,
    ].join('\n\n');
  }, [
    controlCss,
    fontCss,
    sizeCss,
    spaceCss,
    colorsLightCss,
    colorsDarkCss,
    shadowCss,
  ]);

  const preset: ThemePreset = useMemo(() => {
    return {
      color: {
        primary: `${presetName}${toCapitalize(type)}`,
        accent: `${presetName}${toCapitalize(invertType)}`,
        invert: `${presetName}${toCapitalize(invertType)}`,
      },
      control: presetName,
      font: presetName,
      size: presetName,
      space: presetName,
      shadow: presetName,
    };
  }, [type]);

  return {
    css,
    preset,
  };
};
