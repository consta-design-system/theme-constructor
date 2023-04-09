import { ColorBase, ColorKeys } from '##/types/theme';

export const getColors = (
  type: 'dark' | 'default',
): Record<
  ColorKeys,
  {
    description?: string;
    group?: keyof ColorBase;
    h?: number | string;
    s?: number | string;
    l?: number | string;
    a?: number;
  }
> => ({
  '--color-typo-primary': {
    description: 'Цвет основного текста',
    group: '$color-base-base',
    ...(type === 'dark' ? { l: '-2' } : {}),
  },
  '--color-typo-secondary': {
    description: 'Цвет второстепенного текста',
    group: '$color-base-base',
    a: 60,
  },
  '--color-typo-ghost': {
    description: 'Цвет дополнительного текста',
    group: '$color-base-base',
    a: 30,
  },
  '--color-control-typo-default': {
    description: 'Цвет основного текста контрола',
    group: '$color-base-base',
    ...(type === 'dark' ? { a: 80 } : {}),
  },
  '--color-control-typo-placeholder': {
    description: 'Цвет плейсхолдера контрола',
    group: '$color-base-base',
    a: 35,
  },
  '--color-control-typo-primary': {
    description: 'Цвет акцентного текста',
    group: '$color-base-base',
    l: '+100%',
  },
  '--color-control-typo-primary-hover': {
    description: 'Цвет акцентного текста',
    group: '$color-base-base',
    l: '+100%',
  },
  '--color-control-typo-ghost': {
    description: 'Цвет дополнительного текста контрола',
    group: '$color-base-base',
    ...(type === 'dark' ? { a: 75 } : { h: '+1', l: '+8%', a: 80 }),
  },
  '--color-control-typo-ghost-hover': {
    description: 'Цвет дополнительного текста контрола по ховеру',
    group: '$color-base-base',
    ...(type === 'dark' ? { a: 90 } : { h: '+1', l: '+8%', a: 75 }),
  },
  '--color-control-typo-clear': {
    description: 'Цвет акцентного текста',
    group: '$color-base-base',
    ...(type === 'dark' ? { a: 75 } : { h: '+1', l: '+8%', a: 80 }),
  },
  '--color-control-typo-clear-hover': {
    description: 'Цвет акцентного текста',
    group: '$color-base-base',
    ...(type === 'dark' ? { a: 90 } : { h: '+1', l: '+8%', a: 75 }),
  },
  '--color-control-typo-disable': {
    description: 'Цвет основного текста неактивного контрола',
    group: '$color-base-base',
    a: type === 'dark' ? 24 : 26,
  },
  '--color-bg-default': {
    description: 'Цвет дефолта',
    group: '$color-base-essential',
  },
  '--color-bg-secondary': {
    description: 'Цвет дефолта',
    group: type === 'dark' ? '$color-base-essential' : '$color-base-project',
    ...(type === 'dark' ? { l: '-5' } : { s: '-75', l: '+59' }),
  },
  '--color-bg-soft': {
    description: 'Цвет молока',
    group: '$color-base-essential',
    ...(type === 'dark' ? { a: 90, l: '+100%' } : { a: 90 }),
  },
  '--color-control-bg-default': {
    description: 'Цвет фона контрола',
    group: '$color-base-essential',
  },
  '--color-control-bg-secondary': {
    description: 'Цвет фона бордеров котрола',
    group: '$color-base-essential',
    a: 0,
  },
  '--color-bg-brand': {
    description: 'Цвет фона брендированый',
    group: '$color-base-project',
  },
  '--color-typo-brand': {
    description: 'Цвет брендового текста',
    group: '$color-base-project',
  },
  '--color-bg-link': {
    description: 'Цвет фона ссылки',
    group: '$color-base-path',
  },
  '--color-typo-link': {
    description: 'Цвет основной ссылки',
    group: '$color-base-path',
    ...(type === 'dark' ? { h: '-2', l: '+12%' } : {}),
  },
  '--color-typo-link-minor': {
    description: 'Цвет второстепенной ссылки',
    group: '$color-base-path',
    ...(type === 'dark'
      ? { h: '-2', s: '-55%', l: '+20%' }
      : { s: '-35%', l: '-10%' }),
  },
  '--color-typo-link-hover': {
    description: 'Цвет ховера ссылки',
    group: '$color-base-path',
    ...(type === 'dark' ? { h: '-2', l: '+26%' } : { l: '+8%' }),
  },
  '--color-control-bg-border-focus': {
    description: 'Цвет аутлайна контролов при фокусе',
    group: '$color-base-path',
    ...(type === 'dark' ? { l: '+10%' } : { l: '+9%' }),
  },
  '--color-control-bg-focus': {
    description: 'Цвет тени в состонии фокуса',
    group: '$color-base-path',
    ...(type === 'dark' ? { a: 40 } : { a: 30 }),
  },
  '--color-control-bg-active': {
    description: 'Цвет тени в состонии нажатия',
    group: '$color-base-path',
    ...(type === 'dark' ? { a: 70 } : { a: 50 }),
  },
  '--color-control-bg-primary': {
    description: 'Цвет фона активного контрола',
    group: '$color-base-path',
  },
  '--color-control-bg-primary-hover': {
    description: 'Цвет фона активного контрола по ховеру',
    group: '$color-base-path',
    l: '+9%',
  },
  '--color-control-bg-border-secondary': {
    description: 'Цвет фона бордеров котрола',
    group: '$color-base-path',
  },
  '--color-control-bg-border-secondary-hover': {
    description: 'Цвет фона бордеров контрола по ховеру',
    group: '$color-base-path',
    l: '+9%',
  },
  '--color-control-typo-secondary': {
    description: 'Цвет второстепеного текста контрола',
    group: '$color-base-path',
    ...(type === 'dark' ? { h: '-2', l: '+12%' } : {}),
  },
  '--color-control-typo-secondary-hover': {
    description: 'Цвет акцентного текста',
    group: '$color-base-path',
    ...(type === 'dark' ? { h: '-2', l: '+26%' } : { l: '+9%' }),
  },
  '--color-bg-border': {
    description: 'Цвет границ',
    group: '$color-base-phantom',
    a: 20,
    ...(type === 'dark' ? { l: '-1' } : { l: '+10' }),
  },
  '--color-bg-stripe': {
    description: 'Цвет зебры',
    group: '$color-base-phantom',
    ...(type === 'dark' ? { l: '-11', a: 5 } : { a: 6 }),
  },
  '--color-bg-ghost': {
    description: 'Цвет затенения',
    group: '$color-base-phantom',
    ...(type === 'dark' ? { l: '-11', a: 8 } : { a: 10 }),
  },
  '--color-bg-tone': {
    description: 'Цвет паранджи',
    group: '$color-base-phantom',
    a: 85,
    ...(type === 'dark' ? { l: '-11' } : { l: '-92%' }),
  },
  '--color-scroll-bg': {
    group: '$color-base-phantom',
    a: 6,
  },
  '--color-scroll-thumb': {
    group: '$color-base-phantom',
    a: 24,
  },
  '--color-scroll-thumb-hover': {
    group: '$color-base-phantom',
    a: 32,
  },
  '--color-control-bg-border-default': {
    description: 'Цвет фона бордеров котрола',
    group: '$color-base-phantom',
    a: 28,
  },
  '--color-control-bg-border-default-hover': {
    description: 'Цвет фона бордеров котрола по ховеру',
    group: '$color-base-phantom',
    a: 52,
  },
  '--color-control-bg-ghost': {
    description: 'Цвет фона дополнительного контрола',
    group: '$color-base-phantom',
    ...(type === 'dark' ? { s: '-100', a: 32 } : { a: 7 }),
  },
  '--color-control-bg-ghost-hover': {
    description: 'Цвет фона дополнительного контрола по ховеру',
    group: '$color-base-phantom',
    ...(type === 'dark' ? { s: '-100', a: 23 } : { a: 5 }),
  },
  '--color-control-bg-clear': {
    description: 'Цвет фона чистого контрола',
    group: '$color-base-phantom',
    a: 0,
    ...(type === 'dark' ? { s: '-100' } : {}),
  },
  '--color-control-bg-clear-hover': {
    description: 'Цвет фона чистого контрола по ховеру',
    group: '$color-base-phantom',
    ...(type === 'dark' ? { s: '-100', a: 23 } : { a: 5 }),
  },
  '--color-control-bg-disable': {
    description: 'Цвет фона неактивного контрола',
    group: '$color-base-phantom',
    ...(type === 'dark' ? { s: '-100', a: 16 } : { a: 7 }),
  },
  '--color-control-bg-border-disable': {
    description: 'Цвет фона бордеров неактивного контрола',
    group: '$color-base-phantom',
    a: 0,
    ...(type === 'dark' ? { s: '-100' } : {}),
  },
  '--color-bg-system': {
    description: 'Цвет фона системнный',
    group: '$color-base-system',
    ...(type === 'dark' ? { h: 219, s: 8, l: 33 } : { h: 204, s: 18, l: 89 }),
  },
  '--color-typo-system': {
    description: 'Цвет текста системнный',
    group: '$color-base-system',
    ...(type === 'dark' ? { h: 219, s: 14, l: 45 } : { h: 204, s: 28, l: 68 }),
  },
  '--color-bg-normal': {
    description: 'Цвет фона нейтральный',
    group: '$color-base-normal',
  },
  '--color-typo-normal': {
    description: 'Цвет текста нейтральный',
    group: '$color-base-normal',
    s: '+14',
    l: '-4',
  },
  '--color-bg-success': {
    description: 'Цвет фона успеха',
    group: '$color-base-success',
  },
  '--color-typo-success': {
    description: 'Цвет текста успеха',
    group: '$color-base-success',
    ...(type === 'dark' ? { s: '+14', l: '-8' } : { s: '+20', l: '-8' }),
  },
  '--color-bg-caution': {
    description: 'Цвет фона осторожности',
    group: '$color-base-caution',
  },
  '--color-typo-caution': {
    description: 'Цвет текста осторожности',
    group: '$color-base-caution',
    ...(type === 'dark'
      ? { s: '+7', l: '-3' }
      : { h: '-8', s: '+15', l: '-10' }),
  },
  '--color-bg-warning': {
    description: 'Цвет фона предупреждения',
    group: '$color-base-warning',
  },
  '--color-typo-warning': {
    description: 'Цвет текста предупреждения',
    group: '$color-base-warning',
    ...(type === 'dark' ? { s: '+7', l: '-3' } : { h: '-4', s: '-2', l: '-2' }),
  },
  '--color-bg-alert': {
    description: 'Цвет фона ошибки',
    group: '$color-base-alert',
    ...(type === 'dark' ? { s: '+10' } : {}),
  },
  '--color-typo-alert': {
    description: 'Цвет текста ошибки',
    group: '$color-base-alert',
    ...(type === 'dark' ? { s: '+3', l: '-3' } : { s: '+3', l: '-7' }),
  },
  '--color-bg-critical': {
    description: 'Цвет фона системнный',
    group: '$color-base-critical',
  },
  '--color-typo-critical': {
    description: 'Цвет текста системнный',
    group: '$color-base-critical',
    ...(type === 'dark' ? { l: '+9%' } : {}),
  },
  '--color-shadow-group-1': { ...(type === 'dark' ? { a: 8 } : { a: 2 }) },
  '--color-shadow-group-2': { ...(type === 'dark' ? { a: 32 } : { a: 16 }) },
  '--color-shadow-layer-1': { ...(type === 'dark' ? { a: 8 } : { a: 4 }) },
  '--color-shadow-layer-2': { ...(type === 'dark' ? { a: 32 } : { a: 12 }) },
  '--color-shadow-modal-1': { ...(type === 'dark' ? { a: 8 } : { a: 4 }) },
  '--color-shadow-modal-2': { ...(type === 'dark' ? { a: 32 } : { a: 12 }) },
});

