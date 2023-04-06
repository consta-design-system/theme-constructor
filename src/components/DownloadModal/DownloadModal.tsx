import './DownloadModal.css';

import { IconDown } from '@consta/icons/IconDown';
import { Button } from '@consta/uikit/Button';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Modal } from '@consta/uikit/Modal';
import { Text } from '@consta/uikit/Text';
import { useAtom } from '@reatom/npm-react';
import React from 'react';

import { useConstructorPresets } from '##/hooks/useConstructorPresets';
import { useSave } from '##/hooks/useSave';
import { cnMixModal } from '##/mixs/MixModal';
import { currentPresetAtom } from '##/modules/presets';
import { cn } from '##/utils/bem';

const cnDownloadModal = cn('DownloadModal');

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
};

type SaveType = 'css' | 'json' | 'archive';

const types: Record<SaveType, string> = {
  css: 'CSS',
  json: 'JSON',
  archive: 'Архив CSS+JSON',
};

export const DownloadModal = (props: Props) => {
  const { isOpen, onClose } = props;

  const { createMessage, getConstructedPreset } = useConstructorPresets();

  const [currentPreset] = useAtom(currentPresetAtom);

  const onError = () => {
    createMessage(
      'Ошибка сохранения',
      'Попробуйте сохранить тему повторно.',
      'alert',
    );
  };

  const { onSave } = useSave({ onSuccess: onClose, onError });
  const handleSave = (type: SaveType) => {
    onSave(getConstructedPreset(currentPreset?.name ?? 'Example'), type);
  };

  return (
    <Modal
      className={cnDownloadModal()}
      rootClassName={cnMixModal('Root')}
      isOpen={isOpen}
      onClickOutside={onClose}
    >
      <div className={cnMixModal('Title', {}, [cnMixSpace({ p: 'l' })])}>
        <div className={cnMixModal('Icon', {}, [cnMixSpace({ p: '2xs' })])}>
          <IconDown view="secondary" size="s" />
        </div>
        <Text size="l" lineHeight="m" view="secondary" weight="semibold">
          Скачать тему
        </Text>
      </div>
      <div
        className={cnDownloadModal('Wrapper', [
          cnMixSpace({ pH: 'l', pV: 'xl' }),
        ])}
      >
        <Text
          size="s"
          lineHeight="m"
          view="secondary"
          className={cnMixModal('Description', {}, [
            cnMixSpace({ p: 's', mB: '2xl' }),
          ])}
        >
          Скачайте тему в подходящем формате. Итоговый пакет можно подключить к
          любому проекту на Consta
        </Text>
        {Object.keys(types).map((key) => (
          <div key={key} className={cnDownloadModal('Block')}>
            <Text size="m" lineHeight="m">
              {types[key as SaveType]}
            </Text>
            <Button
              label="Скачать"
              size="s"
              onClick={() => handleSave(key as SaveType)}
            />
          </div>
        ))}
      </div>
      <div
        className={cnMixModal('Buttons', {}, [
          cnMixSpace({ pV: 'm', pH: 'l' }),
        ])}
      >
        <Button view="ghost" size="m" label="Закрыть" onClick={onClose} />
      </div>
    </Modal>
  );
};
