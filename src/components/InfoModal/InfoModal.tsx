import './InfoModal.css';

import { IconComponent } from '@consta/icons/Icon';
import { Button, ButtonPropView } from '@consta/uikit/Button';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Modal } from '@consta/uikit/Modal';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cnMixModal } from '##/mixs/MixModal';
import { cn } from '##/utils/bem';

const cnInfoModal = cn('InfoModal');

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
  content?: string | React.ReactNode;
  title?: string;
  titleIcon?: IconComponent;
  iconStatus?: 'default' | 'alert' | 'primary';
  buttons?: Array<{
    label: string;
    view?: ButtonPropView | 'alert';
    onClick?: React.MouseEventHandler;
  }>;
};

export const InfoModal = (props: Props) => {
  const {
    isOpen,
    onClose,
    iconStatus = 'default',
    content,
    title,
    titleIcon: Icon,
    buttons,
  } = props;

  return (
    <Modal
      className={cnInfoModal()}
      rootClassName={cnMixModal('Root')}
      isOpen={isOpen}
      onClickOutside={onClose}
    >
      {(Icon || title) && (
        <div className={cnMixModal('Title', {}, [cnMixSpace({ p: 'l' })])}>
          {Icon && (
            <div
              className={cnMixModal('Icon', { iconStatus }, [
                cnMixSpace({ p: '2xs' }),
              ])}
            >
              <Icon
                size="s"
                view={iconStatus === 'default' ? 'secondary' : undefined}
              />
            </div>
          )}
          {title && (
            <Text view="secondary" size="l" lineHeight="m" weight="semibold">
              {title}
            </Text>
          )}
        </div>
      )}
      <div
        className={cnInfoModal('Wrapper', [cnMixSpace({ pV: 'xl', pH: 'l' })])}
      >
        {typeof content === 'string' ? (
          <Text size="m" lineHeight="m" weight="semibold">
            {content}
          </Text>
        ) : (
          content ?? null
        )}
      </div>
      <div
        className={cnMixModal('Buttons', { buttonsAlign: 'vertical' }, [
          cnMixSpace({ pV: 'm', pH: 'l' }),
        ])}
      >
        {buttons?.map(({ label, view = 'ghost', onClick }, index) => (
          <Button
            key={cnInfoModal('Button', { index })}
            label={label}
            onClick={onClick}
            className={cnInfoModal('Button', { view })}
            view={view === 'alert' ? 'primary' : view}
            size="m"
            width="full"
          />
        ))}
        <Button
          width="full"
          view="ghost"
          size="m"
          label="Отменить"
          onClick={onClose}
        />
      </div>
    </Modal>
  );
};
