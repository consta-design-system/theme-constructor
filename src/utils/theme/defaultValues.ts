import {
  ColorBase,
  ConstructorThemePreset,
  ShadowColors,
  ShadowsOptions,
} from '##/types/theme';

export const defaultLightColors: ColorBase = {
  '$color-base-base': '#002033',
  '$color-base-essential': '#FFFFFF',
  '$color-base-project': '#0071B2',
  '$color-base-phantom': '#004269',
  '$color-base-path': '#0078D2',
  '$color-base-system': '#CED8DE',
  '$color-base-success': '#22C38E',
  '$color-base-alert': '#EB5757',
  '$color-base-warning': '#F38B00',
  '$color-base-caution': '#F2C94C',
  '$color-base-normal': '#56B9F2',
  '$color-base-critical': '#33000F',
};

export const defaultDarkColors: ColorBase = {
  '$color-base-base': '#FFFFFF',
  '$color-base-essential': '#22272B',
  '$color-base-project': '#0071B2',
  '$color-base-phantom': '#F6FBFD',
  '$color-base-path': '#0078D2',
  '$color-base-system': '#4B5963',
  '$color-base-success': '#22C38E',
  '$color-base-alert': '#F54D4D',
  '$color-base-warning': '#F38B00',
  '$color-base-caution': '#F2C94C',
  '$color-base-normal': '#0AA5FF',
  '$color-base-critical': '#33000F',
};

export const defaultLineHeight: number = 0;

export const defaultTextSize: number = 0;

export const defaultSpace: number = 2;

export const defaultFont = 'Inter';
export const defaultRadius = 4;

export const defaultShadowDarkColors: ShadowColors = {
  '--shadow-group': ['rgba(0, 0, 0, 0.08)', 'rgba(0, 0, 0, 0.32)'],
  '--shadow-layer': ['rgba(0, 0, 0, 0.08)', 'rgba(0, 0, 0, 0.32)'],
  '--shadow-modal': ['rgba(0, 0, 0, 0.08)', 'rgba(0, 0, 0, 0.32)'],
};

export const defaultShadowLightColors: ShadowColors = {
  '--shadow-group': ['rgba(0, 32, 51, 0.02)', 'rgba(0, 32, 51, 0.16)'],
  '--shadow-layer': ['rgba(0, 32, 51, 0.04)', 'rgba(0, 32, 51, 0.12)'],
  '--shadow-modal': ['rgba(0, 32, 51, 0.04)', 'rgba(0, 32, 51, 0.12)'],
};

export const defaultShadowParams: ShadowsOptions = {
  '--shadow-group': {
    x: [0, 0],
    y: [2, 2],
    blur: [2, 8],
  },
  '--shadow-layer': {
    x: [0, 0],
    y: [4, 8],
    blur: [4, 24],
  },
  '--shadow-modal': {
    x: [0, 0],
    y: [8, 12],
    blur: [8, 28],
  },
};

export const defaultAutoSaveName = 'AutoSave';

export const defaultPresetValue: ConstructorThemePreset['theme'] = {
  colors: {
    light: defaultLightColors,
    dark: defaultDarkColors,
  },
  radius: defaultRadius,
  space: defaultSpace,
  font: {
    font: defaultFont,
    size: defaultTextSize,
    lineHeight: defaultLineHeight,
  },
  shadow: {
    colors: {
      light: defaultShadowLightColors,
      dark: defaultShadowDarkColors,
    },
    params: defaultShadowParams,
  },
};
