import './ConstructorVarsSelector.css';

import { ChoiceGroup } from '@consta/uikit/ChoiceGroup';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Switch } from '@consta/uikit/Switch';
import { Text } from '@consta/uikit/Text';
import { useAction, useAtom } from '@reatom/npm-react';
import React, { useMemo } from 'react';

import { isHelpAtom, varsTypeAtom } from '##/modules/app';
import { VarsType } from '##/types/theme';
import { cn } from '##/utils/bem';

import { vars } from '../helper';

const cnConstructorVarsSelector = cn('ConstructorVarsSelector');

const varsNameMap: Record<VarsType, string> = {
  color: 'цветов',
  shadow: 'теней',
  radius: 'радиуса',
  space: 'отступов',
  font: 'шрифта',
};

export const ConstructorVarsSelector: React.FC<{ className?: string }> = ({
  className,
}) => {
  const [isHelp] = useAtom(isHelpAtom);
  const [activeVar] = useAtom(varsTypeAtom);

  const setActiveVar = useAction((ctx, value: VarsType) =>
    varsTypeAtom(ctx, value),
  );

  const setIsHelp = useAction((ctx, value: boolean) => isHelpAtom(ctx, value));

  const title = useMemo(() => {
    return `Настройка ${varsNameMap[activeVar]}`;
  }, [activeVar]);

  return (
    <div
      className={cnConstructorVarsSelector(null, [
        cnMixSpace({ pV: 'l', pH: 'm' }),
        className,
      ])}
    >
      <div
        className={cnConstructorVarsSelector('Top', [cnMixSpace({ mB: 's' })])}
      >
        <Text size="m" lineHeight="m" weight="bold">
          {title}
        </Text>
        <Switch
          className={cnConstructorVarsSelector('Switch')}
          checked={isHelp}
          size="s"
          label="подсказки"
          onChange={({ checked }) => setIsHelp(checked)}
        />
      </div>
      <Text
        className={cnConstructorVarsSelector('Description', [
          cnMixSpace({ mB: 'xl' }),
        ])}
        size="s"
        lineHeight="m"
        view="secondary"
      >
        Цветовая схема в Consta формируется от базовых цветов. Измените их
        значения и цвета в теме автоматически пересчитаются.
      </Text>
      <ChoiceGroup
        size="s"
        width="full"
        name="-vars"
        value={vars.find((el) => el.type === activeVar)}
        onChange={({ value }) => setActiveVar(value.type)}
        items={vars}
      />
    </div>
  );
};
