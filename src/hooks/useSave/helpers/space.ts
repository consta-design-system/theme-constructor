import { Space } from '##/types/theme';

import { getThemeFileName } from '.';

export const getSpaceCSS = (presetName: string, space: Space) =>
  `.${getThemeFileName(
    presetName,
    'space',
  )} {\n\t/* Отступы */\n\t${Object.keys(space)
    .map((key) => `${key}: ${space[key as keyof Space]};`)
    .join(`\n\t`)}\n}\n\n`;

export const getSpaceJson = (space: Space) => JSON.stringify(space, null, 2);
