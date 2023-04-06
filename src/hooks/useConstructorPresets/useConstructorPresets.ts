import { SnackBarItemStatus } from '@consta/uikit/SnackBar';
import { useAction, useAtom } from '@reatom/npm-react';
import React, { useMemo } from 'react';

import { colorDarkAtom, colorLightAtom } from '##/modules/colors';
import {
  fontAtom,
  lineHeightTermAtom,
  textSizeTermAtom,
} from '##/modules/font';
import { Message, messagesAtom } from '##/modules/messages';
import {
  autoSavePresetAtom,
  currentPresetAtom,
  presetsAtom,
} from '##/modules/presets';
import { radiusAtom } from '##/modules/radius';
import {
  shadowDarkColorsAtom,
  shadowLightColorsAtom,
  shadowOptionsAtom,
} from '##/modules/shadow';
import { spaceFactorAtom } from '##/modules/space';
import { DeepPartial } from '##/types/DeepPartial';
import {
  ColorBase,
  ConstructorThemePreset,
  ShadowColors,
  ShadowParams,
} from '##/types/theme';
import { presetsCompare } from '##/utils/theme/comparator';
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
} from '##/utils/theme/defaultValues';
import { getPresetFromAutoSave } from '##/utils/theme/getPresetFromAutoSave';
import { generateUUID } from '##/utils/uuid';

