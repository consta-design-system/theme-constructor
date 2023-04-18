import './ConstructorExampleChart.css';

import { Area } from '@consta/charts/Area';
import { cnMixSpace } from '@consta/uikit/MixSpace';
import { Text } from '@consta/uikit/Text';
import { useAtom } from '@reatom/npm-react';
import React from 'react';

import { spaceFactorAtom } from '##/modules/space';
import { cn } from '##/utils/bem';

import { colorMapLine, data } from './helper';

type Props = {
  className?: string;
};

const cnConstructorExampleChart = cn('ConstructorExampleChart');

export const ConstructorExampleChart = (props: Props) => {
  const { className } = props;

  const [space] = useAtom(spaceFactorAtom);

  return (
    <>
      <Text
        size="xl"
        lineHeight="m"
        weight="semibold"
        className={cnConstructorExampleChart('Title', [
          cnMixSpace({ mB: 's' }),
          className,
        ])}
      >
        График выполнения
      </Text>
      <Text
        className={cnConstructorExampleChart('Description', [
          cnMixSpace({ mB: 'xl' }),
        ])}
        size="s"
        lineHeight="m"
        view="secondary"
      >
        Заменить на: График показывает количество выполненных задач за
        определённый отрезок времени.
      </Text>
      <Area
        style={{
          marginBottom: 'var(--space-xs)',
          width: '100%',
          height: '352px',
        }}
        data={data}
        xField="date"
        yField="value"
        areaStyle={{
          shadowColor: 'var(--color-bg-default)',
        }}
        isStack={false}
        legend={{
          layout: 'horizontal',
          position: 'top-left',
          itemSpacing: space * 4,
          marker: () => ({
            symbol: () => {
              return [
                ['M', 4, 6],
                ['m', 0, 0],
                ['a', 4, 4, 0, 1, 0, 8, 0],
                ['a', 4, 4, 0, 1, 0, -8, 0],
              ];
            },
            spacing: space * 4,
          }),
        }}
        renderer="svg"
        seriesField="command"
        color={Object.keys(colorMapLine).map((key) => colorMapLine[key])}
      />
      <Text size="xs" lineHeight="m" view="secondary" align="center">
        Выполненные задачи
      </Text>
    </>
  );
};
