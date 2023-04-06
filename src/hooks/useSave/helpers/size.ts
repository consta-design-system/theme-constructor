import { LineHeight, TextSize } from '##/types/theme';

import { getThemeFileName } from '.';

const weights: Record<string, string> = {
  '--font-weight-text-thin': '100',
  '--font-weight-text-extralight': '100',
  '--font-weight-text-light': '300',
  '--font-weight-text-regular': 'normal',
  '--font-weight-text-medium': '500',
  '--font-weight-text-semibold': '600',
  '--font-weight-text-bold': 'bold',
  '--font-weight-text-extrabold': '800',
  '--font-weight-text-black': '900',
};

export const getSizeCSS = (
  presetName: string,
  size: TextSize,
  lineHeight: LineHeight,
) =>
  `.${getThemeFileName(
    presetName,
    'size',
  )} {\n\t/* Размер текста */\n\t${Object.keys(size)
    .map((key) => `${key}: ${size[key as keyof TextSize]};`)
    .join(`\n\t`)}\n\n\t/* Межстрочный интервал */\n\t${Object.keys(lineHeight)
    .map((key) => `${key}: ${lineHeight[key as keyof LineHeight]};`)
    .join(`\n\t`)}\n\n\t/* Ширина шрифта */\n\t${Object.keys(weights)
    .map((key) => `${key}: ${weights[key]};`)
    .join('\n\t')}\n}\n\n`;

export const getSizeJson = (size: TextSize, lineHeight: LineHeight) => {
  return JSON.stringify(
    {
      ...size,
      ...lineHeight,
      ...weights,
    },
    null,
    2,
  );
};
