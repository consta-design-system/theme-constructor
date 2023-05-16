import { action, atom } from '@reatom/core';
import { onUpdate } from '@reatom/hooks';

export const saveAction = action();

export const atomWithCalledAction = <T>(initialValue: T) => {
  const targetAtom = atom<T>(initialValue);

  onUpdate(targetAtom, (ctx) => {
    saveAction(ctx);
  });

  return targetAtom;
};