type ColorTypeGroup = Record<string, ColorKeys[] | Record<string, ColorKeys[]>>;

export const colorsTypeGroup: ColorTypeGroup = {
  bg: [
    '--color-bg-default',
    '--color-bg-secondary',
    '--color-bg-brand',
    '--color-bg-link',
    '--color-bg-border',
    '--color-bg-stripe',
    '--color-bg-ghost',
    '--color-bg-tone',
    '--color-bg-soft',
    '--color-bg-system',
    '--color-bg-normal',
    '--color-bg-success',
    '--color-bg-caution',
    '--color-bg-warning',
    '--color-bg-alert',
    '--color-bg-critical',
  ],
  typo: [
    '--color-typo-primary',
    '--color-typo-secondary',
    '--color-typo-ghost',
    '--color-typo-brand',
    '--color-typo-system',
    '--color-typo-normal',
    '--color-typo-success',
    '--color-typo-caution',
    '--color-typo-warning',
    '--color-typo-alert',
    '--color-typo-critical',
    '--color-typo-link',
    '--color-typo-link-minor',
    '--color-typo-link-hover',
  ],
  control: {
    default: [
      '--color-control-bg-default',
      '--color-control-typo-default',
      '--color-control-typo-placeholder',
      '--color-control-bg-border-default',
      '--color-control-bg-border-default-hover',
      '--color-control-bg-border-focus',
      '--color-control-bg-focus',
      '--color-control-bg-active',
    ],
    primary: [
      '--color-control-bg-primary',
      '--color-control-bg-primary-hover',
      '--color-control-typo-primary',
      '--color-control-typo-primary-hover',
    ],
    secondary: [
      '--color-control-bg-secondary',
      '--color-control-bg-border-secondary',
      '--color-control-bg-border-secondary-hover',
      '--color-control-typo-secondary',
      '--color-control-typo-secondary-hover',
    ],
    ghost: [
      '--color-control-bg-ghost',
      '--color-control-bg-ghost-hover',
      '--color-control-typo-ghost',
      '--color-control-typo-ghost-hover',
    ],
    clear: [
      '--color-control-bg-clear',
      '--color-control-bg-clear-hover',
      '--color-control-typo-clear',
      '--color-control-typo-clear-hover',
    ],
    disable: [
      '--color-control-bg-disable',
      '--color-control-bg-border-disable',
      '--color-control-typo-disable',
    ],
  },
  shadow: [
    '--color-shadow-group-1',
    '--color-shadow-group-2',
    '--color-shadow-layer-1',
    '--color-shadow-layer-2',
    '--color-shadow-modal-1',
    '--color-shadow-modal-2',
  ],
};

