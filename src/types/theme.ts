export type VarsType = 'color' | 'space' | 'font' | 'shadow' | 'radius';

export type Space = {
  '--space-3xs': string;
  '--space-2xs': string;
  '--space-xs': string;
  '--space-s': string;
  '--space-m': string;
  '--space-l': string;
  '--space-xl': string;
  '--space-2xl': string;
  '--space-3xl': string;
  '--space-4xl': string;
  '--space-5xl': string;
  '--space-6xl': string;
};

export type TextSize = {
  '--size-text-2xs': string;
  '--size-text-xs': string;
  '--size-text-s': string;
  '--size-text-m': string;
  '--size-text-l': string;
  '--size-text-xl': string;
  '--size-text-2xl': string;
  '--size-text-3xl': string;
  '--size-text-4xl': string;
  '--size-text-5xl': string;
  '--size-text-6xl': string;
};

export type LineHeight = {
  '--line-height-text-2xs': string;
  '--line-height-text-xs': string;
  '--line-height-text-s': string;
  '--line-height-text-m': string;
  '--line-height-text-l': string;
};

export type ShadowParams = {
  x: [number, number];
  y: [number, number];
  blur: [number, number];
};

export type ShadowColors = {
  '--shadow-group': [string, string];
  '--shadow-layer': [string, string];
  '--shadow-modal': [string, string];
};

export type ColorBase = {
  '$color-base-base': string;
  '$color-base-essential': string;
  '$color-base-project': string;
  '$color-base-phantom': string;
  '$color-base-path': string;
  '$color-base-system': string;
  '$color-base-success': string;
  '$color-base-alert': string;
  '$color-base-warning': string;
  '$color-base-caution': string;
  '$color-base-normal': string;
  '$color-base-critical': string;
};

export type ConstructorThemePreset = {
  name: string;
  createdAt: string;
  modifiedAt: string;
  theme: {
    colors: {
      light: ColorBase;
      dark: ColorBase;
    };
    font: {
      font: string;
      size: number;
      lineHeight: number;
    };
    space: number;
    radius: number;
    shadow: {
      colors: {
        light: ShadowColors;
        dark: ShadowColors;
      };
      params: Record<keyof ShadowColors, ShadowParams>;
    };
  };
};

export type ColorKeys =
  | '--color-bg-default'
  | '--color-bg-secondary'
  | '--color-bg-brand'
  | '--color-bg-link'
  | '--color-bg-border'
  | '--color-bg-stripe'
  | '--color-bg-ghost'
  | '--color-bg-tone'
  | '--color-bg-soft'
  | '--color-bg-system'
  | '--color-bg-normal'
  | '--color-bg-success'
  | '--color-bg-caution'
  | '--color-bg-warning'
  | '--color-bg-alert'
  | '--color-bg-critical'
  | '--color-typo-primary'
  | '--color-typo-secondary'
  | '--color-typo-ghost'
  | '--color-typo-brand'
  | '--color-typo-system'
  | '--color-typo-normal'
  | '--color-typo-success'
  | '--color-typo-caution'
  | '--color-typo-warning'
  | '--color-typo-alert'
  | '--color-typo-critical'
  | '--color-typo-link'
  | '--color-typo-link-minor'
  | '--color-typo-link-hover'
  | '--color-scroll-bg'
  | '--color-scroll-thumb'
  | '--color-scroll-thumb-hover'
  | '--color-control-bg-default'
  | '--color-control-typo-default'
  | '--color-control-typo-placeholder'
  | '--color-control-bg-border-default'
  | '--color-control-bg-border-default-hover'
  | '--color-control-bg-border-focus'
  | '--color-control-bg-focus'
  | '--color-control-bg-active'
  | '--color-control-bg-primary'
  | '--color-control-bg-primary-hover'
  | '--color-control-typo-primary'
  | '--color-control-typo-primary-hover'
  | '--color-control-bg-secondary'
  | '--color-control-bg-border-secondary'
  | '--color-control-bg-border-secondary-hover'
  | '--color-control-typo-secondary'
  | '--color-control-typo-secondary-hover'
  | '--color-control-bg-ghost'
  | '--color-control-bg-ghost-hover'
  | '--color-control-typo-ghost'
  | '--color-control-typo-ghost-hover'
  | '--color-control-bg-clear'
  | '--color-control-bg-clear-hover'
  | '--color-control-typo-clear'
  | '--color-control-typo-clear-hover'
  | '--color-control-bg-disable'
  | '--color-control-bg-border-disable'
  | '--color-control-typo-disable'
  | '--color-shadow-group-1'
  | '--color-shadow-group-2'
  | '--color-shadow-layer-1'
  | '--color-shadow-layer-2'
  | '--color-shadow-modal-1'
  | '--color-shadow-modal-2';
