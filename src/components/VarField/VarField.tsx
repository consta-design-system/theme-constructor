import './VarField.css';

import { IconRevert } from '@consta/icons/IconRevert';
import { Button } from '@consta/uikit/Button';
import { Collapse } from '@consta/uikit/Collapse';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { useFlag } from '@consta/uikit/useFlag';
import { useAtom } from '@reatom/npm-react';
import React from 'react';

import { isHelpAtom } from '##/modules/app';
import { cn } from '##/utils/bem';

import { VarFieldProps } from './types';

const cnVarField = cn('VarField');

export const VarField = (props: VarFieldProps) => {
  const {
    title,
    titileView = 'link',
    description,
    controls,
    listTitle = 'Переменные',
    listComponent,
    onReset,
  } = props;

  const [isOpen, setIsOpen] = useFlag();

  const [isHelp] = useAtom(isHelpAtom);

  return (
    <div className={cnVarField(null, [cnMixSpace({ pV: 'xl', pH: 'l' })])}>
      <Text view={titileView} size="s" lineHeight="xs" weight="bold">
        {title}
      </Text>
      {description && isHelp && (
        <Text
          size="s"
          className={cnVarField('Description', [cnMixSpace({ mT: 's' })])}
          lineHeight="m"
        >
          {description}
        </Text>
      )}
      <div
        className={cnVarField('Controls', [cnMixSpace({ mT: 'xl', mB: 'xl' })])}
      >
        {controls}
      </div>
      <button className={cnVarField('Reset')} type="button" onClick={onReset}>
        <Button
          as="div"
          iconLeft={IconRevert}
          onlyIcon
          size="s"
          view="ghost"
          form="round"
        />
        <Text size="s" view="secondary" lineHeight="m">
          Сбросить
        </Text>
      </button>
      {listComponent && (
        <Collapse
          className={cnVarField('List', [cnMixSpace({ mT: 'xl' })])}
          isOpen={isOpen}
          label={listTitle}
          size="xs"
          hoverEffect
          iconPosition="right"
          onClick={setIsOpen.toggle}
        >
          {listComponent}
        </Collapse>
      )}
    </div>
  );
};
