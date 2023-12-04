import './ScenarioModalItem.css';

import { IconForward } from '@consta/icons/IconForward';
import { Text } from '@consta/uikit/Text';
import React from 'react';

import { cn } from '##/utils/bem';

type Props = {
  label: string;
  description?: string;
  className?: string;
  onClick?: React.MouseEventHandler;
  disabled?: boolean;
};

const cnScenarioModalItem = cn('ScenarioModalItem');

export const ScenarioModalItem = (props: Props) => {
  const { label, description, disabled, onClick, className } = props;
  return (
    <button
      className={cnScenarioModalItem({ disabled }, [className])}
      type="button"
      onClick={onClick}
    >
      <div className={cnScenarioModalItem('Content')}>
        <Text size="m" lineHeight="m" weight="semibold" view="primary">
          {label}
        </Text>
        {description && (
          <Text view="secondary" size="s" lineHeight="m">
            {description}
          </Text>
        )}
      </div>
      <div className={cnScenarioModalItem('Point')}>
        <IconForward size="s" />
      </div>
    </button>
  );
};
