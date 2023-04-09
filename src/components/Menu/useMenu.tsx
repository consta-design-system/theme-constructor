import { getGroups } from '@consta/uikit/__internal__/src/utils/getGroups';
import { Text } from '@consta/uikit/Text';
import { useAction } from '@reatom/npm-react';
import React, { useMemo, useState } from 'react';

import { useConstructorPresets } from '##/hooks/useConstructorPresets';
import { autoSavePresetAtom } from '##/modules/presets';
import { DeepPartial } from '##/types/DeepPartial';
import { ConstructorThemePreset } from '##/types/theme';

type MenuItem = {
  label: string;
  onClick?: React.MouseEventHandler;
  groupId?: string;
  rightSide?: React.ReactNode;
};

type ModalType = 'new' | 'open' | 'save' | 'download' | 'list' | 'quit';

const groupsArr = [
  {
    label: 'Конструктор',
    id: 'constructor',
  },
  {
    label: 'Навигация',
    id: 'navigation',
  },
];

export const useMenu = (onClose?: () => void) => {
  const [modalType, setModalType] = useState<ModalType | undefined>();

  const { presets, hasChanges, clearPreset } = useConstructorPresets();

  const setAutoSavePreset = useAction(
    (ctx, value: DeepPartial<ConstructorThemePreset> | null) =>
      autoSavePresetAtom(ctx, value),
  );

  const clearAutoSave = () => {
    setAutoSavePreset(null);
  };

  const items: MenuItem[] = useMemo(() => {
    return [
      {
        label: 'Новая тема',
        groupId: 'constructor',
        onClick: () => {
          if (hasChanges) {
            setModalType('new');
          } else {
            clearPreset();
            onClose?.();
            clearAutoSave();
          }
        },
      },
      {
        label: 'Открыть тему',
        groupId: 'constructor',
        onClick: () => setModalType('open'),
      },
      {
        label: 'Сохранить тему',
        groupId: 'constructor',
        onClick: () => setModalType('save'),
      },
      {
        label: 'Скачать тему',
        groupId: 'constructor',
        onClick: () => setModalType('download'),
      },
      {
        label: 'Сохранённые темы',
        onClick: () => setModalType('list'),
        rightSide:
          presets.length > 0 ? (
            <Text size="s" lineHeight="m" view="link">
              {presets.length}
            </Text>
          ) : undefined,
      },
      {
        label: 'Портал Consta',
        groupId: 'navigation',
      },
      {
        label: 'Гайд по конструктору',
        groupId: 'navigation',
      },
    ];
  }, []);

  const groups = getGroups(
    items,
    (item) => item.groupId,
    groupsArr,
    (group) => group.id,
    (a, b) => (a.group?.label === 'constructor' ? -1 : 1),
  );

  return {
    modalType,
    groups,
    onClose: () => setModalType(undefined),
    setModalType,
    clearAutoSave,
  };
};