export const colorGroupsNames: Record<string, string> = {
  bg: 'Цвета фонов',
  typo: 'Цвета текста',
  scroll: 'Цвета скроллбара',
  control: 'Цвета контролов',
  shadow: 'Цвета тени',
  disable: 'Disable',
  clear: 'Clear',
  ghost: 'Ghost',
  secondary: 'Secondary',
  primary: 'Primary',
  default: 'Default',
};

export const colorBaseNames: ColorBase = {
  '$color-base-base':
    'Базовый цвет содержимого, от которого выстраиваются цвета текста, иконок, контролов',
  '$color-base-essential': 'Базовый цвет поверхностей',
  '$color-base-project':
    'Проектный цвет, от которого выстраивают акцентные состояния',
  '$color-base-phantom':
    'Тонирующий цвет, от которого выстраиватся бордеры, оверлей под модальными окнами, скролл',
  '$color-base-path':
    'Цвет ссылок и контролов, от которого выстраиваются все их состояния',
  '$color-base-system': 'Цвет системнный',
  '$color-base-success': 'Цвет успеха',
  '$color-base-alert': 'Цвет ошибки',
  '$color-base-warning': 'Цвет предупреждения',
  '$color-base-caution': 'Цвет осторожности',
  '$color-base-normal': 'Цвет нейтральный',
  '$color-base-critical': 'Цвет системнный',
};
