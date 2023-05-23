import './ThemesModal.css';

import { IconDocBlank } from '@consta/icons/IconDocBlank';
import { IconQuestion } from '@consta/icons/IconQuestion';
import { IconTrash } from '@consta/icons/IconTrash';
import { Button } from '@consta/uikit/Button';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Modal } from '@consta/uikit/Modal';
import { Text } from '@consta/uikit/Text';
import { useAtom } from '@reatom/npm-react';
import React, { useState } from 'react';

import { useConstructorPresets } from '##/hooks/useConstructorPresets';
import { cnMixModal } from '##/mixs/MixModal';
import { currentPresetAtom } from '##/modules/presets';
import { ConstructorThemePreset } from '##/types/theme';
import { cn } from '##/utils/bem';
import { presetsCompare } from '##/utils/theme/comparator';

import { InfoModal } from '../InfoModal';
import { SaveModal } from '../SaveModal';
import { dateFormatter } from './helper';

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
};

const cnThemesModal = cn('ThemesModal');

export const ThemesModal = (props: Props) => {
  const { isOpen, onClose } = props;

  const [currentTheme, setCurrentTheme] = useState<
    ConstructorThemePreset | undefined
  >();
  const [mode, setMode] = useState<'open' | 'delete' | 'save' | undefined>();

  const [currentPresset] = useAtom(currentPresetAtom);

  const { presets, onDelete, onOpen, getConstructedPreset } =
    useConstructorPresets();

  const handleClick = (
    item: ConstructorThemePreset,
    type: 'open' | 'delete',
  ) => {
    setCurrentTheme(item);
    if (type === 'open') {
      if (
        !currentPresset ||
        (currentPresset &&
          presetsCompare(
            currentPresset,
            getConstructedPreset(currentPresset.name),
          ))
      ) {
        handleThemeOpen(item);
      } else {
        setMode(type);
      }
    } else {
      setMode(type);
    }
  };

  const handleThemeOpen = (preset: ConstructorThemePreset) => {
    onOpen(preset);
    onClose?.();
  };

  const handleThemeDelete = (preset: ConstructorThemePreset) => {
    onDelete(preset);
    setMode(undefined);
  };

  if (mode === 'open' && currentTheme) {
    return (
      <InfoModal
        isOpen
        onClose={() => setMode(undefined)}
        title="Открыть тему"
        titleIcon={IconDocBlank}
        content="Вы точно хотите открыть существующую тему? Изменения в текущей теме не будут сохранены"
        buttons={[
          {
            label: 'Открыть',
            view: 'primary',
            onClick: () => currentTheme && handleThemeOpen(currentTheme),
          },
          {
            label: 'Сохранить текущую тему',
            onClick: () => setMode('save'),
          },
        ]}
      />
    );
  }

  if (mode === 'delete' && currentTheme) {
    return (
      <InfoModal
        isOpen
        onClose={() => setMode(undefined)}
        title="Удалить тему"
        titleIcon={IconQuestion}
        iconStatus="alert"
        content={
          <div>
            <Text
              size="m"
              lineHeight="m"
              weight="semibold"
              className={cnMixSpace({ mB: 'l' })}
            >
              Вы точно хотите удалить тему? Это действие невозможно откатить
            </Text>
            <Text
              view="ghost"
              size="m"
              lineHeight="m"
              className={cnMixSpace({ mB: 's' })}
            >
              О теме
            </Text>
            <Text weight="semibold" size="s" lineHeight="m">
              {currentTheme.name}
            </Text>
            <Text
              size="s"
              view="secondary"
              lineHeight="m"
            >{`Изменена ${dateFormatter(currentTheme.modifiedAt)}`}</Text>
          </div>
        }
        buttons={[
          {
            label: 'Удалить',
            view: 'alert',
            onClick: () => currentTheme && handleThemeDelete(currentTheme),
          },
        ]}
      />
    );
  }

  if (mode === 'save') {
    return <SaveModal isOpen onClose={() => setMode(undefined)} />;
  }

  return (
    <Modal
      isOpen={isOpen}
      onClickOutside={onClose}
      className={cnThemesModal()}
      rootClassName={cnMixModal('Root')}
    >
      <div className={cnMixModal('Title', {}, [cnMixSpace({ p: 'l' })])}>
        <div className={cnMixModal('Icon', {}, [cnMixSpace({ p: '2xs' })])}>
          <IconDocBlank size="s" view="secondary" />
        </div>
        <Text view="secondary" weight="semibold" size="l" lineHeight="m">
          Сохранённые темы
        </Text>
      </div>
      <div
        className={cnThemesModal('Wrapper', { empty: presets.length === 0 }, [
          cnMixSpace({ pV: 'xl', pH: 'l' }),
        ])}
      >
        {presets.length > 0 ? (
          <>
            <Text
              size="s"
              lineHeight="m"
              view="secondary"
              className={cnMixModal('Description', {}, [
                cnMixSpace({ p: 's', mB: '2xl' }),
              ])}
            >
              Обатите внимание, что мы храним темы в LocalStorage браузера,
              поэтому очистка кеша приведёт к удалению сохранённых тем
            </Text>
            {presets.map((item) => (
              <div
                key={cnThemesModal('Item', { key: item.name })}
                className={cnThemesModal('Item')}
              >
                <div className={cnThemesModal('ItemInfo')}>
                  <Text size="m" lineHeight="m">
                    {item.name}
                  </Text>
                  <Text size="s" lineHeight="m" view="secondary">
                    {dateFormatter(item.createdAt)}
                  </Text>
                </div>
                <div className={cnThemesModal('ItemButtons')}>
                  <Button
                    onClick={() => handleClick(item, 'delete')}
                    view="ghost"
                    onlyIcon
                    size="s"
                    iconLeft={IconTrash}
                  />
                  <Button
                    onClick={() => handleClick(item, 'open')}
                    size="s"
                    label="Открыть"
                  />
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className={cnThemesModal('Mock')}>
            <Text
              size="m"
              lineHeight="xs"
              weight="medium"
              align="center"
              className={cnMixSpace({ mB: 'xs' })}
            >
              Нет сохранённых тем
            </Text>
            <Text align="center" size="s" lineHeight="m" view="secondary">
              Вы можете внести изменения в текущую тему и сохранить её в
              LocalStorage браузера, чтобы продолжить работу позже
            </Text>
          </div>
        )}
      </div>
      <div
        className={cnMixModal('Buttons', {}, [
          cnMixSpace({ pV: 'm', pH: 'l' }),
        ])}
      >
        <Button onClick={onClose} view="ghost" size="m" label="Закрыть" />
      </div>
    </Modal>
  );
};
