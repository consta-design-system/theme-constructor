import { useLink } from '@consta/stand/src/hooks/useLink';
import { getGroups } from '@consta/uikit/__internal__/src/utils/getGroups';
import { Text } from '@consta/uikit/Text';
import { useAction } from '@reatom/npm-react';
import React, { useMemo, useState } from 'react';

import { useConstructorPresets } from '##/hooks/useConstructorPresets';
import { onSetPresetValue } from '##/modules/presets';
import { defaultPresetValue } from '##/utils/theme/defaultValues';

type MenuItem = {
  label: string;
  onClick?: React.MouseEventHandler;
  groupId?: string;
  href?: string;
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

type Params = {
  onClose?: () => void;
  inputRef?: React.RefObject<HTMLInputElement>;
};

export const useMenu = (params: Params) => {
  const { onClose, inputRef } = params;
  const [modalType, setModalType] = useState<ModalType | undefined>();

  const { presets, hasChanges, clearPreset } = useConstructorPresets();

  const setPresetValue = useAction(onSetPresetValue);

  const [href, onClick] = useLink({ to: 'HOME' });

  const clearAutoSave = () => {
    setPresetValue(defaultPresetValue);
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
        label: 'Импортировать тему',
        groupId: 'constructor',
        onClick: () => inputRef?.current?.click(),
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
        onClick,
        href,
      },
      // {
      //   label: 'Гайд по конструктору',
      //   groupId: 'navigation',
      // },
    ];
  }, [inputRef?.current]);

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
