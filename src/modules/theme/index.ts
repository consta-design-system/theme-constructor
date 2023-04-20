import { IconComponent } from '@consta/icons/Icon';
import { IconMoon } from '@consta/icons/IconMoon';
import { IconSun } from '@consta/icons/IconSun';
import {
  presetGpnDark,
  presetGpnDefault,
  ThemePreset,
} from '@consta/uikit/Theme';
import { atom } from '@reatom/core';
import { onUpdate } from '@reatom/hooks';

const KEY = 'theme';

export const iconsMap: Record<string, IconComponent> = {
  gpnDark: IconMoon,
  gpnDefault: IconSun,
};

export const labelMap: Record<string, string> = {
  gpnDark: 'Тёмная',
  gpnDefault: 'Светлая',
};

const getDefaultTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)')?.matches) {
    return presetGpnDark;
  }
  return presetGpnDefault;
};

export const themes = [presetGpnDefault, presetGpnDark];

export const getThemeKey = (theme: ThemePreset) => theme.color.primary;

export const getThemeIcon = (theme: ThemePreset) =>
  iconsMap[theme.color.primary];

export const getThemeLabel = (theme: ThemePreset) =>
  labelMap[theme.color.primary];

const getSnapTheme = (key: string) =>
  themes.find((item) => item.color.primary === localStorage.getItem(key));

export const themeAtom = atom<ThemePreset>(
  getSnapTheme(KEY) || getDefaultTheme(),
);

onUpdate(themeAtom, (_ctx, value) => {
  localStorage.setItem(KEY, value.color.primary);
});
