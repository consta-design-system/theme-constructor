import { ColorBase, ShadowColors, ShadowParams } from '##/types/theme';

export const defaultLightColors: ColorBase = {
  '$color-base-base': 'rgba(0, 32, 51, 1)',
  '$color-base-essential': 'rgba(255, 255, 255, 1)',
  '$color-base-project': 'rgba(0, 113, 178, 1)',
  '$color-base-phantom': 'rgba(0, 66, 105, 1)',
  '$color-base-path': 'rgba(0, 120, 210, 1)',
  '$color-base-system': 'rgba(206, 216, 222, 1)',
  '$color-base-success': 'rgba(34, 195, 142, 1)',
  '$color-base-alert': 'rgba(235, 87, 87, 1)',
  '$color-base-warning': 'rgba(243, 139, 0, 1)',
  '$color-base-caution': 'rgba(242, 201, 76, 1)',
  '$color-base-normal': 'rgba(86, 185, 242, 1)',
  '$color-base-critical': 'rgba(51, 0, 15, 1)',
};

export const defaultDarkColors: ColorBase = {
  '$color-base-base': 'rgba(255, 255, 255, 1)',
  '$color-base-essential': 'rgba(34, 39, 43, 1)',
  '$color-base-project': 'rgba(0, 113, 178, 1)',
  '$color-base-phantom': 'rgba(246, 251, 253, 1)',
  '$color-base-path': 'rgba(0, 120, 210, 1)',
  '$color-base-system': 'rgba(75, 89, 99, 1)',
  '$color-base-success': 'rgba(34, 195, 142, 1)',
  '$color-base-alert': 'rgba(245, 77, 77, 1)',
  '$color-base-warning': 'rgba(243, 139, 0, 1)',
  '$color-base-caution': 'rgba(242, 201, 76, 1)',
  '$color-base-normal': 'rgba(10, 165, 255, 1)',
  '$color-base-critical': 'rgba(51, 0, 15, 1)',
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
