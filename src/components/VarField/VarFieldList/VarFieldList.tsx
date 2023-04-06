import './VarFieldList.css';

import { getGroups } from '@consta/uikit/__internal__/src/utils/getGroups';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/utils/bem';

import { VarFieldListProps } from '../types';
import { VarFieldItem } from '../VarFieldItem';
import { withDefaultGetters } from './helper';

const cnVarFieldList = cn('VarFieldList');

export const VarFieldList = <ITEM,>(props: VarFieldListProps<ITEM>) => {
  const {
    className,
    items,
    groups: groupsProp,
    getItemRightSide,
    getItemGroupId,
    getItemLabel,
    getItemDescription,
    getItemValue,
  } = withDefaultGetters(props);

  const groups = getGroups(
    items,
    getItemGroupId,
    groupsProp,
    (group) => group.id,
    undefined,
  );

  return (
    <div className={cnVarFieldList(null, [className])}>
      {groups.map(({ items, group }) => {
        if (items) {
          return (
            <React.Fragment key={cnVarFieldList({ key: group?.label })}>
              {group?.label && (
                <Text
                  view="secondary"
                  size="s"
                  lineHeight="m"
                  className={cnVarFieldList('Group')}
                >
                  {group?.label}
                </Text>
              )}
              {items.map((item) => (
                <VarFieldItem
                  key={cnVarFieldList({ key: getItemLabel(item) })}
                  item={item}
                  getItemDescription={getItemDescription}
                  getItemLabel={getItemLabel}
                  getItemValue={getItemValue}
                  getItemRightSide={getItemRightSide}
                />
              ))}
            </React.Fragment>
          );
        }
        return null;
      })}
    </div>
  );
};
