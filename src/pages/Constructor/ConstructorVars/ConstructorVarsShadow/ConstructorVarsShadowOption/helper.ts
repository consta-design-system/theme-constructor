import Color from 'color';

import { ShadowParams } from '##/types/theme';
import { convertSizeToNumber } from '##/utils/sizes';

export const getColorOpacity = (color: string) =>
  Number(color.split(')')[0].split(',')[3].trim());

export const percentToFloat = (num: string) => {
  return Number(num.split('%')[0]) / 100;
};

export const createColor = (
  color: string,
  opacity: [number, number],
): [string, string] => {
  const c1 = Color(color).rgb().alpha(opacity[0]).string();
  const c2 = Color(color).rgb().alpha(opacity[1]).string();
  return [c1, c2];
};

export const createShadow = (
  params: ShadowParams & {
    color: [string, string];
  },
): string => {
  const { x, y, blur, color } = params;

  return `${convertSizeToNumber(x[0], 'px')}px ${convertSizeToNumber(
    y[0],
    'px',
  )}px ${convertSizeToNumber(blur[0], 'px')}px ${
    color[0]
  }, ${convertSizeToNumber(x[1], 'px')}px ${convertSizeToNumber(
    y[1],
    'px',
  )}px ${convertSizeToNumber(blur[1], 'px')}px ${color[1]}`;
};
