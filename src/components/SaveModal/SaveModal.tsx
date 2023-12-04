import './SaveModal.css';

import { IconSave } from '@consta/icons/IconSave';
import { Button } from '@consta/uikit/Button';
import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Modal } from '@consta/uikit/Modal';
import { Select } from '@consta/uikit/Select';
import { Text } from '@consta/uikit/Text';
import { TextField } from '@consta/uikit/TextField';
import { useFlag } from '@consta/uikit/useFlag';
import { useAtom } from '@reatom/npm-react';
import React, { useMemo, useState } from 'react';

import { useConstructorPresets } from '##/hooks/useConstructorPresets';
import { cnMixModal } from '##/mixs/MixModal';
import { currentPresetAtom } from '##/modules/presets';
import { ConstructorThemePreset } from '##/types/theme';
import { cn } from '##/utils/bem';

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
};

const cnSaveModal = cn('SaveModal');

const modes = [
  {
    id: 1,
    label: 'В новую тему',
  },
  {
    id: 2,
    label: 'В существующую тему',
  },
];

export const SaveModal = (props: Props) => {
  const { isOpen, onClose } = props;
  const [name, setName] = useState<string | null>(null);

  const [currentPreset] = useAtom(currentPresetAtom);

  const [mode, setMode] = useState<typeof modes[number] | null>(
    currentPreset ? modes[1] : modes[0],
  );
  const [currentTheme, setCurrentTheme] =
    useState<ConstructorThemePreset | null>(currentPreset);
  const [isError, setIsError] = useFlag();

  const disabled = useMemo(
    () => (mode?.id === 2 ? !currentTheme : !name),
    [mode, currentTheme, name],
  );

  const { presets, onSave: onSaveProp } = useConstructorPresets();

  const onSave = () => {
    if (
      mode?.id === 1 &&
      ((name?.length ?? 0) <= 4 || (name?.length ?? 0) >= 20)
    ) {
      setIsError.on();
    } else {
      const themeName = mode?.id === 1 ? name : currentTheme?.name;
      const type = mode?.id === 1 ? 'new' : 'old';
      if (themeName) {
        onSaveProp(type, themeName);
      }
      onClose?.();
    }
  };

  const handleChange = (value: string | null) => {
    if (isError) {
      setIsError.off();
    }
    setName(value);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClickOutside={onClose}
      className={cnSaveModal()}
      rootClassName={cnMixModal('Root')}
    >
      <div className={cnMixModal('Title', {}, [cnMixSpace({ p: 'l' })])}>
        <div className={cnMixModal('Icon', {}, [cnMixSpace({ p: '2xs' })])}>
          <IconSave view="secondary" size="s" />
        </div>
        <Text view="secondary" weight="semibold" size="l" lineHeight="m">
          Сохранить изменения
        </Text>
      </div>
      <div
        className={cnSaveModal('Wrapper', [
          cnMixSpace({ pT: 'xl', pB: '2xl', pH: 'l' }),
        ])}
      >
        <ChoiceGroup
          items={modes}
          value={mode}
          size="s"
          width="full"
          onChange={setMode}
          name="saveType"
        />
        <Text
          size="s"
          lineHeight="m"
          view="secondary"
          className={cnSaveModal('Description', [
            cnMixModal('Description'),
            cnMixSpace({ p: 's', mT: 's', mB: '2xl' }),
          ])}
        >
          После сохранения вы сможете открыть и продолжить работать с темой и
          после закрытия вкладки конструктора. Обратите внимание, что мы храним
          темы в LocalStorage браузера, поэтому очистка кеша приведёт к удалению
          сохранённых тем
        </Text>
        {mode?.id === 2 ? (
          <Select
            items={presets}
            size="m"
            value={currentTheme}
            style={{
              zIndex: 4,
            }}
            label="Существующая тема"
            placeholder="Выберите тему"
            getItemLabel={(item) => item.name}
            getItemKey={(item) => item.name}
            onChange={setCurrentTheme}
          />
        ) : (
          <TextField
            value={name}
            onChange={handleChange}
            size="m"
            status={isError ? 'alert' : undefined}
            placeholder="Придумайте название"
            label="Название темы"
            caption="От 4 до 20 символов"
          />
        )}
      </div>
      <div
        className={cnMixModal('Buttons', {}, [
          cnMixSpace({ pV: 'm', pH: 'l' }),
        ])}
      >
        <Button size="m" view="ghost" label="Отменить" onClick={onClose} />
        <Button
          size="m"
          label="Сохранить"
          onClick={onSave}
          disabled={disabled}
        />
      </div>
    </Modal>
  );
};
