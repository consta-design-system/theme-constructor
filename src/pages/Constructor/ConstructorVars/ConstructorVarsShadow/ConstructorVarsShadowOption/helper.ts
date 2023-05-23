import { ShadowParams } from '##/types/theme';
import { convertSizeToNumber } from '##/utils/sizes';

export const getColorOpacity = (color: string) =>
  Number(color.split(')')[0].split(',')[3].trim());

export const percentToFloat = (num: string) => {
  return Number(num.split('%')[0]) / 100;
};

export const createShadow = (
  params: ShadowParams & {
    color: [string, string];
  },
): string => {
  const {
    x: [x1, x2],
    y: [y1, y2],
    blur: [blur1, blur2],
    color: [color1, color2],
  } = params;

  return `${convertSizeToNumber(x1, 'px')}px ${convertSizeToNumber(
    y1,
    'px',
  )}px ${convertSizeToNumber(blur1, 'px')}px ${color1}, ${convertSizeToNumber(
    x2,
    'px',
  )}px ${convertSizeToNumber(y2, 'px')}px ${convertSizeToNumber(
    blur2,
    'px',
  )}px ${color2}`;
};
