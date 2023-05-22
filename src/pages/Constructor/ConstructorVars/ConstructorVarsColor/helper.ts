import IMask from 'imask';

import { createColor } from '##/hooks/useSave/helpers/color';
import { ColorBase, ColorKeys } from '##/types/theme';
import { getColors } from '##/utils/theme/colors';

type ColorMap = Record<
  keyof ColorBase,
  Array<{
    label: ColorKeys;
    description?: string;
    color: (color: string) => string;
  }>
>;

export const getColorsArray = (type: 'dark' | 'default') => {
  const obj: ColorMap = {
    '$color-base-alert': [],
    '$color-base-base': [],
    '$color-base-caution': [],
    '$color-base-critical': [],
    '$color-base-essential': [],
    '$color-base-normal': [],
    '$color-base-path': [],
    '$color-base-phantom': [],
    '$color-base-project': [],
    '$color-base-success': [],
    '$color-base-system': [],
    '$color-base-warning': [],
  };
  const colors = getColors(type);
  Object.keys(colors).forEach((key) => {
    const { group, description, h, s, l, a } = colors[key as ColorKeys];
    if (group) {
      obj[group].push({
        description,
        label: key as ColorKeys,
        color: (color) => createColor({ color, h, s, l, a }),
      });
    }
  });
  return obj;
};

export const colorGroups = [
  { id: 'bg', label: 'Фон' },
  { id: 'font', label: 'Шрифт' },
  { id: 'control', label: 'Контролы' },
];

export const hexMask = {
  mask: '{#}HEXHEXHEXHEXHEXHEX',
  placeholderChar: '#',
  blocks: {
    HEX: {
      mask: IMask.MaskedEnum,
      enum: [
        '0',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        'A',
        'B',
        'C',
        'D',
        'E',
        'F',
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
      ],
    },
  },
};

export const rgbaMask = {
  mask: 'rgba(RGB, RGB, RGB, ALPHA)',
  placeholderChar: 'rgba(',
  blocks: {
    RGB: {
      mask: Number,
      min: 0,
      scale: 0,
      max: 255,
    },
    ALPHA: {
      mask: Number,
      min: 0,
      max: 1,
      radix: '.',
      mapToRadix: ['.'],
    },
  },
};

export const rgbMask = {
  mask: 'rgb(RGB, RGB, RGB)',
  placeholderChar: 'rgb(',
  blocks: {
    RGB: {
      mask: Number,
      min: 0,
      max: 255,
    },
  },
};

export const hslaMask = {
  mask: 'hsla(RAD, PERC%, PERC%, ALPHA)',
  placeholderChar: 'hsla(',
  blocks: {
    RAD: {
      mask: Number,
      min: 0,
      scale: 0,
      max: 360,
    },
    PERC: {
      mask: Number,
      min: 0,
      max: 100,
      scale: 3,
    },
    ALPHA: {
      mask: Number,
      min: 0,
      max: 1,
      radix: '.',
      mapToRadix: ['.'],
    },
  },
};

export const hexRegex = /^#([A-Fa-f0-9]{6})$/;
export const rgbaRegex =
  /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/;
export const rgbRegex =
  /rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
export const hslaRegex =
  /hsla\(\s*(-?\d+|-?\d*.\d+)\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)%\s*,\s*(-?\d+|-?\d*.\d+)\s*\)/;

