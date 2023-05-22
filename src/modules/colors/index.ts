import { Atom, atom } from '@reatom/core';

import { ColorBase } from '##/types/theme';
import {
  defaultDarkColors,
  defaultLightColors,
} from '##/utils/theme/defaultValues';

import { createColorPropAtoms } from './helpers';

export const lightColorFabricAtoms = Object.keys(defaultLightColors).map(
  (key) => ({
    name: key as keyof ColorBase,
    atoms: createColorPropAtoms(defaultLightColors[key as keyof ColorBase]),
  }),
);

export const lightColorsAtom: Atom<ColorBase> = atom((ctx) => {
  const colors: Partial<ColorBase> = {};
  lightColorFabricAtoms.forEach(({ name, atoms }) => {
    colors[name] = ctx.get(atoms[3]);
    ctx.spy(atoms[3]);
  });
  return colors as ColorBase;
});

export const darkColorFabricAtoms = Object.keys(defaultDarkColors).map(
  (key) => ({
    name: key as keyof ColorBase,
    atoms: createColorPropAtoms(defaultDarkColors[key as keyof ColorBase]),
  }),
);

export const darkColorsAtom: Atom<ColorBase> = atom((ctx) => {
  const colors: Partial<ColorBase> = {};
  darkColorFabricAtoms.forEach(({ name, atoms }) => {
    colors[name] = ctx.get(atoms[3]);
    ctx.spy(atoms[3]);
  });
  return colors as ColorBase;
});

