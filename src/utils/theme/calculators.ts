import { LineHeight, Space, TextSize } from '##/types/theme';
import { convertSizeToNumber } from '##/utils/sizes';

export const calculateSpaces = (initial?: string | null | number): Space => {
  const space = convertSizeToNumber(initial ?? '2px', 'px');

  return {
    '--space-3xs': `${space}px`,
    '--space-2xs': `${space * 2}px`,
    '--space-xs': `${space * 4}px`,
    '--space-s': `${space * 6}px`,
    '--space-m': `${space * 8}px`,
    '--space-l': `${space * 10}px`,
    '--space-xl': `${space * 12}px`,
    '--space-2xl': `${space * 16}px`,
    '--space-3xl': `${space * 20}px`,
    '--space-4xl': `${space * 24}px`,
    '--space-5xl': `${space * 36}px`,
    '--space-6xl': `${space * 48}px`,
  };
};

export const calculateSizes = (initial?: string | null | number): TextSize => {
  const size = convertSizeToNumber(initial ?? '0px', 'px');

  return {
    '--size-text-2xs': `${10 + size}px`,
    '--size-text-xs': `${12 + size}px`,
    '--size-text-s': `${14 + size}px`,
    '--size-text-m': `${16 + size}px`,
    '--size-text-l': `${18 + size}px`,
    '--size-text-xl': `${20 + size}px`,
    '--size-text-2xl': `${24 + size}px`,
    '--size-text-3xl': `${32 + size}px`,
    '--size-text-4xl': `${48 + size}px`,
    '--size-text-5xl': `${72 + size}px`,
    '--size-text-6xl': `${96 + size}px`,
  };
};

export const calculateLineHeights = (
  initial?: string | null | number,
): LineHeight => {
  const lineHeight = convertSizeToNumber(initial ?? '0em', 'em');

  return {
    '--line-height-text-2xs': `${1.1 + lineHeight}em`,
    '--line-height-text-xs': `${1.2 + lineHeight}em`,
    '--line-height-text-s': `${1.4 + lineHeight}em`,
    '--line-height-text-m': `${1.5 + lineHeight}em`,
    '--line-height-text-l': `${1.6 + lineHeight}em`,
  };
};
