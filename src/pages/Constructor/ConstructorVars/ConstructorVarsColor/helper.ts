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
