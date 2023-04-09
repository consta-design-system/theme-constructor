import './Menu.css';

import { IconAdd } from '@consta/icons/IconAdd';
import { IconClose } from '@consta/icons/IconClose';
import { IconQuestion } from '@consta/icons/IconQuestion';
import { Button } from '@consta/uikit/Button';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Sidebar } from '@consta/uikit/Sidebar';
import { Text } from '@consta/uikit/Text';
import React, { useState } from 'react';

import { useConstructorPresets } from '##/hooks/useConstructorPresets';
import IconFeedback from '##/icons/Feedback.icon.svg';
import IconTelegram from '##/icons/Telegram.icon.svg';
import { cn } from '##/utils/bem';

import { BannerButton } from '../BannerButton';
import { DownloadModal } from '../DownloadModal';
import { InfoModal } from '../InfoModal';
import { SaveModal } from '../SaveModal';
import { ThemesModal } from '../ThemesModal';
import { useMenu } from './useMenu';

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
};

const cnMenu = cn('Menu');

export const Menu = (props: Props) => {
  const { isOpen, onClose: onCloseProp } = props;
  const [path, setPath] = useState<string | undefined>();

  const {
    groups,
    modalType,
    onClose: onCloseModal,
    setModalType,
    clearAutoSave,
  } = useMenu(onCloseProp);
  const { clearPreset } = useConstructorPresets();

  const onClose = () => {
    onCloseModal();
    onCloseProp?.();
  };

  return (
    <Sidebar
      isOpen={isOpen}
      className={cnMenu(null, [cnMixSpace({ pT: 'xl', pB: '2xl', pH: 'm' })])}
      position="left"
      onClickOutside={onClose}
    >
      <div className={cnMenu('Navigation')}>
        <Button
          onlyIcon
          onClick={onClose}
          iconLeft={IconClose}
          view="ghost"
          className={cnMixSpace({ mB: 'l' })}
          size="s"
          form="round"
        />
        <div className={cnMenu('List')}>
          {groups.map(({ group, items }, index) => (
            <div
              key={cnMenu('Group', { index })}
              className={cnMenu('Block', [cnMixSpace({ pV: 'xs' })])}
            >
              {group?.label && (
                <Text
                  view="secondary"
                  size="xs"
                  lineHeight="xs"
                  weight="bold"
                  transform="uppercase"
                  className={cnMenu('Group', [cnMixSpace({ pH: 'xs' })])}
                >
                  {group.label}
                </Text>
              )}
              {items.map((item, i) => (
                <Text
                  key={cnMenu('Item', { index, i })}
                  as="button"
                  size="s"
                  lineHeight="xs"
                  className={cnMenu('Item', [cnMixSpace({ pH: 'xs' })])}
                  onClick={item.onClick}
                >
                  {item.label}
                  {item.rightSide}
                </Text>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className={cnMenu('Banners')}>
        <BannerButton
          className={cnMixSpace({ mB: 'xs' })}
          label="Сообщить о проблеме"
          as="div"
          onClick={() => {
            setPath(
              'https://github.com/consta-design-system/uikit/issues/new/choose',
            );
            setModalType('quit');
          }}
          icon={IconFeedback}
          description="Исправим ошибку, которую вы найдёте"
        />
        <BannerButton
          label="Telegram"
          as="div"
          icon={IconTelegram}
          onClick={() => {
            setPath('https://t.me/Consta_Chat');
            setModalType('quit');
          }}
        />
      </div>
      <ThemesModal
        isOpen={modalType === 'list' || modalType === 'open'}
        onClose={onClose}
      />
      <InfoModal
        isOpen={modalType === 'quit'}
        onClose={onClose}
        title="Покинуть страницу"
        iconStatus="primary"
        content="Вы точно хотите покинуть страницу? Изменения в текущей теме не будут сохранены"
        titleIcon={IconQuestion}
        buttons={[
          {
            label: 'Уйти',
            view: 'primary',
            onClick: () => {
              onClose();
              clearAutoSave();
              window.open(path, '_blank');
            },
          },
          {
            label: 'Сохранить текущую тему',
            onClick: () => setModalType('save'),
          },
        ]}
      />
      <InfoModal
        isOpen={modalType === 'new'}
        onClose={onClose}
        title="Новая тема"
        content="Вы точно хотите сбросить изменения и начать заново? Изменения в текущей теме не будут сохранены"
        titleIcon={IconAdd}
        buttons={[
          {
            label: 'Продолжить',
            view: 'primary',
            onClick: () => {
              clearPreset();
              onClose();
              clearAutoSave();
            },
          },
          {
            label: 'Сохранить текущую тему',
            onClick: () => setModalType('save'),
          },
        ]}
      />
      <SaveModal isOpen={modalType === 'save'} onClose={onClose} />
      <DownloadModal isOpen={modalType === 'download'} onClose={onClose} />
    </Sidebar>
  );
};
