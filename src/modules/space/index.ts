import { defaultSpace } from '##/utils/theme/defaultValues';

import { atomWithCalledAction } from '../autosave/helper';

export const spaceFactorAtom = atomWithCalledAction<number>(defaultSpace);

