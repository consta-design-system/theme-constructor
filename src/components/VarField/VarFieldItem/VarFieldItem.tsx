import './VarFieldItem.css';

import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { useAtom } from '@reatom/npm-react';
import React, { useMemo } from 'react';

import { isHelpAtom } from '##/modules/app';
import { cn } from '##/utils/bem';

import { VarFieldItemProps } from '../types';

const cnVarFieldItem = cn('VarFieldItem');

export const VarFieldItem = <ITEM,>(props: VarFieldItemProps<ITEM>) => {
  const {
    item,
    getItemRightSide,
    getItemLabel,
    getItemDescription,
    getItemValue,
  } = props;

  const { label, value, description } = useMemo(() => {
    return {
      label: getItemLabel(item),
      value: getItemValue(item),
      description: getItemDescription(item),
    };
  }, [item]);

  const [isHelp] = useAtom(isHelpAtom);

  return (
    <div className={cnVarFieldItem()}>
      <div
        className={cnVarFieldItem('Content', [
          cnMixSpace({ pH: 'm', pT: 'l', pB: value ? 'l' : 'xl' }),
        ])}
      >
        <Text size="s" weight="bold" lineHeight="xs">
          {label}
        </Text>
        {value && (
          <Text
            className={cnVarFieldItem('Value', [cnMixSpace({ mT: 'xs' })])}
            lineHeight="m"
            as="pre"
            size="xs"
            view="secondary"
          >
            {value}
          </Text>
        )}
        {description && isHelp && (
          <Text
            className={cnVarFieldItem('Description', [cnMixSpace({ mT: 's' })])}
            lineHeight="m"
            size="s"
            view="ghost"
          >
            {description}
          </Text>
        )}
      </div>
      {getItemRightSide && (
        <div className={cnVarFieldItem('Side')}>{getItemRightSide(item)}</div>
      )}
    </div>
  );
};
