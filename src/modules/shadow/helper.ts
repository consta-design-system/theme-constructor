import { atom, AtomMut } from '@reatom/core';
import { onUpdate } from '@reatom/hooks';
import Color from 'color';

import { ShadowParams } from '##/types/theme';
import { createColor } from '##/utils/theme/colors';

import { atomWithCalledAction } from '../autosave/helper';

export type ShadowColorFabricResponse = [
  AtomMut<string | null>,
  AtomMut<string | null>,
  AtomMut<number | null>,
  AtomMut<number | null>,
  AtomMut<[string, string]>,
];

export type ShadowParamsFabricResponse = [
  AtomMut<number | null>,
  AtomMut<number | null>,
  AtomMut<number | null>,
  AtomMut<number | null>,
  AtomMut<number | null>,
  AtomMut<number | null>,
  AtomMut<ShadowParams>,
];

export const createShadowColorAtoms = (
  initial: [string, string],
): ShadowColorFabricResponse => {
  const color1 = Color(initial[0]);
  const color2 = Color(initial[1]);
  const inputHexAtom = atom<string | null>(color1.hex());
  const inputRgbAtom = atom<string | null>(color1.rgb().alpha(1).string());
  const inputAlpha1 = atom<number | null>(color1.alpha());
  const inputAlpha2 = atom<number | null>(color2.alpha());
  const inputBaseAtom = atomWithCalledAction<[string, string]>(
    createColor(color1.hex(), [color1.alpha(), color2.alpha()]),
  );

  onUpdate(inputBaseAtom, (ctx, value) => {
    const newColor1 = Color(value[0]);
    const newColor2 = Color(value[1]);
    inputHexAtom(ctx, newColor1.hex());
    inputRgbAtom(ctx, newColor1.rgb().alpha(1).string());
    inputAlpha1(ctx, newColor1.alpha());
    inputAlpha2(ctx, newColor2.alpha());
  });

  return [inputHexAtom, inputRgbAtom, inputAlpha1, inputAlpha2, inputBaseAtom];
};

export const createShadowParamsAtom = (
  inital: ShadowParams,
): ShadowParamsFabricResponse => {
  const inputhX1Atom = atom<number | null>(inital.x[0]);
  const inputhX2Atom = atom<number | null>(inital.x[1]);
  const inputhY1Atom = atom<number | null>(inital.y[0]);
  const inputhY2Atom = atom<number | null>(inital.y[1]);
  const inputhBlur1Atom = atom<number | null>(inital.blur[0]);
  const inputhBlur2Atom = atom<number | null>(inital.blur[1]);
  const inputParamsAtom = atomWithCalledAction<ShadowParams>(inital);

  onUpdate(inputParamsAtom, (ctx, value) => {
    inputhX1Atom(ctx, value.x[0]);
    inputhX2Atom(ctx, value.x[1]);
    inputhY1Atom(ctx, value.y[0]);
    inputhY2Atom(ctx, value.y[1]);
    inputhBlur1Atom(ctx, value.blur[0]);
    inputhBlur2Atom(ctx, value.blur[1]);
  });

  return [
    inputhX1Atom,
    inputhX2Atom,
    inputhY1Atom,
    inputhY2Atom,
    inputhBlur1Atom,
    inputhBlur2Atom,
    inputParamsAtom,
  ];
};
