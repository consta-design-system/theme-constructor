import { atom } from '@reatom/core';
import { onUpdate } from '@reatom/hooks';

import { VarsType } from '##/types/theme';

const HELP_FLAG_KEY = 'show_help';

export const isHelpAtom = atom<boolean>(
  localStorage.getItem(HELP_FLAG_KEY) !== 'false',
);

export const varsTypeAtom = atom<VarsType>('color');

onUpdate(isHelpAtom, (_ctx, value) => {
  localStorage.setItem(HELP_FLAG_KEY, value?.toString());
});

export const scenarioModalAtom = atom(true);
