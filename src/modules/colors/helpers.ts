import { atom, AtomMut } from '@reatom/core';
import { onUpdate } from '@reatom/hooks';
import Color from 'color';

import { createFixedHsl, hslToHslaStr, rgbToRgbaStr } from '##/utils/sizes';

import { atomWithCalledAction } from '../autosave/helper';

export type ColorFabricResponse = [
  AtomMut<string | null>,
  AtomMut<string | null>,
  AtomMut<string | null>,
  AtomMut<string>,
];

export const createColorPropAtoms = (initial: string): ColorFabricResponse => {
  const color = Color(initial);
  const rgba = rgbToRgbaStr(color.rgb().string(), color.alpha());
  const inputHexAtom = atom<string | null>(color.hex());
  const inputRgbaAtom = atom<string | null>(rgba);
  const inputHslaAtom = atom<string | null>(
    hslToHslaStr(createFixedHsl(color).hsl().string(), color.alpha()),
  );
  const inputBaseAtom = atomWithCalledAction<string>(rgba);

  onUpdate(inputBaseAtom, (ctx, value) => {
    const newColor = Color(value);
    inputHexAtom(ctx, newColor.hex());
    inputRgbaAtom(ctx, rgbToRgbaStr(newColor.rgb().string(), newColor.alpha()));
    inputHslaAtom(
      ctx,
      hslToHslaStr(createFixedHsl(newColor).hsl().string(), newColor.alpha()),
    );
  });

  return [inputHexAtom, inputRgbaAtom, inputHslaAtom, inputBaseAtom];
};
