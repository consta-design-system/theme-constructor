import { defaultRadius } from '##/utils/theme/defaultValues';

import { atomWithCalledAction } from '../autosave/helper';

export const radiusAtom = atomWithCalledAction<number>(defaultRadius);
