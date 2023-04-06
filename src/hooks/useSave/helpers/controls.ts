import { getThemeFileName } from '.';

const controlParams: Record<string, string> = {
  '--control-border-width': '1px',
  '--control-height-l': 'var(--space-4xl)',
  '--control-height-m': 'var(--space-3xl)',
  '--control-height-s': 'var(--space-2xl)',
  '--control-height-xs': 'var(--space-xl)',
  '--control-box-size-s': 'var(--space-s)',
  '--control-box-size-m': 'var(--space-m)',
  '--control-box-size-l': 'var(--space-l)',
  '--control-space-l': 'var(--space-xl)',
  '--control-space-m': 'var(--space-l)',
  '--control-space-s': 'var(--space-m)',
  '--control-space-xs': 'var(--space-s)',
  '--control-text-size-l': 'var(--size-text-l)',
  '--control-text-size-m': 'var(--size-text-m)',
  '--control-text-size-s': 'var(--size-text-s)',
  '--control-text-size-xs': 'var(--size-text-xs)',
};

export const getControlCSS = (presetName: string, radius: number) =>
  `.${getThemeFileName(
    presetName,
    'control',
  )} {\n\t--control-radius: ${radius}px; /* Основной радиус скругления контроллов */\n\t${Object.keys(
    controlParams,
  )
    .map((key, index) => {
      return `${key}: ${controlParams[key]};${
        index === 0 ? ' /* Основная толщина контроллов */' : ''
      }`;
    })
    .join('\n\t')}\n}\n\n`;

export const getControlJson = (radius: number) => {
  const obj = {
    '--control-radius': `${radius}px`,
    ...controlParams,
  };
  return JSON.stringify(obj, null, 2);
};
