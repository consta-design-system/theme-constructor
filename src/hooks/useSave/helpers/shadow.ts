import { ShadowColors, ShadowParams } from '##/types/theme';

import { getThemeFileName } from '.';

const getShadow = (key: string, params: ShadowParams) => {
  const { x, y, blur } = params;
  const variableName = `--color-${key.split('--')[1]}`;
  return `${x[0]}px ${y[0]}px ${blur[0]}px var(${variableName}-1), ${x[0]}px ${y[0]}px ${blur[0]}px var(${variableName}-2);`;
};

export const getShadowCSS = (
  presetName: string,
  shadow: Record<keyof ShadowColors, ShadowParams>,
) =>
  `.${getThemeFileName(presetName, 'shadow')} {\n\t/* Тени */\n\t${Object.keys(
    shadow,
  )
    .map(
      (key) => `${key}: ${getShadow(key, shadow[key as keyof ShadowColors])}`,
    )
    .join(`\n\t`)}\n}\n\n`;

export const getShadowJson = (
  shadow: Record<keyof ShadowColors, ShadowParams>,
) => {
  const obj: Record<string, string> = {};
  Object.keys(shadow).forEach((key) => {
    obj[key] = getShadow(key, shadow[key as keyof ShadowColors]);
  });
  return JSON.stringify(obj, null, 2);
};
