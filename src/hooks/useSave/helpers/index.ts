import { toCapitalize } from './transliter';

export const getThemeFileName = (
  presetName: string,
  type: 'color' | 'control' | 'font' | 'shadow' | 'size' | 'space' | 'preset',
  mode?: 'default' | 'dark',
) => {
  if (type !== 'preset') {
    return `Theme_${type}_${presetName}${mode ? toCapitalize(mode) : ''}`;
  }
  return `preset${toCapitalize(presetName)}${mode ? toCapitalize(mode) : ''}`;
};

export const ThemeCss = `.Theme {\n\t--graphics-size-xs: 12px;\n\t--graphics-size-s: 16px;\n\t--graphics-size-m: 24px;\n\t--graphics-size-l: 32px;\n\t--graphics-size-xl: 40px;\n\t--graphics-size-2xl: 60px;\n\t--graphics-size-3xl: 80px;\n\t--graphics-size-4xl: 120px;\n\n\t*::-webkit-scrollbar {\n\t\twidth: 8px;\n\t\theight: 8px;\n\t}\n\n\t*::-webkit-scrollbar-track {\n\t\tbackground-color: var(--color-scroll-bg);\n\t}\n\n\t*::-webkit-scrollbar-corner {\n\t\tbackground-color: var(--color-scroll-bg);\n\t}\n\n\t*::-webkit-scrollbar-thumb {\n\t\tbackground-color: var(--color-scroll-thumb);\n\t\tborder-radius: 4px;\n\t}\n\n\t*::-webkit-scrollbar-thumb:hover {\n\t\tbackground-color: var(--color-scroll-thumb-hover);\n\t}\n}\n\n`;
