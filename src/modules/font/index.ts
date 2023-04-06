import { atom } from '@reatom/core';
import { onUpdate } from '@reatom/hooks';

import {
  defaultAutoSaveName,
  defaultFont,
  defaultLineHeight,
  defaultTextSize,
} from '##/utils/theme/defaultValues';

import { autoSavePresetAtom } from '../presets';

export const textSizeTermAtom = atom<number>(defaultTextSize);

export const lineHeightTermAtom = atom<number>(defaultLineHeight);

export const fontAtom = atom<string>(defaultFont);

onUpdate(textSizeTermAtom, (ctx, value) => {
  const preset = ctx.get(autoSavePresetAtom);
  const date = new Date().toISOString();
  autoSavePresetAtom(ctx, {
    name: preset?.name ?? defaultAutoSaveName,
    createdAt: preset?.createdAt ?? date,
    modifiedAt: date,
    theme: {
      ...(preset?.theme ?? {}),
      font: {
        ...(preset?.theme?.font ?? {}),
        size: value,
      },
    },
  });
});

onUpdate(lineHeightTermAtom, (ctx, value) => {
  const preset = ctx.get(autoSavePresetAtom);
  const date = new Date().toISOString();
  autoSavePresetAtom(ctx, {
    name: preset?.name ?? defaultAutoSaveName,
    createdAt: preset?.createdAt ?? date,
    modifiedAt: date,
    theme: {
      ...(preset?.theme ?? {}),
      font: {
        ...(preset?.theme?.font ?? {}),
        lineHeight: value,
      },
    },
  });
});

onUpdate(fontAtom, (ctx, value) => {
  const preset = ctx.get(autoSavePresetAtom);
  const date = new Date().toISOString();
  autoSavePresetAtom(ctx, {
    name: preset?.name ?? defaultAutoSaveName,
    createdAt: preset?.createdAt ?? date,
    modifiedAt: date,
    theme: {
      ...(preset?.theme ?? {}),
      font: {
        ...(preset?.theme?.font ?? {}),
        font: value,
      },
    },
  });
});