export const useConstructorPresets = () => {
  // Parametrs
  const [radius] = useAtom(radiusAtom);
  const [space] = useAtom(spaceFactorAtom);
  const [font] = useAtom(fontAtom);
  const [size] = useAtom(textSizeTermAtom);
  const [lineHeight] = useAtom(lineHeightTermAtom);
  const [lightColors] = useAtom(colorLightAtom);
  const [darkColors] = useAtom(colorDarkAtom);
  const [lightShadowColors] = useAtom(shadowLightColorsAtom);
  const [darkShadowColors] = useAtom(shadowDarkColorsAtom);
  const [shadowOptions] = useAtom(shadowOptionsAtom);

  // Setters

  const setRadius = useAction((ctx, value: number) => radiusAtom(ctx, value));
  const setSpace = useAction((ctx, value: number) =>
    spaceFactorAtom(ctx, value),
  );
  const setFont = useAction((ctx, value: string) => fontAtom(ctx, value));
  const setSize = useAction((ctx, value: number) =>
    textSizeTermAtom(ctx, value),
  );
  const setLineHeigt = useAction((ctx, value: number) =>
    lineHeightTermAtom(ctx, value),
  );
  const setLightColors = useAction((ctx, value: ColorBase) =>
    colorLightAtom(ctx, value),
  );
  const setDarkColors = useAction((ctx, value: ColorBase) =>
    colorDarkAtom(ctx, value),
  );
  const setLightShadowColors = useAction((ctx, value: ShadowColors) =>
    shadowLightColorsAtom(ctx, value),
  );
  const setDarkShadowColors = useAction((ctx, value: ShadowColors) =>
    shadowDarkColorsAtom(ctx, value),
  );
  const setShadowOptions = useAction(
    (ctx, value: Record<keyof ShadowColors, ShadowParams>) =>
      shadowOptionsAtom(ctx, value),
  );

  // Presets
  const [presets] = useAtom(presetsAtom);
  const [currentPresset] = useAtom(currentPresetAtom);
  const [autoSave] = useAtom(autoSavePresetAtom);

  const setPresets = useAction((ctx, value: ConstructorThemePreset[]) =>
    presetsAtom(ctx, value),
  );

  const setCurrentPreset = useAction(
    (ctx, value: ConstructorThemePreset | null) =>
      currentPresetAtom(ctx, value),
  );

  const setAutoSavePreset = useAction(
    (ctx, value: DeepPartial<ConstructorThemePreset> | null) =>
      autoSavePresetAtom(ctx, value),
  );

  // Messages

  const [messages] = useAtom(messagesAtom);

  const setMessages = useAction((ctx, value: Message[]) =>
    messagesAtom(ctx, value),
  );

  const createMessage = (
    title: string,
    description: string | undefined,
    view?: SnackBarItemStatus,
  ) => {
    setMessages([
      { title, description, view, id: generateUUID() },
      ...messages,
    ]);
  };

  const constructThemeData = (
    name: string,
    oldPreset?: ConstructorThemePreset,
  ) => {
    const date = new Date().toISOString();
    const preset: ConstructorThemePreset = {
      name,
      createdAt: oldPreset?.createdAt ?? date,
      modifiedAt: date,
      theme: {
        colors: {
          light: lightColors,
          dark: darkColors,
        },
        font: {
          font,
          size,
          lineHeight,
        },
        space,
        radius,
        shadow: {
          colors: {
            light: lightShadowColors,
            dark: darkShadowColors,
          },
          params: shadowOptions,
        },
      },
    };
    return preset;
  };

  const getSavedPreset = (name: string) => {
    return presets.find((el) => el.name === name);
  };

  const onUploadPresetFile: React.ChangeEventHandler<HTMLInputElement> = (
    e,
  ) => {
    const onLoad = (e: ProgressEvent<FileReader>) => {
      const { result } = e.target ?? {};

      if (result) {
        try {
          const { theme } = JSON.parse(
            result?.toString(),
          ) as ConstructorThemePreset;
          setRadius(theme.radius);
          setSpace(theme.space);
          setFont(theme.font.font);
          setSize(theme.font.size);
          setLineHeigt(theme.font.lineHeight);
          setDarkColors(theme.colors.dark);
          setLightColors(theme.colors.light);
          setShadowOptions(theme.shadow.params);
          setDarkShadowColors(theme.shadow.colors.dark);
          setLightShadowColors(theme.shadow.colors.light);
        } catch {
          createMessage(
            'Ошибка загрузки',
            'Файл имеет не верный формат',
            'alert',
          );
        }
      }
    };
    const { files } = e.target as { files: FileList };
    const reader = new FileReader();

    reader.onload = onLoad;
    reader.readAsText(files[0]);
  };

  const { newPreset, hasChanges } = useMemo(() => {
    const newPreset = currentPresset
      ? constructThemeData(currentPresset.name)
      : null;
    return {
      newPreset,
      hasChanges:
        newPreset && currentPresset
          ? presetsCompare(currentPresset, newPreset)
          : !!autoSave,
    };
  }, [
    radius,
    space,
    size,
    lightColors,
    lightShadowColors,
    lineHeight,
    darkColors,
    darkShadowColors,
    font,
    shadowOptions,
  ]);

  const onOpenAutoSave = (preset: DeepPartial<ConstructorThemePreset>) => {
    const { colors, shadow, space, radius, font } =
      getPresetFromAutoSave(preset);
    setRadius(radius);
    setSpace(space);
    setFont(font.font);
    setSize(font.size);
    setLineHeigt(font.lineHeight);
    setDarkColors(colors.dark);
    setLightColors(colors.light);
    setShadowOptions(shadow.params);
    setDarkShadowColors(shadow.colors.dark);
    setLightShadowColors(shadow.colors.light);
  };

  const onSave = (type: 'new' | 'old', name: string) => {
    const oldVersion = type === 'old' ? getSavedPreset(name) : null;
    const preset = constructThemeData(name, oldVersion ?? undefined);
    const arr = [...presets.filter((el) => el.name !== name), preset];
    setPresets(arr);
    setAutoSavePreset(null);
    if (preset) {
      createMessage(
        'Тема успешно сохранена',
        'Теперь можно в любой момент открыть её и продолжить работу. Даже, если закроете вкладку.',
        'normal',
      );
    } else {
      createMessage(
        'Ошибка сохранения',
        'Попробуйте сохранить тему повторно.',
        'alert',
      );
    }
  };

  const clearPreset = () => {
    setRadius(defaultRadius);
    setSpace(defaultSpace);
    setFont(defaultFont);
    setSize(defaultTextSize);
    setLineHeigt(defaultLineHeight);
    setDarkColors(defaultDarkColors);
    setLightColors(defaultLightColors);
    setShadowOptions(defaultShadowParams);
    setDarkShadowColors(defaultShadowDarkColors);
    setLightShadowColors(defaultShadowLightColors);
    setCurrentPreset(null);
  };

  const onDelete = (preset: ConstructorThemePreset) => {
    setPresets(presets.filter((el) => el.name !== preset.name));
    if (currentPresset?.name === preset.name) {
      clearPreset();
    }
  };

  const onOpen = (preset: ConstructorThemePreset) => {
    const {
      theme: {
        colors: { light, dark },
        font: { font, size, lineHeight },
        space,
        shadow: {
          colors: { light: lightShadow, dark: darkShadow },
          params,
        },
        radius,
      },
    } = preset;
    setRadius(radius);
    setSpace(space);
    setFont(font);
    setSize(size);
    setLineHeigt(lineHeight);
    setDarkColors(dark);
    setLightColors(light);
    setShadowOptions(params);
    setDarkShadowColors(darkShadow);
    setLightShadowColors(lightShadow);
    setCurrentPreset(preset);
  };

  return {
    onSave,
    onUploadPresetFile,
    presets,
    onDelete,
    onOpenAutoSave,
    onOpen,
    clearPreset,
    hasChanges,
    newPreset,
    createMessage,
    getConstructedPreset: constructThemeData,
  };
};
