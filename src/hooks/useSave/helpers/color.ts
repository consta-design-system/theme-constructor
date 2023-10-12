import Color from 'color';

import { ColorBase, ColorKeys, ShadowColors } from '##/types/theme';
import { convertSizeToNumber } from '##/utils/sizes';
import {
  colorGroupsNames,
  colorsTypeGroup,
  getColors,
} from '##/utils/theme/colors';

import { getThemeFileName } from '.';
import { toCapitalize } from './transliter';

const isNotNil = <T>(p: T): p is Exclude<T, undefined | null> =>
  p !== undefined && p !== null;

export const createColor = (params: {
  color: string;
  h?: number | string;
  s?: number | string;
  l?: number | string;
  a?: number;
}) => {
  const { color: colorStr, h, s, l, a = 100 } = params;
  let color = Color(colorStr).hsl();
  if (isNotNil(h)) {
    const hue = Number(convertSizeToNumber(h, '%'));
    if (typeof h === 'number' || (!h.includes('+') && !h.includes('-'))) {
      color = color.hue(hue);
    } else {
      color = color.hue(color.hue() + hue);
    }
  }
  if (isNotNil(s)) {
    const saturation = Number(convertSizeToNumber(s, '%'));
    if (typeof s === 'number' || (!s.includes('+') && !s.includes('-'))) {
      color = color.saturationl(saturation);
    } else {
      color = color.saturationl(color.saturationl() + saturation);
    }
  }
  if (isNotNil(l)) {
    const lightness = Number(convertSizeToNumber(l, '%'));
    if (typeof l === 'number' || (!l.includes('+') && !l.includes('-'))) {
      color = color.lightness(lightness);
    } else {
      color = color.lightness(color.lightness() + lightness);
    }
  }
  if (typeof a === 'number') {
    color = color.alpha(a / 100);
  }
  return color.rgb().string();
};

export const getCalculatedColorCSS = (
  presetName: string,
  type: 'default' | 'dark',
  colors: ColorBase,
  shadow: ShadowColors,
) => {
  const colorsMap = getColors(type);
  return `.Theme_color_${presetName}${toCapitalize(type)} {\n\t${Object.keys(
    colorsTypeGroup,
  )
    .map((key) => {
      const items = colorsTypeGroup[key];

      const getShadowKey = (key: ColorKeys): keyof ShadowColors => {
        if (key.includes('group')) {
          return '--shadow-group';
        }
        if (key.includes('layer')) {
          return '--shadow-layer';
        }
        return '--shadow-modal';
      };

      const getItem = (key: ColorKeys) => {
        if (key.includes('shadow')) {
          const index = key.includes('1') ? 0 : 1;
          const shadowKey = getShadowKey(key);
          return `${key}: ${shadow[shadowKey][index]};`;
        }
        const { group, h, s, l, a } = colorsMap[key];
        if (group) {
          return `${key}: ${createColor({
            color: colors[group],
            h,
            s,
            l,
            a,
          })};`;
        }
        return '';
      };
      const groupName = colorGroupsNames[key];
      return [
        `/* ${Array.from({ length: groupName.length + 5 })
          .fill('/')
          .join('')}`,
        `// ${groupName} / */`,
        ...(Array.isArray(items)
          ? items.map((key) => getItem(key as ColorKeys))
          : Object.keys(items).map((subKey) => {
              const subItems = items[subKey];
              return [
                `\n\t/* ${colorGroupsNames[subKey]} */`,
                ...subItems.map((key) => getItem(key as ColorKeys)),
              ].join('\n\t');
            })),
      ].join('\n\t');
    })
    .join(`\n\n\n\t`)}\n}\n`;
};

const getShadowKey = (key: ColorKeys): keyof ShadowColors => {
  if (key.includes('group')) {
    return '--shadow-group';
  }
  if (key.includes('layer')) {
    return '--shadow-layer';
  }
  return '--shadow-modal';
};

export const getColorCSS = (
  presetName: string,
  type: 'default' | 'dark',
  colors: ColorBase,
  shadow: ShadowColors,
) => {
  const colorsMap = getColors(type);
  const css = `.${getThemeFileName(
    presetName,
    'color',
    type,
  )} {\n\t${Object.keys(colorsTypeGroup)
    .map((key) => {
      const items = colorsTypeGroup[key];

      const getItem = (key: ColorKeys) => {
        if (key.includes('shadow')) {
          const index = key.includes('1') ? 0 : 1;
          const shadowKey = getShadowKey(key);
          return `${key}: ${shadow[shadowKey][index]};`;
        }
        const { group, description, h, s, l, a } = colorsMap[key];

        const color = createColor({
          color: group ? colors[group] : '#000',
          h,
          s,
          l,
          a,
        });

        return `${key}: ${typeof a === 'number' ? color : Color(color).hex()};${
          description ? ` /* ${description} */` : ''
        }`;
      };
      const groupName = colorGroupsNames[key];
      return [
        `/* ${Array.from({ length: groupName.length + 5 })
          .fill('/')
          .join('')}`,
        `// ${groupName} / */`,
        ...(Array.isArray(items)
          ? items.map((key) => getItem(key as ColorKeys))
          : Object.keys(items).map((subKey) => {
              const subItems = items[subKey];
              return [
                `\n\t/* ${colorGroupsNames[subKey]} */`,
                ...subItems.map((key) => getItem(key as ColorKeys)),
              ].join('\n\t');
            })),
      ].join('\n\t');
    })
    .join(`\n\n\n\t`)}\n}\n\n`;
  return css;
};

export const getColorJson = (
  colors: ColorBase,
  shadows: ShadowColors,
  type: 'default' | 'dark',
) => {
  const obj: Record<string, string> = {};
  const colorsMap = getColors(type);
  Object.keys(colorsMap).forEach((key) => {
    const { h, s, l, a, group } = colorsMap[key as ColorKeys];
    if (key.includes('shadow')) {
      const index = key.includes('1') ? 0 : 1;
      const shadowKey = getShadowKey(key as ColorKeys);
      obj[shadowKey] = shadows[shadowKey][index];
    } else if (group) {
      obj[key] = createColor({ color: colors[group], h, s, l, a });
    }
  });
  return JSON.stringify(obj, null, 2);
};
