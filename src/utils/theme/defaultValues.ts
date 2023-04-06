import { ColorBase, ShadowColors, ShadowParams } from '##/types/theme';

export const defaultLightColors: ColorBase = {
  '$color-base-base': '#002033',
  '$color-base-essential': '#ffffff',
  '$color-base-project': '#0071b2',
  '$color-base-phantom': '#004269',
  '$color-base-path': '#0078d2',
  '$color-base-system': '#ced8de',
  '$color-base-success': '#22c38e',
  '$color-base-alert': '#eb5757',
  '$color-base-warning': '#f38b00',
  '$color-base-caution': '#f2c94c',
  '$color-base-normal': '#56b9f2',
  '$color-base-critical': '#33000f',
};

export const defaultDarkColors: ColorBase = {
  '$color-base-base': '#ffffff',
  '$color-base-essential': '#22272b',
  '$color-base-project': '#0071b2',
  '$color-base-phantom': '#f6fbfd',
  '$color-base-path': '#0078d2',
  '$color-base-system': '#4b5963',
  '$color-base-success': '#22c38e',
  '$color-base-alert': '#f54d4d',
  '$color-base-warning': '#f38b00',
  '$color-base-caution': '#f2c94c',
  '$color-base-normal': '#0aa5ff',
  '$color-base-critical': '#33000f',
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
  '--shadow-group': ['rgba(0, 14, 21, 0.02)', 'rgba(0, 14, 21, 0.16)'],
  '--shadow-layer': ['rgba(0, 14, 21, 0.04)', 'rgba(0, 14, 21, 0.12)'],
  '--shadow-modal': ['rgba(0, 14, 21, 0.04)', 'rgba(0, 14, 21, 0.12)'],
};

export const defaultShadowParams: Record<keyof ShadowColors, ShadowParams> = {
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
