import { atom } from '@reatom/core';
import { onUpdate } from '@reatom/hooks';

import { ColorBase } from '##/types/theme';
import {
  defaultAutoSaveName,
  defaultDarkColors,
  defaultLightColors,
} from '##/utils/theme/defaultValues';

import { autoSavePresetAtom } from '../presets';

export const colorLightAtom = atom<ColorBase>(defaultLightColors);

export const colorDarkAtom = atom<ColorBase>(defaultDarkColors);

onUpdate(colorLightAtom, (ctx, value) => {
  const preset = ctx.get(autoSavePresetAtom);
  const date = new Date().toISOString();
  autoSavePresetAtom(ctx, {
    name: preset?.name ?? defaultAutoSaveName,
    createdAt: preset?.createdAt ?? date,
    modifiedAt: date,
    theme: {
      ...(preset?.theme ?? {}),
      colors: {
        dark: preset?.theme?.colors?.dark,
        light: value,
      },
    },
  });
});

onUpdate(colorDarkAtom, (ctx, value) => {
  const preset = ctx.get(autoSavePresetAtom);
  const date = new Date().toISOString();
  autoSavePresetAtom(ctx, {
    name: preset?.name ?? defaultAutoSaveName,
    createdAt: preset?.createdAt ?? date,
    modifiedAt: date,
    theme: {
      ...(preset?.theme ?? {}),
      colors: {
        light: preset?.theme?.colors?.light,
        dark: value,
      },
    },
  });
});
