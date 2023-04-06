import { ColorBase, ColorKeys, ShadowColors } from '##/types/theme';
import { hexToHSLA, rgbaToHSLA } from '##/utils/sizes';
import {
  colorBaseNames,
  colorGroupsNames,
  colorsTypeGroup,
  getColors,
} from '##/utils/theme/colors';

import { getThemeFileName } from '.';
import { toCapitalize } from './transliter';

export const createColor = (params: {
  color: string;
  h?: number | string;
  s?: number | string;
  l?: number | string;
  a?: number;
}) => {
  const { color, h, s, l, a = 100 } = params;
  const [hue, saturation, lightness] = color.includes('#')
    ? hexToHSLA(color)
    : rgbaToHSLA(color);
  return `hsla(${Math.ceil(
    typeof h === 'string' ? hue + Number(h) : h ?? hue,
  )}, ${Math.ceil(
    typeof s === 'string' ? saturation + Number(s) : s ?? saturation,
  )}%, ${Math.ceil(
    typeof l === 'string' ? lightness + Number(l) : l ?? lightness,
  )}%, ${a / 100})`;
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
  const css = `/* Базовые цвета, от которых выстраивается вся палитра */\n${Object.keys(
    colors,
  )
    .map((key) => {
      const description = colorBaseNames[key as keyof ColorBase];
      return `${key}: ${colors[key as keyof ColorBase]}${
        description ? ` /* ${description} */` : ''
      }`;
    })
    .join('\n')}\n\n/* stylelint-disable */\n.${getThemeFileName(
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
        return `${key}: color(${group}${h ? ` h(${h})` : ''}${
          s ? ` s(${s})` : ''
        }${l ? ` l(${l})` : ''}${a ? ` a(${a}%)` : ''});${
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
    .join(`\n\n\n\t`)}\n}\n/* stylelint-enable */\n\n`;
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
