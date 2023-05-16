import { Atom, atom } from '@reatom/core';

import { DeepPartial } from '##/types/DeepPartial';
import {
  ColorBase,
  ConstructorThemePreset,
  ShadowColors,
  ShadowParams,
  ShadowsOptions,
} from '##/types/theme';
import { defaultAutoSaveName } from '##/utils/theme/defaultValues';

import { ctx } from '../api';
import { scenarioModalAtom } from '../app';
import { darkColorFabricAtoms, lightColorFabricAtoms } from '../colors';
import { fontAtom, lineHeightTermAtom, textSizeTermAtom } from '../font';
import { radiusAtom } from '../radius';
import {
  shadowDarkColorFabricAtoms,
  shadowLightColorFabricAtoms,
  shadowParamsFabricAtoms,
} from '../shadow';
import { spaceFactorAtom } from '../space';
import { saveAction } from './helper';

export const AUTO_SAVE_PRESET_KEY = 'autosave_preset';

export const autoSavePresetAtom: Atom<DeepPartial<ConstructorThemePreset> | null> =
  atom((ctx) => {
    const autoSave = JSON.parse(
      localStorage.getItem(AUTO_SAVE_PRESET_KEY) ?? '{}',
    ) as DeepPartial<ConstructorThemePreset>;
    const colorsLight: DeepPartial<ColorBase> = {};
    const colorsDark: DeepPartial<ColorBase> = {};
    const shadowLightColors: DeepPartial<ShadowColors> = {};
    const shadowDarkColors: DeepPartial<ShadowColors> = {};
    const shadowParams: DeepPartial<ShadowsOptions> = {};
    lightColorFabricAtoms.forEach(({ name, atoms }) => {
      colorsLight[name] = ctx.get(atoms[3]);
      ctx.spy(atoms[3]);
    });
    darkColorFabricAtoms.forEach(({ name, atoms }) => {
      colorsDark[name] = ctx.get(atoms[3]);
      ctx.spy(atoms[3]);
    });
    shadowLightColorFabricAtoms.forEach(({ name, atoms }) => {
      shadowLightColors[name] = ctx.get(atoms[4]);
      ctx.spy(atoms[4]);
    });
    shadowDarkColorFabricAtoms.forEach(({ name, atoms }) => {
      shadowDarkColors[name] = ctx.get(atoms[4]);
      ctx.spy(atoms[4]);
    });
    shadowParamsFabricAtoms.forEach(({ name, atoms }) => {
      const params = ctx.get(atoms[6]);
      Object.keys(params).forEach((key) => {
        const copyKey = key as keyof ShadowParams;
        const param = params[copyKey];
        shadowParams[name] = {
          ...(shadowParams[name] ?? {}),
          [copyKey]: param,
        };
      });
      ctx.spy(atoms[6]);
    });
    ctx.spy(radiusAtom);
    ctx.spy(spaceFactorAtom);
    ctx.spy(fontAtom);
    ctx.spy(textSizeTermAtom);
    ctx.spy(lineHeightTermAtom);
    const radius = ctx.get(radiusAtom);
    const space = ctx.get(spaceFactorAtom);
    const font = ctx.get(fontAtom);
    const size = ctx.get(textSizeTermAtom);
    const lineHeight = ctx.get(lineHeightTermAtom);
    const date = new Date().toISOString();

    if (ctx.get(scenarioModalAtom)) {
      return autoSave;
    }

    return {
      name: defaultAutoSaveName,
      createdAt: date,
      modifiedAt: date,
      theme: {
        colors: {
          light: colorsLight,
          dark: colorsDark,
        },
        space,
        radius,
        font: {
          font,
          size,
          lineHeight,
        },
        shadow: {
          colors: {
            light: shadowLightColors,
            dark: shadowDarkColors,
          },
          params: shadowParams,
        },
      },
    };
  });

ctx.subscribe(saveAction, () => {
  const preset = ctx.get(autoSavePresetAtom);
  const flag = ctx.get(scenarioModalAtom);
  if (!flag) {
    localStorage.setItem(AUTO_SAVE_PRESET_KEY, JSON.stringify(preset));
  }
});
