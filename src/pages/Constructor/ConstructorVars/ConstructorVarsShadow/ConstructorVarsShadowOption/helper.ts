import { ShadowParams } from '##/types/theme';
import { convertSizeToNumber, getRgbaString, rgbToRgba } from '##/utils/sizes';

export const getColorOpacity = (color: string) =>
  Number(color.split(')')[0].split(',')[3].trim());

export const percentToFloat = (num: string) => {
  return Number(num.split('%')[0]) / 100;
};

export const createColor = (
  color: string,
  opacity: [number, number],
): [string, string] => {
  const [r1, g1, b1, a1] = rgbToRgba(color, opacity[0]);
  const [r2, g2, b2, a2] = rgbToRgba(color, opacity[1]);
  return [getRgbaString(r1, g1, b1, a1), getRgbaString(r2, g2, b2, a2)];
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
