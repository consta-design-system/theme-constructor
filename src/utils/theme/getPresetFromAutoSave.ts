import { DeepPartial } from '##/types/DeepPartial';
import {
  ConstructorThemePreset,
  ShadowColors,
  ShadowParams,
} from '##/types/theme';

import {
  defaultDarkColors,
  defaultFont,
  defaultLightColors,
  defaultLineHeight,
  defaultRadius,
  defaultShadowDarkColors,
  defaultShadowLightColors,
  defaultShadowParams,
  defaultSpace,
  defaultTextSize,
} from './defaultValues';

const getUnionObject = <TYPE extends Record<string, unknown>>(
  obj: DeepPartial<TYPE> | undefined,
  defaultObj: TYPE,
): TYPE => {
  type Key = keyof TYPE;

  const copyObj = { ...defaultObj };
  if (obj) {
    Object.keys(obj).forEach((key) => {
      const param = obj[key as Key];
      if (param) {
        copyObj[key as Key] = (
          Array.isArray(param)
            ? (copyObj[key as Key] as string[] | number[]).map(
                (el, index) => param[index] ?? el,
              )
            : param
        ) as TYPE[Key];
      }
    });
  }
  return copyObj;
};

export const getPresetFromAutoSave = (
  preset: DeepPartial<ConstructorThemePreset>,
): ConstructorThemePreset['theme'] => {
  const { theme = {} } = preset;
  return {
    radius: theme.radius ?? defaultRadius,
    space: theme.space ?? defaultSpace,
    font: {
      font: theme.font?.font ?? defaultFont,
      size: theme.font?.size ?? defaultTextSize,
      lineHeight: theme.font?.lineHeight ?? defaultLineHeight,
    },
    shadow: {
      colors: {
        light: getUnionObject(
          theme.shadow?.colors?.light,
          defaultShadowLightColors,
        ),
        dark: getUnionObject(
          theme.shadow?.colors?.dark,
          defaultShadowDarkColors,
        ),
      },
      params: getUnionObject<Record<keyof ShadowColors, ShadowParams>>(
        theme.shadow?.params,
        defaultShadowParams,
      ),
    },
    colors: {
      light: getUnionObject(theme.colors?.light, defaultLightColors),
      dark: getUnionObject(theme.colors?.dark, defaultDarkColors),
    },
  };
};
