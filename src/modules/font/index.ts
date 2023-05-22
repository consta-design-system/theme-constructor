import {
  defaultFont,
  defaultLineHeight,
  defaultTextSize,
} from '##/utils/theme/defaultValues';

import { atomWithCalledAction } from '../autosave/helper';

export const textSizeTermAtom = atomWithCalledAction<number>(defaultTextSize);

export const lineHeightTermAtom =
  atomWithCalledAction<number>(defaultLineHeight);

export const fontAtom = atomWithCalledAction<string>(defaultFont);
