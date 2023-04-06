import { atom } from '@reatom/core';
import { onUpdate } from '@reatom/hooks';

import {
  defaultAutoSaveName,
  defaultSpace,
} from '##/utils/theme/defaultValues';

import { autoSavePresetAtom } from '../presets';

export const spaceFactorAtom = atom<number>(defaultSpace);

onUpdate(spaceFactorAtom, (ctx, value) => {
  const preset = ctx.get(autoSavePresetAtom);
  const date = new Date().toISOString();
  autoSavePresetAtom(ctx, {
    name: preset?.name ?? defaultAutoSaveName,
    createdAt: preset?.createdAt ?? date,
    modifiedAt: date,
    theme: {
      ...(preset?.theme ?? {}),
      space: value,
    },
  });
});
