import './ScenarioModal.css';

import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Modal } from '@consta/uikit/Modal';
import { Text } from '@consta/uikit/Text';
import { useFlag } from '@consta/uikit/useFlag';
import { useAtom } from '@reatom/npm-react';
import React, { useMemo } from 'react';

import { useConstructorPresets } from '##/hooks/useConstructorPresets';
import IconConsta from '##/icons/Consta.icon.svg';
import { autoSaveAtom } from '##/modules/presets';
import { cn } from '##/utils/bem';

import { ThemesModal } from '../ThemesModal';
import { dateFormatter } from '../ThemesModal/helper';
import { ScenarioModalItem } from './ScenarioModalItem';

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
};

const cnScenarioModal = cn('ScenarioModal');

export const ScenarioModal = (props: Props) => {
  const { isOpen, onClose } = props;

  const { presets, clearPreset, onOpenAutoSave } = useConstructorPresets();
  const [showListModal, setShowListModal] = useFlag();
  const [autoSave] = useAtom(autoSaveAtom);

  const items = useMemo(() => {
    return [
      ...(autoSave
        ? [
            {
              label: 'Восстановить сессию',
              description: autoSave.modifiedAt
                ? `Автосохранение, ${dateFormatter(autoSave.modifiedAt)}`
                : undefined,
              onClick: () => {
                onClose?.();
                onOpenAutoSave(autoSave);
              },
            },
          ]
        : []),
      {
        label: 'Новая тема',
        description: 'Начните работу с нашего шаблона',
        onClick: () => {
          clearPreset();
          onClose?.();
        },
      },
      {
        label: 'Открыть тему',
        description: 'Продолжите работу с вашей темой',
        onClick: setShowListModal.on,
        disabled: presets.length === 0,
      },
    ];
  }, []);

  return (
    <Modal
      isOpen={isOpen}
      onClickOutside={onClose}
      className={cnScenarioModal(null, [
        cnMixSpace({ pH: 'm', pT: 'xl', pB: '2xl' }),
      ])}
      rootClassName={cnScenarioModal('Root')}
    >
      <IconConsta />
      <Text
        weight="semibold"
        size="l"
        lineHeight="m"
        className={cnMixSpace({ mT: 's', mB: '2xs' })}
      >
        Конструктор тем Consta
      </Text>
      <Text
        size="s"
        lineHeight="m"
        view="secondary"
        className={cnMixSpace({ mB: '2xl' })}
      >
        Здесь вы можете настроить и сохранить модифицированную тему для
        дальнейшего использования в своих проектах
      </Text>
      {items.map((item, index) => (
        <ScenarioModalItem
          {...item}
          className={cnScenarioModal('Item')}
          key={cnScenarioModal('Item', { index })}
        />
      ))}
      <ThemesModal
        isOpen={showListModal}
        onClose={() => {
          setShowListModal.off();
          onClose?.();
        }}
      />
    </Modal>
  );
};
