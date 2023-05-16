import { action, atom } from '@reatom/core';
import { onUpdate } from '@reatom/hooks';

import { DeepPartial } from '##/types/DeepPartial';
import { ConstructorThemePreset } from '##/types/theme';
import {
  defaultDarkColors,
  defaultFont,
  defaultLightColors,
  defaultLineHeight,
  defaultRadius,
  defaultShadowDarkColors,
  defaultShadowLightColors,
  defaultShadowParams,
  defaultSpace,
  defaultTextSize,
} from '##/utils/theme/defaultValues';
import { getUnionObject } from '##/utils/theme/getPresetFromAutoSave';

import { darkColorFabricAtoms, lightColorFabricAtoms } from '../colors';
import { fontAtom, lineHeightTermAtom, textSizeTermAtom } from '../font';
import { radiusAtom } from '../radius';
import {
  shadowDarkColorFabricAtoms,
  shadowLightColorFabricAtoms,
  shadowParamsFabricAtoms,
} from '../shadow';
import { spaceFactorAtom } from '../space';

export const SAVE_CONSTRUCTOR_PRESET_KEY = 'presets';
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

onUpdate(presetsAtom, (_ctx, value) => {
  localStorage.setItem(SAVE_CONSTRUCTOR_PRESET_KEY, JSON.stringify(value));
});

export const onSetPresetValue = action(
  (ctx, value: DeepPartial<ConstructorThemePreset['theme']>) => {
    spaceFactorAtom(ctx, value?.space ?? defaultSpace);
    lineHeightTermAtom(ctx, value?.font?.lineHeight ?? defaultLineHeight);
    fontAtom(ctx, value.font?.font ?? defaultFont);
    textSizeTermAtom(ctx, value.font?.size ?? defaultTextSize);
    radiusAtom(ctx, value.radius ?? defaultRadius);
    shadowLightColorFabricAtoms.forEach(({ name, atoms }) => {
      const colors = value.shadow?.colors?.light?.[name] ?? [];
      atoms[4](ctx, [
        colors[0] ?? defaultShadowLightColors[name][0],
        colors[1] ?? defaultShadowLightColors[name][1],
      ]);
    });
    shadowDarkColorFabricAtoms.forEach(({ name, atoms }) => {
      const colors = value.shadow?.colors?.dark?.[name] ?? [];
      atoms[4](ctx, [
        colors[0] ?? defaultShadowDarkColors[name][0],
        colors[1] ?? defaultShadowDarkColors[name][1],
      ]);
    });
    shadowParamsFabricAtoms.forEach(({ name, atoms }) => {
      const params = value.shadow?.params?.[name] ?? {};
      atoms[6](ctx, getUnionObject(params, defaultShadowParams[name]));
    });
    lightColorFabricAtoms.forEach(({ name, atoms }) => {
      const color = value?.colors?.light?.[name];
      atoms[3](ctx, color ?? defaultLightColors[name]);
    });
    darkColorFabricAtoms.forEach(({ name, atoms }) => {
      const color = value?.colors?.light?.[name];
      atoms[3](ctx, color ?? defaultDarkColors[name]);
    });
  },
);
