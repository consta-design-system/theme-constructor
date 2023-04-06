import { atom } from '@reatom/core';
import { onUpdate } from '@reatom/hooks';
import { debounce } from '@reatom/lens';

import { DeepPartial } from '##/types/DeepPartial';
import { ConstructorThemePreset } from '##/types/theme';

export const SAVE_CONSTRUCTOR_PRESET_KEY = 'presets';
export const AUTO_SAVE_PRESET_KEY = 'autosave_preset';
export const CURRENT_CONSTRUCTOR_PRESET_KEY = 'current_preset';

const getPresets = () => {
  const stringPresets = localStorage.getItem(SAVE_CONSTRUCTOR_PRESET_KEY);
  if (!stringPresets) return [];
  return JSON.parse(stringPresets) as ConstructorThemePreset[];
};

const getPreset = <ITEM>(key: string) => {
  const stringPreset = localStorage.getItem(key);
  if (!stringPreset) return null;
  return JSON.parse(stringPreset) as ITEM;
};

export const presetsAtom = atom<ConstructorThemePreset[]>(getPresets());

export const currentPresetAtom = atom<ConstructorThemePreset | null>(
  getPreset<ConstructorThemePreset>(CURRENT_CONSTRUCTOR_PRESET_KEY),
);

export const autoSavePresetAtom =
  atom<DeepPartial<ConstructorThemePreset> | null>(
    getPreset<DeepPartial<ConstructorThemePreset>>(AUTO_SAVE_PRESET_KEY),
  );

export const autoSaveAtom = autoSavePresetAtom.pipe(debounce(5000));

onUpdate(presetsAtom, (_ctx, value) => {
  localStorage.setItem(SAVE_CONSTRUCTOR_PRESET_KEY, JSON.stringify(value));
});

onUpdate(autoSaveAtom, (_ctx, value) => {
  localStorage.setItem(AUTO_SAVE_PRESET_KEY, JSON.stringify(value));
});

onUpdate(currentPresetAtom, (ctx, value) => {
  value && autoSavePresetAtom(ctx, value);
  localStorage.setItem(CURRENT_CONSTRUCTOR_PRESET_KEY, JSON.stringify(value));
});
