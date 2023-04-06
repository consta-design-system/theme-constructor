import './ConstructorExampleAnalyticCard.css';

import { Badge, BadgePropStatus } from '@consta/uikit/Badge';
import { Card } from '@consta/uikit/Card';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text, TextPropView } from '@consta/uikit/Text';
import React, { useMemo } from 'react';

import { cn } from '##/utils/bem';

const cnConstructorExampleAnalyticCard = cn('ConstructorExampleAnalyticCard');

export type ConstructorExampleAnalyticCardProps = {
  status: BadgePropStatus;
  title: string;
  description: string;
  attempts: number;
  installations: number;
};

const badgeLabelMap: Record<BadgePropStatus, string> = {
  success: 'Успех',
  normal: 'Устанавливается',
  system: 'Отмена',
  warning: 'Ошибка',
  error: 'Провал',
};

export const ConstructorExampleAnalyticCard = (
  props: ConstructorExampleAnalyticCardProps,
) => {
  const { status, title, description, attempts, installations } = props;

  const [view1, view2] = useMemo<
    [TextPropView | 'system', TextPropView | 'system']
  >(() => {
    if (status === 'success') {
      return ['system', 'success'];
    }
    if (status === 'normal') {
      return ['brand', 'brand'];
    }
    if (status === 'system') {
      return ['system', 'system'];
    }
    if (status === 'error') {
      return ['alert', 'system'];
    }
    return ['warning', 'warning'];
  }, [status]);

  return (
    <Card verticalSpace="xl" horizontalSpace="l" shadow>
      <div
        className={cnConstructorExampleAnalyticCard('Title', [
          cnMixSpace({ mB: '2xl' }),
        ])}
      >
        <div>
          <Text
            size="l"
            weight="medium"
            lineHeight="m"
            className={cnMixSpace({ mB: '3xs' })}
          >
            {title}
          </Text>
          <Text size="xs" lineHeight="m" view="secondary">
            {description}
          </Text>
        </div>
        <Badge
          label={badgeLabelMap[status]}
          status={status}
          size="xs"
          view="filled"
        />
      </div>
      <div className={cnConstructorExampleAnalyticCard('Values')}>
        <div className={cnConstructorExampleAnalyticCard('Point')}>
          <Text size="2xs" lineHeight="m" view="ghost">
            Попыток
          </Text>
          <Text
            className={cnConstructorExampleAnalyticCard('Value', {
              view: view1,
            })}
            view={view1 === 'system' ? 'secondary' : view1}
            weight="bold"
            size="m"
            lineHeight="m"
          >
            {attempts.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
          </Text>
        </div>
        <div className={cnConstructorExampleAnalyticCard('Point')}>
          <Text size="2xs" lineHeight="m" view="ghost">
            Установок
          </Text>
          <Text
            className={cnConstructorExampleAnalyticCard('Value', {
              view: view2,
            })}
            view={view2 === 'system' ? 'secondary' : view2}
            weight="bold"
            size="m"
            lineHeight="m"
          >
            {installations.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
          </Text>
        </div>
      </div>
    </Card>
  );
};
