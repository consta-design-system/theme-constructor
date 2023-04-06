import { ConstructorThemePreset } from '##/types/theme';

export const presetsCompare = (
  p1: ConstructorThemePreset,
  p2: ConstructorThemePreset,
) => {
  return compareObjects(p1, p2, ['modifiedAt', 'createdAt', 'name']);
};

export const compareObjects = (
  o1: Record<string, unknown>,
  o2: Record<string, unknown>,
  excludedKeys?: string[],
) => {
  let flag = true;
  // eslint-disable-next-line guard-for-in
  for (const key in o1) {
    if (excludedKeys?.indexOf(key) ?? -1 >= 0) {
      continue;
    }
    const param1 = o1[key];
    const param2 = o2[key];

    if (typeof param1 !== typeof param2) {
      flag = false;
      return;
    }
    if (typeof param1 === 'object' && param1 !== null) {
      const innerFlag = compareObjects(
        param1 as Record<string, unknown>,
        param2 as Record<string, unknown>,
        excludedKeys,
      );
      if (!innerFlag) {
        flag = false;
        return;
      }
    }
    return param1 === param2;
  }

  return flag;
};
