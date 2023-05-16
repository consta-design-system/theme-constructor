import { SnackBarItemStatus } from '@consta/uikit/SnackBar';
import { useAction, useAtom } from '@reatom/npm-react';
import React, { useMemo } from 'react';

import { autoSavePresetAtom } from '##/modules/autosave';
import { darkColorsAtom, lightColorsAtom } from '##/modules/colors';
import {
  fontAtom,
  lineHeightTermAtom,
  textSizeTermAtom,
} from '##/modules/font';
import { messagesAtom } from '##/modules/messages';
import {
  currentPresetAtom,
  onSetPresetValue,
  presetsAtom,
} from '##/modules/presets';
import { radiusAtom } from '##/modules/radius';
import {
  shadowDarkColorsAtom,
  shadowLightColorsAtom,
  shadowParamsAtom,
} from '##/modules/shadow';
import { spaceFactorAtom } from '##/modules/space';
import { DeepPartial } from '##/types/DeepPartial';
import { ConstructorThemePreset } from '##/types/theme';
import { presetsCompare } from '##/utils/theme/comparator';
import { defaultPresetValue } from '##/utils/theme/defaultValues';
import { getPresetFromAutoSave } from '##/utils/theme/getPresetFromAutoSave';
import { generateUUID } from '##/utils/uuid';

export const useConstructorPresets = () => {
  // Parametrs
  const [radius] = useAtom(radiusAtom);
  const [space] = useAtom(spaceFactorAtom);
  const [font] = useAtom(fontAtom);
  const [size] = useAtom(textSizeTermAtom);
  const [lineHeight] = useAtom(lineHeightTermAtom);
  const [lightColors] = useAtom(lightColorsAtom);
  const [darkColors] = useAtom(darkColorsAtom);
  const [lightShadowColors] = useAtom(shadowLightColorsAtom);
  const [darkShadowColors] = useAtom(shadowDarkColorsAtom);
  const [shadowOptions] = useAtom(shadowParamsAtom);

  // Presets
  const [presets, setPresets] = useAtom(presetsAtom);
  const [currentPresset, setCurrentPreset] = useAtom(currentPresetAtom);
  const [autoSave] = useAtom(autoSavePresetAtom);

  const setPresetValue = useAction(onSetPresetValue);

  // Messages

  const [messages, setMessages] = useAtom(messagesAtom);

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
          setPresetValue(theme);
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
    setPresetValue(getPresetFromAutoSave(preset));
  };

  const onSave = (type: 'new' | 'old', name: string) => {
    const oldVersion = type === 'old' ? getSavedPreset(name) : null;
    const preset = constructThemeData(name, oldVersion ?? undefined);
    const arr = [...presets.filter((el) => el.name !== name), preset];
    setPresets(arr);
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
    setPresetValue(defaultPresetValue);
    setCurrentPreset(null);
  };

  const onDelete = (preset: ConstructorThemePreset) => {
    setPresets(presets.filter((el) => el.name !== preset.name));
    if (currentPresset?.name === preset.name) {
      clearPreset();
    }
  };

  const onOpen = (preset: ConstructorThemePreset) => {
    setPresetValue(preset.theme);
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
