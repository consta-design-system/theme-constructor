import { atom } from '@reatom/core';
import { onUpdate } from '@reatom/hooks';

import {
  defaultAutoSaveName,
  defaultRadius,
} from '##/utils/theme/defaultValues';

import { autoSavePresetAtom } from '../presets';

export const radiusAtom = atom<number>(defaultRadius);

onUpdate(radiusAtom, (ctx, value) => {
  const preset = ctx.get(autoSavePresetAtom);
  const date = new Date().toISOString();
  autoSavePresetAtom(ctx, {
    name: preset?.name ?? defaultAutoSaveName,
    createdAt: preset?.createdAt ?? date,
    modifiedAt: date,
    theme: {
      ...(preset?.theme ?? {}),
      radius: value,
    },
  });
});
