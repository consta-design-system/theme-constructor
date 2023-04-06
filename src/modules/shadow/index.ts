import { atom } from '@reatom/core';
import { onUpdate } from '@reatom/hooks';

import { ShadowColors, ShadowParams } from '##/types/theme';
import {
  defaultAutoSaveName,
  defaultShadowDarkColors,
  defaultShadowLightColors,
  defaultShadowParams,
} from '##/utils/theme/defaultValues';

import { autoSavePresetAtom } from '../presets';

export const shadowLightColorsAtom = atom<ShadowColors>(
  defaultShadowLightColors,
);

export const shadowDarkColorsAtom = atom<ShadowColors>(defaultShadowDarkColors);

export const shadowOptionsAtom =
  atom<Record<keyof ShadowColors, ShadowParams>>(defaultShadowParams);

onUpdate(shadowLightColorsAtom, (ctx, value) => {
  const preset = ctx.get(autoSavePresetAtom);
  const date = new Date().toISOString();
  autoSavePresetAtom(ctx, {
    name: preset?.name ?? defaultAutoSaveName,
    createdAt: preset?.createdAt ?? date,
    modifiedAt: date,
    theme: {
      ...(preset?.theme ?? {}),
      shadow: {
        colors: {
          light: value,
          dark: preset?.theme?.shadow?.colors?.dark,
        },
        params: preset?.theme?.shadow?.params,
      },
    },
  });
});

onUpdate(shadowDarkColorsAtom, (ctx, value) => {
  const preset = ctx.get(autoSavePresetAtom);
  const date = new Date().toISOString();
  autoSavePresetAtom(ctx, {
    name: preset?.name ?? defaultAutoSaveName,
    createdAt: preset?.createdAt ?? date,
    modifiedAt: date,
    theme: {
      ...(preset?.theme ?? {}),
      shadow: {
        colors: {
          dark: value,
          light: preset?.theme?.shadow?.colors?.light,
        },
        params: preset?.theme?.shadow?.params,
      },
    },
  });
});

onUpdate(shadowOptionsAtom, (ctx, value) => {
  const preset = ctx.get(autoSavePresetAtom);
  const date = new Date().toISOString();
  autoSavePresetAtom(ctx, {
    name: preset?.name ?? defaultAutoSaveName,
    createdAt: preset?.createdAt ?? date,
    modifiedAt: date,
    theme: {
      ...(preset?.theme ?? {}),
      shadow: {
        colors: preset?.theme?.shadow?.colors,
        params: preset?.theme?.shadow?.params,
      },
    },
  });
});
