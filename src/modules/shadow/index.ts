import { Atom, atom } from '@reatom/core';

import { ShadowColors, ShadowsOptions } from '##/types/theme';
import {
  defaultShadowDarkColors,
  defaultShadowLightColors,
  defaultShadowParams,
} from '##/utils/theme/defaultValues';

import { createShadowColorAtoms, createShadowParamsAtom } from './helper';

export const shadowLightColorFabricAtoms = Object.keys(
  defaultShadowLightColors,
).map((key) => ({
  name: key as keyof ShadowColors,
  atoms: createShadowColorAtoms(
    defaultShadowLightColors[key as keyof ShadowColors],
  ),
}));

export const shadowLightColorsAtom: Atom<ShadowColors> = atom((ctx) => {
  const colors: Partial<ShadowColors> = {};
  shadowLightColorFabricAtoms.forEach(({ name, atoms }) => {
    colors[name] = ctx.get(atoms[4]);
    ctx.spy(atoms[4]);
  });
  return colors as ShadowColors;
});

export const shadowDarkColorFabricAtoms = Object.keys(
  defaultShadowDarkColors,
).map((key) => ({
  name: key as keyof ShadowColors,
  atoms: createShadowColorAtoms(
    defaultShadowDarkColors[key as keyof ShadowColors],
  ),
}));

export const shadowDarkColorsAtom: Atom<ShadowColors> = atom((ctx) => {
  const colors: Partial<ShadowColors> = {};
  shadowDarkColorFabricAtoms.forEach(({ name, atoms }) => {
    colors[name] = ctx.get(atoms[4]);
    ctx.spy(atoms[4]);
  });
  return colors as ShadowColors;
});

export const shadowParamsFabricAtoms = Object.keys(defaultShadowParams).map(
  (key) => ({
    name: key as keyof ShadowColors,
    atoms: createShadowParamsAtom(
      defaultShadowParams[key as keyof ShadowColors],
    ),
  }),
);

export const shadowParamsAtom: Atom<ShadowsOptions> = atom((ctx) => {
  const colors: Partial<ShadowsOptions> = {};
  shadowParamsFabricAtoms.forEach(({ name, atoms }) => {
    colors[name] = ctx.get(atoms[6]);
    ctx.spy(atoms[6]);
  });
  return colors as ShadowsOptions;
});
